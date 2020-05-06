let name = prompt(`Hello and welcome to ZIMTECH bank. 
Thank you for banking with us. Please enter your name: `);

const enterPin = () => {

        

        let userPin = prompt(`Hello, Please enter your pin: `);

        for(let i = 1; i < 4; i++){

        if(userPin == 0161)
        {
            options()
           
        }
        elseif(userPin != 0161);

        alert("You have exceeded your attepts, you pin has been blocked");
        

    }
}

const 










    const deposit = () => {

        let accBal = 1000

        let depositAmount = prompt(`How much cash would you like to deposit?`);
        
        if(number(depositAmount > 250))
        {
            alert("You can deposit upto 250 per day maximum");
        }    
        
        elseif(number(depositAmount <= 250))
        {
            
            alert(`You have an account balance of ${accBal + depositAmount}`);
        }
    
        
    
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


       enterPin()
       deposit()