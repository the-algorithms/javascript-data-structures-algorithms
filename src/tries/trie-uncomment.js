
class TrieNode {
    constructor() {
      this.end = false;
      this.links = new Map();
    }
    
    containsKey = (ch) => this.links.get(ch) != null;
    get = (ch) => this.links.get(ch);
    put = (ch, node) => this.links.set(ch, node)
    isEnd = () => this.end;
    setEnd = () => this.end = true;
  }
  
class Trie {

    constructor() {
        this.root = new TrieNode();
    }

    insert (word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
        let c = word.charAt(i);
        if (!node.containsKey(c))
            node.put(c, new TrieNode());
        node = node.get(c);
        }
        node.setEnd();
    }

    searchPrefix(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
        let c = word.charAt(i);
        if (node.containsKey(c))
            node = node.get(c);
        else
            return null;
        }
        return node;
    }

    search(word) {
        let node = this.searchPrefix(word);
        return node != null && node.isEnd();
    }

    startsWith(prefix) {
        const node = this.searchPrefix(prefix);
        return node != null;
    }
}
  