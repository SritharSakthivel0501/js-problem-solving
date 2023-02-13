// Write a function takes one parameter(inputString) and returns true if the input string is same as reversed string:
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
  reverse("hello");

//   2Write a function takes one parameter(inputString) and return the alternate cased output of that string:
function upper(str1){
    let name =""
    for (let i=0; i<str1.length;i++){
      if (i % 2 == 0){
        name = name + (str1[i].toUpperCase())
      }
     else{
      name = name +(str1[i])
     }
    }
    return name
  }
  console.log(upper("srikutty"));
//  3 Write a function takes one parameter(emailid) and hides the domain name of email id:
function param(str2){
    let final = ''
    for(let d=0;d<str2.length;d++){
        if(d>str2.indexOf("@") && d<str2.indexOf(".")){
            final = final+"*"
  
        }else{
            final = final+str2[d]
        }
    }
    return final
  }
  console.log(param("srithar@gmail.com"));

//  4 Write a function takes one parameter(number in string format) and returns readable value for our understanding:
function num(sta) {
    for (let i = 0; i < sta.length;i++){
  
       if(sta.match(/[a-z]/i)){
          return "error"
        }
        else if (sta.slice(-1) ==  "1"  && sta !== "11" ){
       return sta +"st"
    }
    else if( sta.slice(-1) == "2"  && sta !== "12"){
      return sta+"nd"
    }
    else if (sta.slice(-1) == "3" && sta !="13"){
      return sta+ "rd"
    } 
      else if(sta.match(/[0-9]/)){
        return sta+"th"
      }
      else{
        return "error"
      }
    } 
  }
  console.log(num("35"))

// 5  Write a function takes one two params(first-arrayOfObjects, second- searchStr) and returns the unmatch value of an array:
function str2(obj,inputString){
    let result =[]
    for(let i=0;i<obj.length;i++){
      if(obj[i].product_name !== inputString){
        result.push(obj[i])
      }
  
    }
    return result
  }
  console.log(str2([
    {product_id:1,product_name:"soap", category: "home"},
    {product_id:2,product_name:"screwdriver", category: "industry"},
    {product_id:3,product_name: "jeans", category: "clothes"}
  ],
  "jeans"
  ))
  
//  6 Write a function which removes null, undefined, true, 2, 5, false, Nan from an array and returns the updated array:
function param(arr){
    let result = [];
    for(let j=0;j<arr.length;j++){
        if(Boolean(arr[j]) == true)
        result.push(arr[j])     
        }
        return result
    }
console.log(param([NaN,0, 15, false, -22, '',undefined, 47, null]));

// 8 Write a function takes three params first one being the input string, second is prefix word and third is suffix word:
function letter(n1,n2,n3){
    let result=''
    let arr =[n1,n2,n3]
    for(let i=0;i<arr.length;i++){
        if(i==0){
            i=1
            result = result+arr[i]
            if(i==1){
                i=0
                result= result+arr[i]
            }
        }
        else if(i=2){ 
            result= result+arr[i]
        }
    }
return result
    }
console.log(letter("nameis","my","srithar"));

// 9 Write a function takes input String password, check if the password is weak or string:
function password(value){
    let result = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/
    for (let i=0;i<value.length;i++){
      if(value.match(result)){
       return "this strong password"
      }
      else {
        return "this is weak password"
      }
    }
  }
  console.log(password('1234567'))

  var password = "12345623"; 

if(password.length < 8) { 

console.log("Error: Password must be at least 8 characters"); 

} else if(password.search(/[a-z]/) < 0) { 

console.log("Error: Password must contain at least one lowercase letter"); 

} else if(password.search(/[A-Z]/) < 0) { 

console.log("Error: Password must contain at least one uppercase letter"); 

} else if(password.search(/[0-9]/) < 0) { 

console.log("Error: Password must contain at least one number"); 

} else { 

console.log("Success!"); 

}  