const input = [7,1,5,3,6,4]

const findMaxProfit = (values) => {
    let leftPointer = 0, rightPointer = 1, maxProfit = 0
    for(rightPointer; rightPointer < values.length; rightPointer++){
        if(values[rightPointer] > values[leftPointer]){
            const profit = values[rightPointer] - values[leftPointer]
            maxProfit = profit > maxProfit ? profit : maxProfit
        }
        else{
            leftPointer = rightPointer
        }
    }
    return maxProfit
}

console.log(findMaxProfit(input))