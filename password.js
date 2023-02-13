// // 6.Write a function takes input String password, check if the password is weak or string:

// var password = "Sritharjathu1"; 

// if(password.length < 8) { 

// console.log("Error: Password must be at least 8 characters"); 

// } else if(password.search(/[a-z]/) < 0) { 

// console.log("Error: Password must contain at least one lowercase letter"); 

// } else if(password.search(/[A-Z]/) < 0) { 

// console.log("Error: Password must contain at least one uppercase letter"); 

// } else if(password.search(/[0-9]/) < 0) { 

// console.log("Error: Password must contain at least one number"); 

// }  else { 

// console.log("Success!"); 

// }  

let jathu = "Jathusri123"

if(jathu.length<8){
    console.log("Error: Password must be at least 8 characters");
}
else if(jathu.search(/[a-z]/) ) { 

    console.log("Error: Password must contain at least one lowercase letter"); 
    
} 
else if(jathu.search(/[A-Z]/) ) { 
    
    console.log("Error: Password must contain at least one uppercase letter"); 
    
} 
else if(jathu.search(/[0-9]/) ) { 
    
    console.log("Error: Password must contain at least one number"); 
    
}  
else { 
    
    console.log("Success!"); 
    
} 