let buttons = document.querySelectorAll("button");

buttons[0].onclick = ()=> {
    buttons[0].style.cssText = `
    width: 0px;
    height: 0px; 
    border: none;
    background: none;
    marign: 0;
    padding: 0; `;
    setTimeout(() => {buttons[0].innerHTML = "";},50)
    document.querySelector("p").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optioLorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio";

}
let storgedRole = localStorage.getItem('role');
let role = JSON.parse(storgedRole);

if(role == 'admin')
{
    document.getElementById('main-links').innerHTML = `
        <li><a href="home.html">home</a></li>
        <li><a href="About.html">about</a></li>
        <li><a href="all-books.html">books</a></li>
        <li><a href="category.html">categories</a></li>
        <li><a href="book-table.html">Manage</a></li>
    `;
}