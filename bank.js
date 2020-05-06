
//Intro to Bank



let name = prompt(`Hello and welcome to ZIMTECH bank. 
Thank you for banking with us. Please enter your name: `);

const enterPin = () => {

    let userPin = prompt(`Hello, Please enter your pin: `);

     for(let i = 1; i < 4; i++){

        if(userPin == 0161)
        {
            options()
           
        }
        elseif(userPin != 0161)
        {
            prompt("Please enter correct pin");
        }
        


        
        
    
       }
    
    

    

const options = () => {

    let userOption = prompt(`Hello Please selct an option: 1. Withdraw Cash 2. Deposit 3. Change Currency  
    4. Change Pin  5. Check Balance`);
   
    if(userOption == 1){
        withdrawCash()
    }
    elseif(userOption == 2);{
        deposit()
    }
    elseif(userOption == 3);{
        checkBal() 
    }
    elseif(userOption == 4);{
        pinChange()

    }
    elseif(userOption == 5);{
        helpLine()
    }
    

}


//switch is not working, check its correctly done

let accBal = 1000;

const withdrawCash = () => {
    let WT = 100
    let limit = 250

    let WA = prompt(`How much cash would you like to withdrawal ${name}?`);

    switch (WA){
        case WA <= accBal && WA <= limit - WT:
            alert(`Please take your cash of ${WA}`);
            break;
        case WA > accBal && WA <= limit - WT:
            alert(`You have insufficient funds,please withdraw ${accBal} or less`);
            break;
        case WA <= accBal && WA > limit - WT:
            alert(`You have exceeded your daily limit of ${limit}`);
            break;
        default:
            prompt(`Please enter a withdrawal amount`);
            break;

    }

}


const deposit = () => {

    let sum = accBal
    let depositAmount = prompt(`How much cash would you like to deposit ${name}?`);

    for(let i = 0; i > 3; i++)
    {
        if(depositAmount > 250);
        alert("You can deposit upto 250 per day maximum");
          
    }
    elseif(depositAmount <= 250)
    {
        let totalBal = sum + depositAmount
        alert(`Your deposit have an account balance of ${totalBal}`);
    }

    return totalBal;


}

const checkBal = () => {
    let accBal = 1000;
    
    alert(`You have ${accBal}`);
    let answer = prompt("Would you like another service? Answer yes or no: ");
    if(answer == "YES".toLowerCase());
    {
        options()
    }
    if(answer = "NO".toLowerCase());
    {
        alert(`Thank for using ZIMTECH, goodbye ${name}.`);
    }


   }
   
  

const blockedPin = () => {


    alert("Your pin has been blocked. Have a great day :) ");
    

}



const pinChange = () => {

    let conPin = prompt("Please enter your pin:");
    let oldPin;

    if(conPin == 0161){
        let newPin = prompt("Thank you. Plesae enter your new pin");

        oldPin = newPin;

        alert(newPin);

        

          

    }
}


const helpLine = () =>{

    alert("")
}




}



enterPin(1)
options()


enterPin()
options()
