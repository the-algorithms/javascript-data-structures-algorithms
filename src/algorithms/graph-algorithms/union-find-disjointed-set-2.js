class disjointSet {

    parents = []
  
    constructor(N) {
  
      this.parents = new Array(N).fill(0);
  
      this.parents = this.parents.map((v, i) => i);
  
    }
  
    Find = a => {
  
     while (a != this.parents[a])
  
       a = this.parents[a];
  
     return a;
  
    }
  
    Union = (a, b) => {
  
      const rootA = this.Find(a),
  
            rootB = this.Find(b);
  
  
  
      if (rootA == rootB) return;
  
  
  
      this.parents[rootB] = rootA;
  
    }
  
  
  
    isInSameGroup = (a, b) => this.Find(a) == this.Find(b);
  
  }