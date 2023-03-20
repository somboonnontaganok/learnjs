// const fistName = document.getElementById(fname);
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");

form.addEventListener('submit', (e) => {
    let message = [];
        if(fname.value === '' || fname.value === null) {
            message.push('First Name is required');
        }
        
        if(lname.value === '' || lname.value === null) {
            message.push(' Last Name is required');
        }
        
        if(email.value === '' || email.value === null) {
            message.push(' Email is required');
        }

        if(password.value === '' || password.value === null) {
            message.push(' Password is required');
        }

        if(message.length > 0) {
            e.preventDefault();
            errorElement.innerHTML = message.join(',');
        }
        console.log(fname);
    }
)

