var removeDuplicates = function(s) {
    let arr = [];
    for (let ele of s){
        if (ele !== arr[arr.length-1]){
            arr.push(ele)
        }else{
            arr.pop()
        }
    }
    return arr.join('')
};