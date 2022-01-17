const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pageNumInput = document.querySelector('#page-num');
const container = document.querySelector('.container');

let myLibrary = []

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}


function deleteBookToLibrary(id) {
    const deleteButton = document.querySelectorAll('.delete')
    deleteButton.forEach(button => {
        button.addEventListener( 'click', function(e){
            for (const key in myLibrary) {
                if (myLibrary[key].id == id) {
                }
            }
        })
    });
}

function addBookToLibrary() {
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', () => {
        let newBook = new Book(titleInput.value, authorInput.value, pageNumInput.value, false);
        myLibrary.push(newBook);
addBookToDom()

    })
}

function addBookToDom() {
    console.log(myLibrary.length);
    myLibrary.forEach( book => {
        //card div
        const card = document.createElement('div')
        card.classList.add('cards')

        //delete button
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        card.appendChild(deleteButton);

        // icon
        const icon = document.createElement('i')
        icon.classList.add('fa', 'fa-trash')
        deleteButton.appendChild(icon)

        // h1 title
        const h1Title = document.createElement('h1')
        h1Title.classList.add('title')
        h1Title.innerHTML = book.title.length > 0 ? book.title : 'No title'
        card.appendChild(h1Title)

        //h4 by word
        const h4By = document.createElement('h4')
        h4By.innerHTML = book.author.length > 0 ? 'By' : 'No author'
        card.appendChild(h4By)

        // h3 author name
        const h3Author = document.createElement('h3')
        h3Author.classList.add('author')
        h3Author.innerHTML = book.author
        card.appendChild(h3Author)

        // Span pages Number
        const spanPage = document.createElement('span')
        spanPage.classList.add('page-num')
        spanPage.innerHTML = `${book.pageNumInput} pages`
        card.appendChild(spanPage)

        container.appendChild(card)
    });
}


addBookToLibrary()














// let counter = 1;


// counter++

