let allBooks = [];
for (let i = 0; i < localStorage.length; i++)
{
    let isbn = localStorage.key(i);
    let storedBook = localStorage.getItem(isbn);
    let book = JSON.parse(storedBook);
    allBooks.push(book);
}

let bookTable = document.getElementById('book-table');

if(localStorage.length !== 0)
{
    allBooks.forEach(book => {
        let newRow = document.createElement('tr');

        newRow.innerHTML = `
        <td><img src="${book.cover}" alt="${book.title}" class="cover"></td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td class="button-container">
        <button class="table-button edit-button">Edit</button>
        <button class="table-button delete-button">Delete</button>
        </td>
        `;

        bookTable.appendChild(newRow);  
    });
    
    let editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let isbn = localStorage.key(index);
            window.location.href = `edit-book.html?isbn=${isbn}`;
        });
    });

    let deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let isbn = localStorage.key(index);
            localStorage.removeItem(isbn);
            window.location.reload();
        });
    });

}
else 
{
    confirm("There is no available books");
}