// function letter(n1,n2,n3){
//     let result=''
//     let arr =[n1,n2,n3]
//     for(let i=0;i<arr.length;i++){
//         if(i==0){
//             i=1
//             result = result+arr[i]
//             if(i==1){
//                 i=0
//                 result= result+arr[i]
//             }
//         }
//         else if(i=2){ 
//             result= result+arr[i]
//         }
//     }
// return result
//     }
// console.log(letter("nameis","my","srithar"));

function jathu(n1,n2) {
    let sri = ""
    let arr = [n1,n2]
    for (let i = 0; i < arr.length; i++) {
        if(i == 0){
            i = 1 
            sri = sri+arr[i]
            if(i == 1){
                i = 0 
                sri = sri+arr[i]
            }

        }
        return sri
        
    }
}
console.log(jathu("sri","jathu"))
