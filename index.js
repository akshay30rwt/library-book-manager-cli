const { addBook, viewBooks, deleteBook, searchBook } = require('./library/library-books');

const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];
const arg3 = process.argv[5];

if(command === 'add') {
    addBook(arg1, arg2, Number(arg3));
} else if(command === 'view') {
    viewBooks();
} else if(command === 'delete') {
    deleteBook(Number(arg1));
} else if(command === 'search') {
    searchBook(arg1);
} else {
    console.log('Unknown command. Use: add, view, delete, total');
}