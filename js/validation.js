function emailValidation(emailErrors, emailNode) {
    if (emailNode.value.length < 5) {
        emailErrors.appendChild(createError('email is too short'))
    }

    else if (emailNode.value.length > 50) {
        emailErrors.appendChild(createError('email is too long'))
    }

    if (!emailNode.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailErrors.appendChild(createError('Email format is incorrect'))
    }

    return emailErrors;
}

// function phoneValidation(numberErrors, numberNode) {
//     if (numberNode.value < 12) {
//         numberErrors.appendChild(createError('Number is too short'));
//     }
//
//     if (!numberNode.value.match(/^[+0]\d{3}[(]?\d{2}[)]?[\s\-]\d{3}([\s\-]\d{2}){2}$/)) {
//         numberErrors.appendChild(createError('Phone number is invalid'));
//     }
//
//     return numberErrors;
// }

function nameValidation(nameErrors, nameNode) {
    if (nameNode.value.length < 1) {
        nameErrors.appendChild(createError('Name is required'));
    }

    if (!nameNode.value.match(/^[A-Za-z]*(\s{2}[A-Za-z]*)?$/)) {
        nameErrors.appendChild(createError('Name should be either two words or one'));
    }

    return nameErrors;
}

function messageValidation(messageErrors, messageNode) {
    if (messageNode.value.length < 10) {
        messageErrors.appendChild(createError('The message is too short'));
    }

    if (!messageNode.value.match(/^(?!ugly|stupid|pig|dumm|ignorant).*$/)) {
        messageErrors.appendChild(createError('The message must not contain bad language'));
    }

    return messageErrors;
}

const fuckYou = 90;