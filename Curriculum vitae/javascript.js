document.getElementById('button').onclick = function datainfo () {
    document.getElementById('demo').innerHTML = "¡Copied!"
}

localStorage.setItem("contactnumber", 123456789);
console.log(localStorage.getItem("contactnumber"));



const form = document.querySelector('#form-1');

const sendform = (event) => {
    event.preventDefault();

    console.log(
        event.target.name.value,
        event.target.email.value
    );

    document.getElementById('emailsent').innerHTML = "¡Received in console!"
};

form.addEventListener('submit', sendform);





