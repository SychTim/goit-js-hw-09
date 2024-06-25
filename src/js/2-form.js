let formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");

if (localStorage.getItem("feedback-form-state")) {
    formData.email = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    formData.message = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    form.email.value = formData.email;
    form.message.value = formData.message;
}

form.addEventListener('input', formUpdate);

function formUpdate (evt) {
    if (evt.target.type === "email") {
        formData.email = evt.target.value.trim();
    } else {
        formData.message = evt.target.value.trim();
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener('submit', formSubmit);

function formSubmit(evt) {
    evt.preventDefault();
    if (evt.currentTarget.message.value === '' || evt.currentTarget.email.value === '') {
        alert('Fill please all fields');
        return;
    }
  
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = '';
    formData.message = '';
    form.email.value = '';
    form.message.value = '';
}
