// const promise1 = new Promise((resolve,reject)=>{
//     resolve('veriler alindi')
//     reject('baglanti hatasi');
// } )

// //console.log(promise1);

// promise1
//     .then(value=>{
//         console.log(value);
//     }).catch(error => {
//         console.log(error);
//     })


const books = [
    {name: 'book1', author: 'yazar 1'},
    {name: 'book2', author: 'yazar 2'},
    {name: 'book3', author: 'yazar 3'}

];

const listBooks = () => {
    books.map(book => {
        console.log(book.name)
    })
};



const addBook = (newBook, callback) =>{
    books.push(newBook);
    const promise1 = new Promise((resolve,reject)=>{
        books.push(newBook);
        resolve(books);
        //reject('bir hata olustu');
    })
    return promise1;
};

addBook({name: 'kitap 4' , author: 'yazar4'})
    .then(()=>{
        console.log('yeni liste')
        listBooks();
    }).catch((error)=>{
        console.log(error);
    })