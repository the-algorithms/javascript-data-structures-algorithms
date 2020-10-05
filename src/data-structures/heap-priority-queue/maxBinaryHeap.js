class MaxBinaryHeap {
  values = [];
  //helper method that swaps the values and two indexes of an array
  swap = (i, j) =>
    ([this.values[i], this.values[j]] = [this.values[j], this.values[i]]);
  //helper methods that bubbles up values from end
  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[parentIndex] < this.values[index]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else break;
    }
    return 0;
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this.values;
  }
}
