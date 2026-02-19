 export const SELECTORS = {
    form: document.querySelector('form'),
    names: document.querySelector('#first-name, #last-name'),
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    errorFirstName: document.querySelector('#first-name-error'),
    errorLastName: document.querySelector('#last-name-error'),
    email: document.querySelector('#email'),
    errorEmail: document.querySelector('#email-error'),
    radiogroup: document.querySelector('.radiogroup'),
    radios: document.querySelectorAll('input[name="query-type"]'),
    radioBlock: document.querySelectorAll('.radio-input'),
    errorRadios: document.querySelector('#query-type-error'),
    message: document.querySelector('#text-message'),
    errorMessage: document.querySelector('#text-error'),
    consent: document.querySelector('#consent'),
    errorConsent: document.querySelector('#consent-error'),
    successMessage: document.querySelector('.success-message')
};

export const VALIDATION_RULES = {
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    name: {
        minLength: 2,
        messageFirst: 'First name must be at least 2 characters',
        messageLast: 'Last name must be at least 2 characters'
    },
    text: {
        minLength: 10,
        message: 'Message must be at least 10 characters'
    }
};