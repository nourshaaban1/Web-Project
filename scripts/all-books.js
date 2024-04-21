let allBooks = [];
for (let i = 0; i < localStorage.length; i++)
{
    let isbn = localStorage.key(i);
    let storedBook = localStorage.getItem(isbn);
    let book = JSON.parse(storedBook);
    allBooks.push(book);
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