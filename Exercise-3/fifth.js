function generateSentence(desc, arr){
    let ans = ""
    ans = `The ${arr.length} ${desc} are `
    for(let i = 0; i < arr.length; i++){
        if(i == arr.length - 1)
            ans += arr[i]
        else
            ans += arr[i]+", "
    }
    return ans
}

let the_ans = generateSentence("largest countries", ["China", "India", "USA", "Indonesia"])
console.log(the_ans)