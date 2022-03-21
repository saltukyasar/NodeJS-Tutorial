function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("veriler alınmaya calisiliyor");
    if (data) {
      resolve("veriler alindi");
    } else {
      reject("veriler alinamadi");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("veriler düzenleniyor");

    if (receivedData) {
      resolve("veriler düzenlendi");
    } else {
      reject("veriler düzenlenemedi");
    }
  });
}

// getData(true)
// .then(result=>{
//     console.log(result);
//     return cleanData(true)
// }).then(result => {
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })

// async function processData() {
//   try {
//     const receivedData = await getData(false);
//     console.log(receivedData);
//     const cleaneadData = await cleanData(true);
//     console.log(cleaneadData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// processData();

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
        //resolve(books);
        reject('bir hata olustu');
    })
    return promise1;
};

// addBook({name: 'kitap 4' , author: 'yazar4'})
//     .then(()=>{
//         console.log('yeni liste')
//         listBooks();
//     }).catch((error)=>{
//         console.log(error);
//     })

async function showBooks(){
try{
    await addBook({name: 'book123', author: 'yazar 123'})
    listBooks();
}catch(error){
console.log(error);
}
    
}

showBooks();