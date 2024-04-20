let buttons = document.querySelectorAll("button");

buttons[0].onclick = ()=> {
    buttons[0].style.cssText = `
    width: 0px;
    height: 0px; 
    border: none;
    background: none;
    marign: 0;
    padding: 0;
    `;
    setTimeout(() => {buttons[0].innerHTML = "";},50)
    document.querySelector("p").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio";
    
}