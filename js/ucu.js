// 1. Submit the form, only if it is valid
//    email is between 5 and 50 chars long
//    phone length is 12 or more digits
//    message is 10 or more characters.
// 2. Validate each input on the fly using onchange event
// 3. Define re-usable validators: length, format,

function phoneValidation(numberErrors, numberNode) {
  if (numberNode.value < 12) {
    numberErrors.appendChild(createError('Number is too short'));
  }

  if (!numberNode.value.match(/^[+0]\d{3}[(]?\d{2}[)]?[\s\-]\d{3}([\s\-]\d{2}){2}$/)) {
    numberErrors.appendChild(createError('Phone number is invalid'));
  }

  return numberErrors;
}

FuckYou = 3;

var functionsValidation = {
  'phone': phoneValidation,
  'email': emailValidation,
  'message': messageValidation,
  'name': nameValidation
};

function makeErrors(event, element) {

  const Node = event.target.elements[element];
  const ErrorNode = Node.parentNode.querySelector('p.help-block');
  ErrorNode.innerHTML = '';

  let Errors = document.createElement('ul');
  Errors.setAttribute("role", "alert");

  Errors = functionsValidation[element](Errors, Node);

  if (Errors.childElementCount > 0) {
    ErrorNode.appendChild(Errors)
  }

}


function createError(message) {
  let li = document.createElement('li');
  li.innerText = message;
  return li;
}


function validateMe(event) {
  event.preventDefault();

  let eventEntries = event.target.elements.entries();

  for (let i = 0; i <= event.target.elements.length; i++) {
    makeErrors(event, eventEntries[i]);
  }

  return false;
}
