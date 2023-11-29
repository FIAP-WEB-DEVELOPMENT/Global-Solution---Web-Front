function validateForm() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var nameValue = name.value;
  var emailValue = email.value;
  var isValid = true;

  // Função para remover a borda vermelha e mensagem de erro
  function removeError(element) {
    element.classList.remove('error');
    var errorElement = element.nextElementSibling;
    if (errorElement && errorElement.className === 'error-message') {
      errorElement.parentNode.removeChild(errorElement);
    }
  }

  // Função para adicionar a borda vermelha e mensagem de erro
  function addError(element, errorMessage) {
    element.classList.add('error');
    var errorElement = element.nextElementSibling;
    if (!errorElement || errorElement.className !== 'error-message') {
      errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      element.parentNode.insertBefore(errorElement, element.nextSibling);
    }
    errorElement.textContent = errorMessage;
  }

  // Validação do campo Nome
  if (nameValue === "") {
    addError(name, "Por favor, preencha o campo Nome.");
    isValid = false;
  } else {
    removeError(name);
  }

  // Validação do campo Email
  if (emailValue === "") {
    addError(email, "Por favor, preencha o campo Endereço de email.");
    isValid = false;
  } else {
    removeError(email);
  }

  // Adicione aqui lógica adicional de validação se necessário.

  // Se todos os campos forem válidos, exibir mensagem de agradecimento
  if (isValid) {
    showThankYouAlert();
  }

  return isValid;
}

// Função para exibir mensagem de agradecimento com um alerta
function showThankYouAlert() {
  window.alert("Obrigado pelo seu contato!");
}