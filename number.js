// // 4.Solve using built -in methods & without built-in-methods(using only loop) and see the difference Two solutions for the above problem (one using builtin and one using only loops)

function num(str3) {
    for (let i = 0; i < str3.length;i++){
  
       if(str3.match(/[a-z]/i)){
          return "error"
        }
        else if (str3.slice(-1) ==  "1"  && str3 !== "11" ){
       return str3 +"st"
    }
    else if( str3.slice(-1) == "2"  && str3 !== "12"){
      return str3+"nd"
    }
    else if (str3.slice(-1) == "3" && str3 !="13"){
      return str3+ "rd"
    } 
      else if(str3.match(/[0-9]/)){
        return str3+"th"
      }
      else{
        return "error"
      }
    } 
  }
  console.log(num("204"));


  //***2***

//   function numbertoLetters(str){
//     for (let i = 0; i < str.length; i++) {
//       if(str == "1" && str !== "11"){
//        return str +"st"
//       }
//       else if(str == "2" && str !== "12"){
//        return str +"nd"
//       }
//         else if(str == "3" && str !== "13"){
//         return str +"rd"
//         }
//       else{
//        return str+"th"
//       }
//     }
//   }
//   console.log(numbertoLetters("10@3w"))
  