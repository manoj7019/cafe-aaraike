function submitForm() {
    document.getElementById('submitForm').submit();
}

let discHeadline = document.querySelector('#discHeadline');

function setName() {
    let name = document.getElementById('name').value || {};
    localStorage.setItem('names', name);
}

function getName() {
    let name = localStorage.getItem('names');
    discHeadline.textContent = `Hey ${name}! Here's your discount code.`
}

const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let discCode = document.querySelector('#discCode');

function getCode() {
    let codeNum1 = Math.floor(Math.random() * 999);
    let codeNum2 = Math.floor(Math.random() * 999);
    let codeLetter1 = array[Math.floor(Math.random() * array.length)];
    let codeLetter2 = array[Math.floor(Math.random() * array.length)];
    let codeLetter3 = array[Math.floor(Math.random() * array.length)];
    let codeLetter4 = array[Math.floor(Math.random() * array.length)];
    let codeLetter5 = array[Math.floor(Math.random() * array.length)];
    let codeLetter6 = array[Math.floor(Math.random() * array.length)];
    let fullCode = `${codeLetter1}${codeLetter2}${codeNum1}${codeLetter3}${codeNum2}${codeLetter4}${codeLetter5}${codeLetter6}`;
    console.log(fullCode);
    discCode.textContent = `${fullCode}`;
}

function checkInput() {
    let inputs = document.getElementsByClassName('inputs');
    let btn = document.querySelector('#btn');
    let isValid = true;

    for (let i=0; i<inputs.length; i++) {
        let changedInputs = inputs[i];
        if(changedInputs.value.trim() === '' || changedInputs.value === null) {
            isValid = false;
            break;
        }
    }
    btn.disabled = (!isValid);
}