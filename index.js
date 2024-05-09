document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('button[value="submit"]');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();


        const requiredFields = ['firstName', 'lastName', 'birthDate', 'daytimePhone', 'appointmentDate', 'appointmentTime'];
        let isFormFullyFilled = true;

        // Remove any previous error messages
        removeErrorMessages();

        requiredFields.forEach(fieldId => {
            const inputElement = document.getElementById(fieldId);
            if (!inputElement.value.trim()) {

                // Display error message
                displayErrorMessage(inputElement, 'error this field is required.');
                isFormFullyFilled = false;
            }
        });

        //if form is filled
        if (isFormFullyFilled) {
            alert('Form is fully filled. Proceed with form submission.');
        }
    });

    function displayErrorMessage(inputElement, message) {
        const errorMessage = document.createElement('span');
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
        errorMessage.className = 'error-message';
        if (inputElement.nextSibling) {
            inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
        } else {
            inputElement.parentNode.appendChild(errorMessage);
        }
    }

    function removeErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
    }
});