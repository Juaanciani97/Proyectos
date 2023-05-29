const form = document.querySelector('#btn-sent');
form.addEventListener("click", preventDF);

function preventDF() {
    form.preventDefault();
}