let urlParams = new URLSearchParams(window.location.search);
let isbn = urlParams.get('isbn');

let storedBook = localStorage.getItem(isbn);
let book = JSON.parse(storedBook);

document.title = book.title;   
bookContainer = document.getElementById('book-container');
bookContainer.innerHTML = `
<div class="book-cover">
            <div class="book-img">
                <img src="${book.cover}" alt="${book.title}">
                <p class="book-avaliable">- Avaliable -</p>
                <p class="book-edition">- ${book.edition} Edition -</p>
                <!--User buttons-->
                <div class="book-borrow"><button class="book-borrow-button">Borrow</button></div>
                <div class="book-wishlist"><button class="book-wishlist-button">Add to Wishlist</button></div>
                <!--
                Admin buttons
                <button class="book-edit">Edit book</button>
                -->
            </div>
            <div class="book-detail">
                <p class="book-title">${book.title}</p>
                <p class="book-author"><span>Author :</span>${book.author}</p>
                
                <div class="book-about">
                    <span>About : </span>
                    <section>
                        <p>${book.about}</p>  
                    </section>
                </div>

                <div class="book-summary">
                    <span>Summary : </span>
                    <section>
                        <p>${book.summary}</p>
                    </section>
                </div>                     
 
                <div class="book-category">
                    <span class="category-label">Categories : </span> <span> ${book.category} </span>
                </div>

                <div class="book-publisher">
                    <span class="publisher-label">Publisher : </span>
                    <span>${book.publisher}</span>
                </div>

                <div class="pages">
                    <span>${book.pages} Pages</span>
                </div>

                <div class="star-rating">
                    <p class="rating">${book.rating}<span class="rating-degree">/5<span></p>
                    <span class="star">&#9733</span>
                    <span class="star">&#9733</span>
                    <span class="star">&#9733</span>
                    <span class="star">&#9733</span>
                    <span class="star">&#9734</span>
                    <p class="num-rating">Rating</p>
                </div>

                <div class="book-ISBN">
                    ISBN ${book.isbn}
                </div>
            </div>
`;

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