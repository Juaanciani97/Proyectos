// Variables //
const btn = document.querySelector('#button');
const alertspawn = document.querySelector('.alert-spawn');
const form = document.querySelector('#form-1');

let email = document.querySelector('#email');
let reg = /@/;

//Eventos//
btn.addEventListener('click', copyData);
form.addEventListener('submit', sendform);
//Funciones//

function sendform(e) {
    e.preventDefault();

    if (reg.test (email.value)) {
        formAlert('Received on console');
        console.log(
            e.target.name.value,
            e.target.email.value);
    } else {
        errorAlert('is not an email');
    }
};

function formAlert(e) {
    const sent = document.createElement('P');
    sent.textContent = e;
    sent.classList.add('alert-copy');
    form.appendChild( sent );

    setTimeout( () => {
        sent.remove();  
    }, 5000);
}

function errorAlert(e) {
    const error = document.createElement('P');
    error.textContent = e;
    error.classList.add('error-copy');
    form.appendChild( error );

    setTimeout( () => {
        error.remove();  
    }, 5000);
}

function copyData() { 
    navigator.clipboard.writeText('77181223');

    const alert = document.createElement('P');     
    alert.textContent = 'Copied';
    alert.classList.add('alert-copy');
    alertspawn.appendChild( alert );

    setTimeout( () => {
        alert.remove();  
    }, 5000);
}
// Local storage auto-save info //
localStorage.setItem("contactnumber", 77181223);
console.log(localStorage.getItem("contactnumber"));





