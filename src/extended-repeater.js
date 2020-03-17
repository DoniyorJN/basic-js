module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1
  const separator = options.separator || "+"
  const addition = options.addition !== undefined ? options.addition : ""
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const additionSeparator = options.additionSeparator || "|"

  let resultAddition = ""
  for (let i = 1; i < additionRepeatTimes; i++) {
    resultAddition = `${resultAddition}${addition}${additionSeparator}`
  }
  resultAddition += addition

  let resultString = ""
  for (let i = 1; i < repeatTimes; i++) {
    resultString = `${resultString}${str}${resultAddition}${separator}`
  }
  resultString += `${str}${resultAddition}`

  return resultString
}