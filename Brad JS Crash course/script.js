let myform = document.querySelector("#my-form");
let msg = document.querySelector(".msg");
let name = document.querySelector("#name");
let age = document.querySelector("#age");
let btn = document.querySelector(".btn");
let output = document.querySelector("#output");

myform.addEventListener('submit', submitAction);

function submitAction(e)
{
    e.preventDefault();

    if(name.value===''|| age.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'please enter field';
        setTimeout( () => msg.remove(), 3000);
    }
    else
    {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${name.value} : ${age.value}`));
       output.appendChild(li);  
    }
    console.log(output.value);
}