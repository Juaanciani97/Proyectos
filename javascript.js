document.getElementById('button').onclick = function datainfo () {
    document.getElementById('demo').innerHTML = "¡Copied contact number!"
}



const form = document.querySelector('#form-1');

const sendform = (event) => {
    event.preventDefault();

    console.log(
        event.target.name.value,
        event.target.email.value
    );

    document.getElementById('emailsent').innerHTML = "¡Sent to console!"
};

form.addEventListener('submit', sendform);





