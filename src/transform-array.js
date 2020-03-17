module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    length = arr.length;
    result = [];
  
    for (let i = 0; i < length; i++) {
      switch (arr[i]) {
        case '--discard-prev':
          if (result.length) result.pop();
          break;
        case '--double-prev':
          if (i) result.push(arr[i - 1]);
          break;
        case '--double-next':
          if (i < length - 1) result.push(arr[i + 1]);
          break;
        case '--discard-next':
          i++;
          break;
        default: 
          result.push(arr[i]);
      };
    };
  return result;
};