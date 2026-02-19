import { SELECTORS, VALIDATION_RULES } from "./constantins.js";

function validateNames() {
    const firstName = SELECTORS.firstName;
    const lastName = SELECTORS.lastName;

    const isFirstValid = validateSingleName(firstName, SELECTORS.errorFirstName);
    const isLastValid = validateSingleName(lastName, SELECTORS.errorLastName);
    
    return isFirstValid && isLastValid;
}

export function validateSingleName(input, error) {
    const value = input.value.trim();
    
    if (value === '') {
        error.textContent = 'This field is required';
        showError(input, error);
        return false;
    }
    
    if (value.length < VALIDATION_RULES.name.minLength) {
        error.textContent = `${input.id === 'first-name' ? 'First' : 'Last'} name must be at least ${VALIDATION_RULES.name.minLength} characters`;
        showError(input, error);
        return false;
    }
    
    hideError(input, error);
    return true;
}

 export function validateEmail() {
    const email = SELECTORS.email;
    const error = SELECTORS.errorEmail;

    const isValid = VALIDATION_RULES.email.pattern.test(email.value) && email.validity.valid;

    if(isValid) {
        hideError(email, error);
        return true;
    }

    if (email.value.trim() === '') error.textContent = 'Email is required';
    else error.textContent = VALIDATION_RULES.email.message;

    showError(email, error);
    return false;
}

function validateQueryType() {
    const group = SELECTORS.radiogroup;
    const error = SELECTORS.errorRadios;
    const radios = SELECTORS.radios;

    let isChecked = false;

    radios.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
            radio.setAttribute('aria-checked', isChecked);
        }
        else radio.setAttribute('aria-checked', isChecked);
    });

    if (!isChecked) {
        showError(group, error);
        return false;
    }

    hideError(group, error);
    return true;
}

 export function validateMessage() {
    const message = SELECTORS.message;
    const error = SELECTORS.errorMessage;

    const value = message.value.trim();

    if (value === '') {
        error.textContent = 'This field is required';
        showError(message, error);
        return false;
    }
    else if (value.length < VALIDATION_RULES.text.minLength) {
        error.textContent = VALIDATION_RULES.text.message;
        showError(message, error);
        return false;
    }
    else {
        hideError(message, error);
        return true;
    }
}

function validateConsent() {
    const consent = SELECTORS.consent;
    const error = SELECTORS.errorConsent;

    let isChecked = false;
    if (consent.checked) {
        isChecked = true;
        consent.setAttribute('aria-checked', isChecked);
    }
    else consent.setAttribute('aria-checked', isChecked);

    if (!isChecked) {
        showError(consent, error);
        return false;
    }

    hideError(consent, error);
    return true;
}


function showError(invalid, errors) {
    errors.hidden = false;
    invalid.setAttribute('aria-invalid', 'true');
}

 export function hideError(valid, errors) {
    errors.hidden = true;
    valid.setAttribute('aria-invalid', 'false');
}


export function validateForm() {
    const isNamesValid = validateNames();
    const isEmailValid = validateEmail();
    const isQueryValid = validateQueryType();
    const isMessageValid = validateMessage();
    const isConsentValid = validateConsent();

    return isNamesValid && isEmailValid && isQueryValid && isMessageValid && isConsentValid;
}