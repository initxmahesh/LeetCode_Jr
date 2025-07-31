var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies)
    let res = []
    for (let i=0; i< candies.length; i++){
        let sum = candies[i] + extraCandies
        if (sum >= maxCandies){
             res.push(true)
        }
        else  res.push(false)
    }
    return res;
};