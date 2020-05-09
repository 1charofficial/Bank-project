
//I found this example of a function and I am experimenting with it. It will be chopped and changed a little and more than likely turned into 2 seperate functions.
//One will use the DOM to take an input instead of using prompts - trying to fugure it out! I can also use input to push new data to the array (personal details)
// - maybe replace existing data, i.e pin change.

//The other function will be usd for a click and display, i.e to show the user any information I wish to communicate.
//----------------------------------------------------------------



var myArray = ['Mon - 9am-5pm ', ' Tues - 9am-5pm ' ,' Wed - 9am-5pm ' ,' Thurs - 9am-5pm ' ,' Fri - 9am-5pm '];

const pushData = () => {
    //get input value from user
    let inputText = document.getElementById('inputText').value;

    //append data to the array

    myArray.push(inputText);

    let pval = " ";

    for(let i = 0; i < myArray.length; i++)
    {
        pval = pval + myArray[i];
    }


    //display array data
    document.getElementById('pText').innerHTML = pval 


}

let personalDetails = ['charmaine', '0161', 'female', 'manchester', 'libra'];

const changePinDom = () => {
    //get input value from user - extend this to prompt the user to input data, without using the actual prompt method!
    let inputText = document.getElementById('inputText').value;

    //update data to the array

    personalDetails.replace(inputText);

    let newPin = " ";

    for(let i = 0; i < personalDetails.length; i++)
    {
        newPin = personalDetails[1];
    }

    document.getElementById('confirmPin').innerHTML = newPin

    


    


}

