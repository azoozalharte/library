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
        const StoredBooks = [
            {
                title: 'The end',
                author: 'Azooz Alharte',
                pages: 234,
                isbn: '81273'
            },
            {
                title: 'The end 2',
                author: 'Jeb Alharte',
                pages: 134,
                isbn: '812sd73'
            }
        ]

        const books = StoredBooks;
        books.forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
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

    static clearFields() {
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#pages").value = ''
        document.querySelector("#isbn").value = ''
    }
    
}
//Store Class : Handles storage 

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

    //Instatiate book
    const book = new Book(title, author, pages, isbn)

    // Add book to UI
    UI.addBookToList(book);

    //clear fields
    UI.clearFields();
})

//Event Remove Book