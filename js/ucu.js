// 2. Validate each input on the fly using onchange event

const formats = {'email': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'phone': /^[+0]\d{3}[(]?\d{2}[)]?[\s\-]\d{3}([\s\-]\d{2}){2}$/,
  'name': /^[A-Za-z]*(\s{2}[A-Za-z]*)?$/,
  'message': /^((?!ugly|stupid|pig|dumm|ignorant).)*$/
};

const lengths = {'email': [5, 50],
  'phone': [12, Infinity],
  'message': [10, Infinity],
  'name': [1, Infinity]
};

const functionsValidation = {
  'phone': phoneValidation,
  'email': emailValidation,
  'message': messageValidation,
  'name': nameValidation
};


function phoneValidation(numberErrors, value, format, length) {
  if (value.split('').filter(el => !isNaN(el)  && !(el === ' ')).length < length[0]) {
    numberErrors.appendChild(createError('Number is too short'));
  }

  if (!value.match(format)) {
    numberErrors.appendChild(createError('Phone number is invalid'));
  }

  return numberErrors;
}

function emailValidation(emailErrors, value, format, length) {

  if (value.length < length[0] || value.length > length[1]) {
    emailErrors.appendChild(createError('email isn`t of the valid size'))
  }

  if (!value.match(format)) {
    emailErrors.appendChild(createError('Email format is incorrect'))
  }

  return emailErrors;
}

function nameValidation(nameErrors, value, format, length) {
  if (value.length < length[0] || value.length > length[1]) {
    nameErrors.appendChild(createError('Name length is incorrect'));
  }

  if (!value.match(format)) {
    nameErrors.appendChild(createError('Name and surname should be separated by two spaces'));
  }

  return nameErrors;
}

function messageValidation(messageErrors, value, format, length) {

  if (value.length < length[0] || value.length > length[1]) {
    messageErrors.appendChild(createError('The message length is too short'));
  }

  if (!value.match(format)) {
    messageErrors.appendChild(createError('The message must not contain bad language'));
  }

  return messageErrors;
}

function createError(message) {
  let li = document.createElement('li');
  li.innerText = message;
  return li;
}


function makeErrors(node, element, format, length) {

  const ErrorNode = node.parentNode.querySelector('p.help-block');
  ErrorNode.innerHTML = '';

  let Errors = document.createElement('ul');
  Errors.setAttribute("role", "alert");

  Errors = functionsValidation[element](Errors, node.value, format, length);

  if (Errors.childElementCount > 0) {
    ErrorNode.appendChild(Errors)
  }

}


function validateMe(event) {
  event.preventDefault();

  const eventEntries = Object.entries(functionsValidation);
  for (let i = 0; i < eventEntries.length; i++) {
    let element = eventEntries[i][0];
    makeErrors(event.target.elements[element], element, formats[element], lengths[element]);
  }

  return false;
}


let fields = Object.entries(functionsValidation);

for (let i = 0; i < fields.length; i++) {
  let fil = document.getElementById(fields[i][0]);
  fil.addEventListener("input",event =>  makeErrors(event.target, event.target.id, formats[event.target.id], lengths[event.target.id]))
}




