const inputs = document.querySelectorAll("input"),
  spinner = document.querySelectorAll(".spinner"),
  button = document.querySelector("button");

function handleTextAreaInput() {
  const myTextArea = document.querySelector("textarea");

  myTextArea.addEventListener('input', (e) => {
    const words = e.target.value.trim().split(/\s+/);
    const wordCount = words.filter(word => word !== '').length;

    e.target.classList.toggle("has-value", e.target.value);

    if (wordCount >= 2 && wordCount <= 200) {
      e.target.classList.add("valid");
    } else {
      e.target.classList.remove("valid");
    }

    checkAllInputsValidity();
  });

  checkAllInputsValidity(); // Add this line
}

handleTextAreaInput();

[...inputs].map((elem, index) => {
  elem.addEventListener('input', (e) => {
    spinner[index].classList.add("visible")
    let trimmedValue = e.target.value;
    if (e.target.type !== 'text') {
      trimmedValue = e.target.value.trim();
      e.target.value = trimmedValue;
    }
    e.target.classList.toggle("has-value", trimmedValue)
    setTimeout(() => {spinner[index].classList.remove("visible")}, 500)
    switch(e.target.type) {
      case 'text':
        const reText = /^[a-zA-Z\s]+$/ // allow spaces in text input
        if(e.target.value.length >= 2 && e.target.value.length <= 16 && e.target.value.match(reText)) {
          e.target.classList.add("valid")
        }
        else {
          e.target.classList.remove("valid")
        }
        break
      case 'email':
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
        if (trimmedValue.match(re)) {
          e.target.classList.add('valid')
        }
        else {
          e.target.classList.remove('valid')
        }
        break
      case 'tel':
        if (!isNaN(trimmedValue) && trimmedValue.length === 10) {
          e.target.classList.add('valid')
        }
        else {
          e.target.classList.remove('valid')
        }
        break
      default:
        break
    }

    checkAllInputsValidity(); 
  })
})

function checkAllInputsValidity() {
  let allValid = true;
  [...inputs].forEach(input => {
    if (!input.classList.contains('valid')) {
      allValid = false;
    }
  });
  const textarea = document.querySelector("textarea");
  if (!textarea.classList.contains('valid')) {
    allValid = false;
  }
  const button = document.querySelector('button.send'); // get the button element
  if (allValid) {
    button.classList.remove('disabled');
    button.disabled = false
  } else {
    button.classList.add('disabled');
    button.disabled = true
  }
}
const buttonS = document.querySelector('button.send');
buttonS.addEventListener('click', (e) => {
  e.preventDefault();
  alert("working");
})