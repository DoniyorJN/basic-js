const chainMaker = {
  links: [],

  getLength() {
    return this.links.length
  },

  addLink(value = "()") {
    this.links.push(value)
    return this
  },

  removeLink(position) {
    if (!isNaN(position) && position > 0 && position <= this.links.length) {
      this.links.splice(position - 1, 1)
      return this
    } else {
      this.links = []
      throw new Error()
    }
  },

  reverseChain() {
    this.links = this.links.reverse()
    return this
  },

  finishChain() {
    let chain = ""
    for (let link of this.links) {
      chain = `${chain}( ${link} )~~`
    }
    this.links = []
    return chain.slice(0, -2)
  }
}

module.exports = chainMaker