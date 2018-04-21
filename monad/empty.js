class Empty {
  
  static of() {
    return new Empty()
  }
  
  map(f) {
    return this
  }
  
  fmap(_) {
    return Empty.of()
  }
  
  toString() {
    return `Empty ()`
  }
}

const empty = () => new Empty()

module.exports = Empty