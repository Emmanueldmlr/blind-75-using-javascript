const arrayOfNumbers = [1,2,3,4]

const productOfArray = (values) => {
    const result = [1]
    let postfix = 1
    for(let i = 1; i < values.length; i++){
        result.push(values[i-1] * result[i-1])
    }

    for(let i = values.length -1;  i >= 0; i--){
        result[i] = result[i] * postfix
        postfix = postfix * values[i]
    }

    return result
}

console.log(productOfArray(arrayOfNumbers))