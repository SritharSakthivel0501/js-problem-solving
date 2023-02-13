//1. Write a function takes one parameter(inputString) and returns true if the input string is same as reversed string:

function reverse (str){
    let a =""
    for(let i =str.length-1; i>=0 ; i--){
      a = a + str[i];
    }
    if(a === str){
       console.log("true")

    }
    else{
      console.log("false")
    }
     
  }
  reverse("malayalam");