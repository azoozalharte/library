// Book Class: Represents a book
class Book {
    constructor(title, author, pages, isbn) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isbn = isbn
    }
}


// UI Class: Handle UI tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const title = document.querySelector("#title").value
        const author = document.querySelector("#author").value
        const pages = document.querySelector("#pages").value
        const isbn = document.querySelector("#isbn").valu

        const list = document.querySelector('#book-list')

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
        `
        list.appendChild(row)
    }

    static deleteBook(target) {
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();   
        }
    }

    static clearFields() {
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#pages").value = ''
        document.querySelector("#isbn").value = ''
    }
    
}
//Store Class : Handles storage 

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') == null) {
            books = []            
        }else {
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books
    }
    static addBook(book) {
        const books = Store.getBooks()

        books.push(book)

        localStorage.setItem('books', JSON.stringify(books))

    }
    static removeBook(isbn) {
        const books = Store.getBooks()

        books.forEach((book, index) => {
            if (book.isbn == isbn) {
                books.splice(index, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books))
        
    }
    
}

// Event display book
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event Add Book
document.querySelector('#book-form').addEventListener('submit', e => {
    //prevent actual submit
    e.preventDefault()

    //get form values
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const isbn = document.querySelector("#isbn").value


    if (title === '' || author === '' || pages === '' || isbn === '') {
        alert('Please fill all fields')
    } else {
        
        //Instatiate book
        const book = new Book(title, author, pages, isbn)
    
        // Add book to UI
        UI.addBookToList(book);
    
        // Add book to store
        Store.addBook(book)
    
        //clear fields
        UI.clearFields();
    }

})

//Event Remove Book

document.querySelector('#book-list').addEventListener('click', e => {
    UI.deleteBook(e.target)

    //remove from Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
})