urlParams = new URLSearchParams(window.location.search);
isbn = urlParams.get('isbn');

storedBook = localStorage.getItem(isbn);
book = JSON.parse(storedBook);

document.title = "Edit Book";
document.getElementById('book-title').value = book.title;
document.getElementById('author').value = book.author;
document.getElementById('category').value = book.category;
document.getElementById('isbn').value = book.isbn;
document.getElementById('about').value = book.about;
document.getElementById('summary').value = book.summary;
document.getElementById('publisher').value = book.publisher;
document.getElementById('book-cover').value = book.cover;
document.getElementById('pages').value = book.pages;
document.getElementById('rating').value = book.rating;
document.getElementById('edition').value = book.edition;

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    book.title = document.getElementById('book-title').value;
    book.author =  document.getElementById('author').value;
    book.category =  document.getElementById('category').value;
    book.isbn =  document.getElementById('isbn').value;
    book.about  = document.getElementById('about').value;
    book.summary  = document.getElementById('summary').value;
    book.publisher  = document.getElementById('publisher').value;
    book.cover  = document.getElementById('book-cover').value;
    book.pages  = document.getElementById('pages').value;
    book.rating  = document.getElementById('rating').value;
    book.edition  = document.getElementById('edition').value;

    localStorage.setItem(book.isbn, JSON.stringify(book));
    window.location.href = "book-table.html";
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