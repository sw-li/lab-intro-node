class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) { 
    this.items.push(item)
    this.items.sort()
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
