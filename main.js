const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pageNumInput = document.querySelector('#page-num');
const addButton = document.querySelector('#add');
const container = document.querySelector('.container');

let myLibrary = []

function Book(title, author, pages, readed ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

function addBookToLibrary() {
    addButton.addEventListener('click', () => {
        let newBook = new Book(titleInput.value, authorInput.value, pageNumInput.value, false);
        myLibrary.push(newBook);

        //card div
        const card = document.createElement('div')
        card.classList.add('cards')
        
        // h1 title
        const h1Title = document.createElement('h1')
        h1Title.classList.add('title')
        h1Title.innerHTML = titleInput.value.length > 0 ? titleInput.value : 'No title'
        card.appendChild(h1Title)

        //h4 by word
        const h4By = document.createElement('h4')
        h4By.innerHTML = authorInput.value.length > 0 ? 'By' : 'No author'
        card.appendChild(h4By)

        // h3 author name
        const h3Author = document.createElement('h3')
        h3Author.classList.add('author')
        h3Author.innerHTML = authorInput.value
        card.appendChild(h3Author)

        // Span pages Number
        const spanPage = document.createElement('span')
        spanPage.classList.add('page-num')
        spanPage.innerHTML = `${pageNumInput.value} pages`
        card.appendChild(spanPage)

        container.appendChild(card)
        
    })       
}

addBookToLibrary()