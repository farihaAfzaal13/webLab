document.addEventListener('DOMContentLoaded', () => {
    let books = [];
  
    function displayBooks() {
      const bookListElement = document.getElementById('bookList');
      bookListElement.innerHTML = '';
  
      books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `<strong>${book.title}</strong> by ${book.author} <button class="remove-btn">Remove</button>`;
        
        const removeButton = bookItem.querySelector('.remove-btn');
        removeButton.addEventListener('click', () => removeBook(book.id));
  
        bookListElement.appendChild(bookItem);
      });
    }
  
    function addBook(title, author) {
      const newBook = { id: Date.now(), title, author };
      books.push(newBook);
      displayBooks();
    }
  
    function removeBook(bookId) {
      books = books.filter(book => book.id !== bookId);
      displayBooks();
    }
  
    function showHomePage() {
      document.getElementById('bookList').style.display = 'block';
      document.getElementById('addBookFormContainer').style.display = 'none';
    }
  
    function showAddBookPage() {
      document.getElementById('bookList').style.display = 'none';
      document.getElementById('addBookFormContainer').style.display = 'block';
    }
  
    // Event listener for adding a book
    document.getElementById('addBookForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const title = event.target.elements.title.value;
      const author = event.target.elements.author.value;
      if (title && author) {
        addBook(title, author);
        event.target.reset();
        showHomePage();
      }
    });
  
    // Event listeners for navigation links
    document.getElementById('homeLink').addEventListener('click', (event) => {
      event.preventDefault();
      showHomePage();
    });
  
    document.getElementById('addLink').addEventListener('click', (event) => {
      event.preventDefault();
      showAddBookPage();
    });
  
    // Initial display of books
    displayBooks();
    showHomePage();
  });
  