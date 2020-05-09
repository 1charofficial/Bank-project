
//Previous check pin function
const enterPin = () => {

    let attempts = 1;
    let userPin;
    
    
    userPin = prompt("Please enter your pin: ");
    if(userPin === pinNum){
        withdrawCash()
       
    }
    while(userPin !== pinNum && attempts <= 3)
    do{
        (attempts++)
        prompt(`please enter correct pin. You have had ${attempts} attempt(s).`);
        
        if(attempts === 0){
            
            alert("Sorry, you have exceeded your attepts");
        }
    
       }
    
    while(true)
}



var personalDetails = ['charmaine', '0161', 'female', 'manchester', 'libra'];


//9. Currency converter

//const changeCurr = (currency='GBP', lang='en') => {
    // if (typeof currency == 'undefined') {
    // currency = 'GBP';
    // }
    // if (typeof lang == 'undefined') {
    // currency = 'en';
    // }
    //console.log(currency);
    //console.log(lang)


