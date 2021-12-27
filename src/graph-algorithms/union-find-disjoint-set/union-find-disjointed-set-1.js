// More details
// http://cp-algorithms.com/data_structures/disjoint_set_union.html

// DISJOINT SET / UNION-FIND

class DisjointSet {
  
    parents = []
  
    constructor(N){
      this.parents = new Array(N + 1).fill(0).map((n, i) => i);
    }
    
    Union = (a, b) => {
      const rootA = this.Find(a),
            rootB = this.Find(b);
      
      if (rootA == rootB) return;
      this.parents[rootB] = rootA;
    }
    
    Find = a => {
      while (a != this.parents[a])
        a = this.parents[a];
      
      return a;
    }
    
    isInSameGroup = (a, b) => {
      return this.Find(a) == this.Find(b);
    }
  }
  
  