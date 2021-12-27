function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(5);
var b = new TreeNode(1);
var c = new TreeNode(7);
a.left = b;
a.right = c;


class Foo {

  constructor(root) {
    this.root = root;
    this.it = this[Symbol.iterator]();
  }

 *[Symbol.iterator] () {
   yield this.root.val;
   yield this.root.val;
   yield this.root.val;
 }

 

}

var foo = new Foo(a);
console.log(foo.it.next())
console.log(foo.it.next())


//////////////
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

class Foo {

  constructor(root) {
    this.root = root;
  }

 *[Symbol.iterator]() {
    this.inorder(this.root)
 }

 *inorder(root) {
   let curr = root
   if (curr != null) {
     this.inorder(curr.left);
     yield curr.val;
     this.inorder(curr.right);
   }
 }
}

const a = new TreeNode(5);
const b = new TreeNode(1);
const c = new TreeNode(7);
a.left = b;
a.right = c;

const foo = new Foo(a);
const it = foo[Symbol.iterator]()
console.log(it.next())
console.log(it.next())

/*
class Foo {

 *[Symbol.iterator] () {
   yield 1;
   yield 2;
   yield 3;
 }
}

const foo = new Foo();
const it = foo[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
*/