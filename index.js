const form = document.querySelector("#form-js");
const inputBox = document.querySelector("#input__email-js");
const submitBtn = document.querySelector("#input__submit-js");
const errorMssg = document.querySelector("#error-mssg-js");
var emailAddress;

function setError(mssg) {
    inputBox.classList.add('input__email--error');
    errorMssg.style.display = 'block';
    errorMssg.innerHTML = `<em>${mssg}</em>`;
};

function removeError() {
    inputBox.classList.remove('input__email--error');
    errorMssg.style.display = 'none';
};

function isEmail(param) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(param);
};

function checkEmail() {
     emailAddress = inputBox.value.trim();

    if ( emailAddress === '' )  {
        setError('Please, email cannot be empty');
    } else if ( !isEmail(emailAddress) ) {
        setError('Please, provide a valid email address');
    } else { 
        removeError()
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
});