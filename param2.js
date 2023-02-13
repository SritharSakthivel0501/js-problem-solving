// // 5.Write a function which removes null, undefined, true, 2, 5, false, Nan from an array and returns the updated array:


function param(arr){
    let result = [];
    for(let j=0;j<arr.length;j++){
        if(Boolean(arr[j]) == true)
        result.push(arr[j])     
        }
        return result
    }
console.log(param([NaN,0, 15, false, -22, '',undefined, 47, null]));