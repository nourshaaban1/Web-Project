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