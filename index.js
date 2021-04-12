class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length+= 1;
    this.items.sort((a, b) => {
      return a -b
    });
  }

  get(pos) {
    if ( this.items.length < pos ) {
    throw new Error('OutOfBounds');
  } else {
    return this.items[pos];
    }
  }
  
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (Math.max(...this.items));
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (Math.min(...this.items));
    }
  }

  sum() {
    let total = 0
    if (this.items.length === 0) {
      return 0
    } else {
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i];
      }
      return total
    }
  }

  avg() {
    let total = 0
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      for (let i = 0; i < this.items.length; i++) {
        total += this.items[i] / this.items.length;
      }
      return total
    }
  }
}

module.exports = SortedList;
