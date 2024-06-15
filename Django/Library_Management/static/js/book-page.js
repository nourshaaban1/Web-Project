
document.addEventListener('DOMContentLoaded', function() {
    var bookStatus = document.querySelector('.book-avaliable').textContent.trim();
    if (bookStatus === '- Unavailable -') {
        alert('This book is currently unavailable.');
    }
});
