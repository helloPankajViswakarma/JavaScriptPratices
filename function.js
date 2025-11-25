// function helloWorld() {

//     return "Hello, World!";
// }

// console.log(helloWorld());


// function sayHello(a ,b) {
//     return a + b;
// }
// console.log(sayHello(5, 10));

//parameter type checking 
// function addNumbers(num1, num2) {

//     console.log(num1 + num2);
//     }

    // addNumbers(5, 10);
    
    //arguments type checking


//     function addNumbers(num1, num2) {
//     // let result =num1 + num2;
//     // console.log("result inside function",result);
//     // return result;
// return num1 + num2;   
// }
//    const result= addNumbers(5,40);
//    console.log("result",result);


function  loginUserMessage(usernamr="pankaj"){
    // if (usernamr === undefined){
    //     console.log( "Please provide a username");
    //     return  
    //   }
    if(!usernamr)
{
        console.log( "Please provide a username");
}
        return `Welcome back, ${usernamr}!`;
    
    // return `Welcome back, ${usernamr}!`;
}
// const user =loginUserMessage();
// const user =loginUserMessage("John");
console.log(loginUserMessage());