// function str2(obj,sri){
//     let result =[]
//     for(let i=0;i<obj.length;i++){
//       if(obj[i].product_name !== sri){
//         result.push(obj[i])
//       }
  
//     }
//     return result
//   }
function jathu(kutty,sri) {
  let tharsika = []
  for(let i = 0; i<kutty.length; i++){
    if(kutty[i].product_name !== sri) {
      tharsika.push(kutty[i])
    }
  }
  return tharsika
}
console.log(jathu([
  {product_id:1,product_name:"soap", category: "home"},
  {product_id:2,product_name:"screwdriver", category: "industry"},
  {product_id:3,product_name: "jeans", category: "clothes"}
],
"jeans"
))



  // console.log(str2([
  //   {product_id:1,product_name:"soap", category: "home"},
  //   {product_id:2,product_name:"screwdriver", category: "industry"},
  //   {product_id:3,product_name: "jeans", category: "clothes"}
  // ],
  // "jeans"
  // ))
  