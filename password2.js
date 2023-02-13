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
  console.log(password('1234567@'))
  