


let pinCount = 0;
let accBal = 1000;
let pin = 0161;
let userInput;


//Let user enter pin number  
const pinblock = (pinCount, block) => {
    if (pinCount < 4){
        block = false;
    }
    else {
        block = true;
        alert('Your pin has been blocked');
    }
}



//varify pin
const checkPin = (pin) => {

    let userInput = prompt(parseInt('Please enter pin:'));
    
    if (userInput !== pin) {
        
        pinblock(pinCount++);
        checkPin()
    
    } else {
        alert('Welcome to ZIMTECH Bank');
        options()
    
    }

//options menu

const options = () => {
    
    let userInput = parseInt(prompt("Please select option 1. Withdraw Cash. 2. Deposit Cash. 3. Change pin. 4.Check balance. 5. Change currency. 6. Statement of actions 7. Exit."));
            
    if(userInput === 1) {
        withdrawCash();
    } else if(userInput === 2) {
        deposit();
    } else if(userInput === 3) {
        changePin(); 
    } else if(userInput === 4) {
        checkBal();
    } else if(userInput === 5) {
        changeCurr();
    } else if(userInput === 6) {
        stateOfAct();
    } else if(userInput === 7) {
        Exit();
    } else{
        alert('This is an invalid option.');
        options();
    }

        
    }



//withdraw cash function

const withdrawCash = () => {

    let cashToday = 100
    let limit = 250
    let cashAmount;
    
    
    cashAmount = prompt('How much cash would you like to withdraw? ');
    
    if (cashAmount <= accBal && cashAmount <= limit - cashToday) {

        alert(`Please take your cash of ${cashAmount}`);
        options()

    }
    
    else if (cashAmount > accBal) 

        
        alert(`You have insufficient funds. You account balance is', + accBal);
        withdrawCash()

    } 
    else if (cashAmount <= accBal && cashAmount > limit - cashToday) {

        alert('You have exceeded your daily limit. Plesae withdraw', + limit - cashToday);
        withdrawCash()


    }

}



//Check balance function

const checkBal = () =>{

    alert("You have ", + accBal + 'in your account.');
    options()


}



// Deposit Cash function

const deposit = () =>{

    let depositAmount = prompt('deposit up to £250. How much cash would you like to deposit?')

   
    do{
        deposit()
    
    }while(depositAmount > 250) 
    if(depositAmount <= 250) {
       
        accBal += parseInt(depositAmount)
        alert(accBal);
        options()
    }
}

pinblock()
changePin()
options()
withdrawCash()
checkBal()
deposit()





//9. Currency converter - I still need to do this in full. 

const changeCurr = (currency='GBP', lang='en') => {
            // if (typeof currency == 'undefined') {
            // currency = 'GBP';
            // }
            // if (typeof lang == 'undefined') {
            // currency = 'en';
            // }
            console.log(currency);
            console.log(lang)
        
        
}