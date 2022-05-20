// Sets default focus property on the name input field.

const nameInput = document.getElementById('name').focus();

// JOB ROLE SECTION

const jobRole = document.getElementById('title');
const otherJob = document.getElementById('other-job-role');
otherJob.style.display = 'none';

jobRole.addEventListener('change', (event) => {
    if (event.target.value === 'other') {
      otherJob.style.display = 'block';
    } else {
      otherJob.style.display = 'none';
    }
});

// T-SHIRT INFO SECTION 

const designSelect = document.getElementById('design');
const colorOption = document.getElementById('color').children;
const colorSelect = document.getElementById('color').disabled = true;

designSelect.addEventListener('change', (e) => {
  const colorSelect = document.getElementById('color').disabled = false;

  for (let i = 0; i < colorOption.length; i++) {
    const eventTarget = e.target.value;
    const getDataTheme = colorOption[i].dataset.theme;

    if (eventTarget === getDataTheme) {
      colorOption[i].hidden = false;
      eventTarget.hidden = false;
      
    } else {
      colorOption[i].hidden = true;
      eventTarget.hidden = true;
    }
  
  }
});

//REGISTER FOR ACTIVITIES SECTION

const activities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let activitiesTotal = 0;

activities.addEventListener('change', (event) => {

  const dataCost = parseInt(event.target.dataset.cost); 

  if (event.target.checked) {
    activitiesTotal += dataCost;
  } else {
    activitiesTotal -= dataCost;
  }
  activitiesCost.innerHTML = `Total: $${activitiesTotal}`;
});

/*
PAYMENT INFO SECTION

The credit card payment option should be selected for the user by default. So when the form first loads, "Credit Card" should be displayed in the "I'm going to pay with" <select> element, and the credit card payment section should be the only payment section displayed in the form’s UI. And when the user selects one of the payment options from the "I'm going to pay with" drop down menu, the form should update to display only the chosen payment method section.

* Program the "I'm going to pay with" <select> element to listen for user changes. When a change is detected, hide all payment sections in the form’s UI except the selected one.
*/

const paymentMethod = document.getElementById('payment');
const paymentOptions = document.querySelectorAll('#payment option');
const credit = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paypal.style.display = 'none';
bitcoin.style.display = 'none';

console.log(paymentOptions);

paymentMethod.childNodes[3].selected = true;

// paymentMethod.addEventListener('change', (event) => {

//   if (event.target.value === 'paypal') {
//     credit.style.display = 'none';
//     paypal.style.display = 'block';
//     bitcoin.style.display = 'none';
//   } else if (event.target.value === 'bitcoin') {
//     credit.style.display = 'none';
//     paypal.style.display = 'none';
//     bitcoin.style.display = 'block';
//   } else {
//     credit.style.display = 'block';
//     bitcoin.style.display = 'none';
//     paypal.style.display = 'none';
//   }
// });

paymentMethod.addEventListener('change', (e) => {
  for(let i = 0; i < paymentOptions.length; i++) {
    if(paymentOptions === e.target.value) {
      `${paymentOptions[i]}`.style.display = 'block';
    } else {
      `${paymentOptions[i]}`.style.display = 'none';
    }
  }
});
/*
FORM VALIDATION
Users shouldn’t be able to submit a form without the required information, or with invalid information. To prevent that from happening, avoid using plugins, libraries, snippets or the built-in HTML5 validation, and create your own custom form validation.

* Program the form element to listen for the submit event. When the form submission is detected, each required form field or section should be validated, or checked to ensure that they have been filled out correctly. If any of the following required fields is not valid, the form’s submission should be prevented.
	- The "Name" field cannot be blank or empty.
  - The "Email Address" field must contain a validly formatted email address. The email address does not need to be a real email address, just formatted like one. For example: dave@teamtreehouse.com. A few characters for the username, followed by "@", followed by a few more characters and a ".com" for the domain name. You don’t have to account for other top-level domains, like .org, .net, etc.
  - The "Register for Activities" section must have at least one activity selected.
  - If and only if credit card is the selected payment method:
    - The "Card number" field must contain a 13 - 16 digit credit card number with no dashes or spaces. The value does not need to be a real credit card number.
    - The "Zip code" field must contain a 5 digit number.
    - The "CVV" field must contain a 3 digit number.
Note:
- Avoid using snippets, libraries or plugins.
- Only validate the three credit card fields if "credit card" is the selected payment option.
- Only call `preventDefault` on the `event` object if one or more of the required fields is invalid.
Pro Tip:A recommended approach is to create helper functions for each of the required fields to be validated. For example, for the "Name" field, a function could check the "Name" field’s value. If it equals an empty string or only blank spaces, the function could log out a helpful statement and return false. Otherwise it would return true. And then in the `submit` event listener, you could call that helper function and check what it returns: if it returns false, you would prevent the form from submitting. Otherwise, you would avoid preventing form submission, and allow the `submit` handler to either submit or move onto checking the next required field.
*/

/*
A11Y 

* Make the focus states of the activities more obvious to all users. Pressing the tab key on your keyboard moves the focus state from one input to the next, but the focus indicators in the "Register for Activities" section aren’t very obvious.

  * Program all of the activity checkbox input elements to listen for the focus and blur events.
    - When the focus event is detected, add the ".focus" className to the checkbox input’s parent label element.
    - When the blur event is detected, remove the .focus className from the label element that possesses it. It can be helpful here to directly target the element with the className of .focus in order to remove it.
  * Make the form validation errors obvious to all users. With the custom form validation checks you’ve  already written, invalid form fields will prevent the form from submitting, but all users should be presented with clear notifications of which fields are invalid.
    - When the user tries to submit the form, if a required form field or section is invalid:
        - Add the ‘.not-valid’ className to the parent element of the form field or section. For the activity section, the parent element would be the fieldset element for the activity section. For the other required inputs, the parent element would be a label element for the input.
        - Remove the ‘valid’ className from the parent element of the form field or section.
        - Display the ..hint element associated with the form field or section, which will be the last child of the parent element of the form field or section. The parentElement and lastElementChild properties will be helpful here.
    - If a required form field or section is valid:
      - Add the ‘.valid’ className to the parent element of the form field or section.
      - Remove the ‘.not-valid’ className from the parent element of the form field or section.
      - Hide the .hint element associated with that element.
Note:
- Error messages should not be visible by default or when the form first loads.
- JavaScript alerts and prompts should not be used in your form validation error indications.
- If your user tries to submit an empty form, all form validation error indications should be displayed at once, rather than one at a time.

Pro Tip: A recommended approach to this part of the project is to create helper functions that accept an argument for the element that is being validated. For example, the function could accept an argument for the text input element that was checked. Then the function would update the styles for that element’s parent element and the last child of that parent element. One function could update the styles when errors are detected. And another function could update the styles when errors are resolved.

*/

/*
EXCEEDS

1 Prevent users from registering for conflicting activities
  - When a user selects an activity, loop over all of the activities, check if any have the same day and time as the activity that was just checked/unchecked, and as long as the matching activity is not the activity that was just checked/unchecked, disable/enable the conflicting activity’s checkbox input and add/remove the ‘.disabled’ className to activity’s parent label element.

2 Real Time Error Message

Providing form validation error indications at the moment they occur better serves your user.
  - Program at least one of the required fields to listen for user interaction like a keyup. When then user interaction occurs, run the validation check for that input. If you created helper functions to validate the required form inputs and sections, you can call those helper functions inside of a field’s event listener.
  - Detail this specific feature in your README.md file.

3 Conditional Error Message

Providing additional information for certain types of errors can be very helpful to your user. For example, if the email address field is empty, it would be enough to inform the user that they should add an email address. But if they’ve already added an email address, but formatted it incorrectly, that message wouldn’t be helpful.

  - For at least one required form section, provide one error message if the field fails on one of its requirements, and a separate message if it fails on one of its other requirements.
  - Detail this specific feature in your README.md file.

*/