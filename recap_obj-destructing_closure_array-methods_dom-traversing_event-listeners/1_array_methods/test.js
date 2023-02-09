const adder = (value) => {
  return {
    addToValue(input){
      return value = value + input

    },
    resetValue(resetTo){
      return value = resetTo
    }
  }
}
const addToThree = adder(3)
console.log(addToThree.addToValue(1))
console.log(addToThree.addToValue(1))
console.log(addToThree.addToValue(1))
console.log(addToThree.resetValue(3))
console.log(addToThree.addToValue(10))