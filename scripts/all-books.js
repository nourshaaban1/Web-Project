let allBooks = [];
for (let i = 0; i < localStorage.length; i++)
{
    if(localStorage.key(i) !== 'role'){
        let isbn = localStorage.key(i);
        let storedBook = localStorage.getItem(isbn);
        let book = JSON.parse(storedBook);
        allBooks.push(book);
    }
}

let bookViewer = document.getElementById('book-viewer');
allBooks.forEach(book => {
    let newBook = document.createElement('li');

    newBook.innerHTML = `
    <a href = "book-page.html?isbn=${book.isbn}">
    <img class="book" src="${book.cover}" alt="${book.title}">
    </a><p>${book.title}</p><label>Avaliable</label>
    `;

    bookViewer.appendChild(newBook);  
});

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