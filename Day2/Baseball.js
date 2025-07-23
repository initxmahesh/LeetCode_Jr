var calPoints = function(operations) {
    let arr = [];
    for (let i=0; i<operations.length; i++){
        if (operations[i] !== 'C' && operations[i] !== 'D' && operations[i] !== '+'){
            arr.push(Number(operations[i]))
        }else if (operations[i] === 'C'){
            arr.pop()
        }else if (operations[i] === 'D'){
            arr.push((arr[arr.length-1] * 2)) 
        }else if (operations[i] === '+'){
            let sum = (arr[arr.length-2]) + (arr[arr.length-1])
            arr.push(sum)
        }       
    }
    return arr.reduce((a, b) => a + b, 0);
};