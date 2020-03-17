module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1

    if (Array.isArray(arr)) {
      for (let item of arr) {
        if (Array.isArray(item)) {
          depth = Math.max(this.calculateDepth(item) + 1, depth)
        }
      }

      return depth
    } else return 0
  }
}