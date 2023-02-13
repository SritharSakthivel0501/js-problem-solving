// 2.Write a function takes one parameter(inputString) and return the alternate cased output of that string:

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