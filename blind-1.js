const arrayOfNumbers = [2,1,5,3]
const targetValue = 4

const twoNumbersAddition = (numbers, target) => {
    const hashMap = {}
    let result
    numbers.forEach((number, index) => {
        const secondPair = target - number
        if(secondPair in hashMap){
            result = [hashMap[secondPair], index ]
            return
        }
        else{
            hashMap[number] = index
        }
    })
    return result
}

console.log(twoNumbersAddition(arrayOfNumbers, targetValue))