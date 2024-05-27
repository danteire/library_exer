const myLibrary = [];

function Book(title, author) {
  // the constructor...
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  // do stuff here
  let bookToAdd = new Book();
  bookToAdd.title = prompt("Podaj Tytuł:");
  bookToAdd.author = prompt("Podaj Autora:");
  myLibrary.push(bookToAdd);
  displayMyLibrary();
}

function displayMyLibrary(){
    for(let i =0;i<myLibrary.length;i++){
        console.log(myLibrary[i]);
    }
}

const bodyPointer = document.querySelector("body");

const newBookButton = document.createElement("button");

newBookButton.innerText = "ADD NEW BOOK";

bodyPointer.appendChild(newBookButton);

newBookButton.addEventListener("click",addBookToLibrary);
