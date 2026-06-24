const fs = require('fs');
const FILE_PATH = './data.json';

function readData() {
    const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
}

function writeData(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

function addBook(title, author, year) {
    const data = readData();

    const maxId = data.books.length > 0
        ? Math.max(...data.books.map(book => book.id))
        : 0
    const newBook = {
        id: maxId + 1,
        title: title,
        author: author,
        year: year
    }
    data.books.push(newBook);
    writeData(data);
    console.log(`Book: '${title}' added in the library`);
}

function viewBooks() {
    const data = readData();
    if(data.books.length === 0) {
        console.log(`Library is empty`);
        return;
    }
    data.books.forEach(book => {
        console.log(`ID: ${book.id} | Title: ${book.title} | Author: ${book.author} | Year: ${book.year}`);
    });
}

function deleteBook(id) {
    const data = readData();
    const index = data.books.findIndex(book => book.id === id);

    if(index === -1) {
        console.log(`Book with ID: ${id} not found`);
        return;
    }
    const deletedBook = data.books[index];
    data.books.splice(index, 1);
    writeData(data);
    console.log(`Book: '${deletedBook.title}' deleted from the library`);
}