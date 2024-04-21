document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('author').value;
    let category = document.getElementById('category').value;
    let isbn = document.getElementById('isbn').value;
    let about = document.getElementById('about').value;
    let summary = document.getElementById('summary').value;
    let publisher = document.getElementById('publisher').value
    let cover = document.getElementById('book-cover').value;
    let pages = document.getElementById('pages').value;
    let rating = document.getElementById('rating').value;
    let edition = document.getElementById('edition').value;

    let book = { title, author, publisher, category, isbn, pages, rating, edition, about, summary, cover };
    localStorage.setItem(isbn, JSON.stringify(book));
    document.getElementById('upload-form').reset();
    alert('Book added successfully!');
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