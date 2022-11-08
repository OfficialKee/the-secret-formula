let alertForm = document.querySelector('#alertForm');

let alertInput = document.querySelector('#alertInput');

alertForm.addEventListener('click',function(event){
    event.preventDefault();

    alert(alertInput.value);
    alertInput.value = '';

})

// --------------------------------part2

let sandwichForm = document.querySelector('#sandwichForm')

let toppings = document.querySelectorAll('#sandwichForm .ingredients');

// for (let item of toppings) {
//     console.log(item.id);
// };

sandwichForm.addEventListener('submit',function(event){
    event.preventDefault();
    let newStr = 'Your sandwich contains:'

    for (let item of toppings) {
        if(item.checked === true){
            newStr += ` ${item.id}`
        }

        
    }
    
    alert(newStr);
    newStr = 'Your sandwich contains:';
    
})

//--------------------------------part3

let haircutForm = document.querySelector('#haircutForm');

let haircutDate = document.querySelector('#date');

let barber = document.querySelector('#barber');

let longHair =document.querySelector('#long');

let shortHair = document.querySelector('#short');

haircutForm.addEventListener('submit',function(event){
    event.preventDefault;
    let hairStr = ''

    if(longHair.checked === true){
        hairStr += 'for long hair'
    }else if(shortHair.checked===true){
        hairStr += 'for short hair'
    }


    alert(`Haircut scheduled for ${haircutDate.value} with ${barber.value} ${hairStr}`)
   
})

let accountCreation = document.querySelector('#accountCreation');

let userName = document.querySelector('#userName');

let email = document.querySelector('#email');

let password =document.querySelector('#passwordOne');

let confirmPassword = document.querySelector('#passwordTwo');


accountCreation.addEventListener('submit',function(event){
    event.preventDefault;


if( password.value===confirmPassword.value){
    alert(`username:${userName.value}\n email:${email.value} `)
}else{
    alert(`Passwords do not match!`)
}


   
})






