# 📬 Contact Form with Validation

![Preview](design/desktop-preview.jpg)

A responsive, accessible contact form with custom elements and validation in pure JS.  
This project was built to practice **HTML/CSS/JS**, **accessibility (WCAG)**, **modular architecture**, and **UX approaches**.

[🔗 Live Demo](https://thought-del.github.io/Contact-form/) | [📄 Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj)

---

## ✨ Features

- ✅ **Fully accessible** — ARIA attributes, keyboard navigation, screen reader support
- ✅ **Field validation** — first name, last name, email, radio buttons, textarea, consent checkbox
- ✅ **Custom radio buttons and checkboxes** — styled with smooth animations
- ✅ **Live validation** — errors disappear as the user types
- ✅ **Responsive design** — mobile-first approach with desktop layout
- ✅ **Dark theme** — automatically adapts to `prefers-color-scheme`
- ✅ **Success message** — auto-hides after 3 seconds
- ✅ **Modular JavaScript** — constants, validation, and main modules
- ✅ **SEO-friendly** — semantic HTML and meta tags included

---

## 🛠 Technologies

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup, ARIA, forms |
| **CSS3** | Variables, flexbox/grid, responsiveness, animations |
| **JavaScript (ES6)** | Modules, validation, event handling |
| **Google Fonts** | Karla (400, 700) |

---

## 🧩 Project Structure

```
contact-form/
├── index.html              # Main page
├── css/
│   ├── main.css            # Main stylesheet
│   ├── variables.css       # Colors, fonts, spacing
│   ├── typography.css      # Typography styles
│   ├── reset.css           # CSS reset
│   ├── layout.css          # Grid, containers
│   ├── components/         # UI components
│   │   ├── forms.css
│   │   ├── buttons.css
│   │   ├── checkbox-radio.css
│   │   └── error-messages.css
│   ├── responsive/
│   │   ├── desktop.css
│   │   └── reduced.css
│   └── themes/
│       └── dark.css
├── js/
│   ├── main.js             # Initialization
│   ├── constants.js        # Selectors, validation rules
│   └── validation.js       # Validation logic
├── assets/
├── ├── fonts/              # Font files
│   └── images/             # Icons, images
└── README.md
```

---

## 📋 Form Fields

| Field | Type | Validation |
|-------|------|------------|
| First Name | text | required, min length 2 |
| Last Name | text | required, min length 2 |
| Email | email | required, valid email format |
| Query Type | radio | required |
| Message | textarea | required, min length 10 |
| Consent | checkbox | required |

---

## 🎨 Color Scheme

### Light Theme
- Primary: `hsl(169, 82%, 27%)`
- Background: `hsl(148, 38%, 91%)`
- Text: `hsl(187, 24%, 22%)`
- Error: `hsl(0, 66%, 54%)`

### Dark Theme
- Primary: `hsl(169, 70%, 45%)`
- Background: `hsl(187, 30%, 8%)`
- Text: `hsl(0, 0%, 95%)`
- Error: `hsl(0, 70%, 60%)`

---

## 🧠 JavaScript Architecture

### `constants.js`
```js
export const SELECTORS = { /* all selectors */ };
export const VALIDATION_RULES = { /* validation rules */ };
```

### `validation.js`
```js
validateNames()
validateEmail()
validateQueryType()
validateMessage()
validateConsent()
validateForm() // overall form validation
showError() / hideError()
```

### `main.js`
```js
initEventListener() // event listeners: submit, input, change
```

---

## 📱 Responsive Design

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 64em | Stacked layout |
| Desktop | ≥ 64em | First and last name in one row, radio buttons inline |

---

## 🧪 Testing

- [x] Chrome, Firefox, Safari
- [x] Keyboard navigation (Tab, Space, Enter)
- [x] Screen readers (NVDA, VoiceOver)
- [x] Mobile devices (Android, iOS)
- [x] Dark theme support
- [x] Font scaling up to 200%

---

## 🚀 How to Run

```bash
git clone https://github.com/yourname/contact-form.git
cd contact-form
# Open index.html in your browser
# Or use Live Server
```

## 💬 Contact

- GitHub: [@Thought-del](https://github.com/Thought-del)
- Frontend Mentor: [@Thought-del](https://www.frontendmentor.io/profile/Thought-del)

---

**⭐ If you find this project helpful — please give it a star!**