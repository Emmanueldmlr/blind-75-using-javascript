const nums = [1,2,1,3]

const isArrayContainsDuplicate = (value) => {
    let isDuplicate = false
    const hashMap = {}
    for(let i = 0;  i < value.length; i++){
        const num = value[i]
        if(hashMap[num]){
            isDuplicate = true
            break
        }
        else{
            hashMap[num] = 1
        }
    }
    return isDuplicate
}

console.log(isArrayContainsDuplicate(nums))