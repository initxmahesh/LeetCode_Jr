var backspaceCompare = function(s, t) {
    const arr = [];
    for (let ele of s){
        if (ele !== '#'){
            arr.push(ele)
        }
        else arr.pop()
    }
    const nextArr = []
    for (let ele2 of t){
        if (ele2 !== '#'){
            nextArr.push(ele2)
        }
        else nextArr.pop()
    }
    if (arr.join() === nextArr.join())
    return true;
    else return false
};
