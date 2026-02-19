import { SELECTORS } from "./constantins.js";
import { hideError, validateForm, validateSingleName, validateEmail, validateMessage } from "./validations.js";

function initEventListener() {
    SELECTORS.radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            SELECTORS.radioBlock.forEach(wraper => {
                wraper.classList.remove('active');
            });

            e.target.closest('.radio-input').classList.add('active');

            hideError(SELECTORS.radiogroup, SELECTORS.errorRadios);
        });
    });

    SELECTORS.consent.addEventListener('change', () => {
        hideError(SELECTORS.consent, SELECTORS.errorConsent);
    });

    SELECTORS.form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            SELECTORS.form.reset();

            SELECTORS.successMessage.hidden = false;

            setTimeout(() => {
                SELECTORS.successMessage.hidden = true;
            }, 3000);
        }
        else {
            SELECTORS.successMessage.hidden = true;
            console.log('form invalid');
        }
    });

    SELECTORS.firstName.addEventListener('input', () => {
        if (SELECTORS.firstName.value !== '') validateSingleName(SELECTORS.firstName, SELECTORS.errorFirstName)
        else hideError(SELECTORS.firstName, SELECTORS.errorFirstName);
    });

    SELECTORS.lastName.addEventListener('input', () => {
        if (SELECTORS.lastName.value !== '') validateSingleName(SELECTORS.lastName, SELECTORS.errorLastName);
        else hideError(SELECTORS.lastName, SELECTORS.errorLastName);
    });

    SELECTORS.email.addEventListener('input', () => {
        if (SELECTORS.email.value !== '') validateEmail();
        else hideError(SELECTORS.email, SELECTORS.errorEmail);
    });

    SELECTORS.message.addEventListener('input', () => {
        if (SELECTORS.message.value !== '') validateMessage();
        else hideError(SELECTORS.message, SELECTORS.errorMessage);
    });
}


document.addEventListener('DOMContentLoaded', initEventListener);