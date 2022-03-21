// console.log('1.görev');
// console.log('2.görev');
// console.log('3.görev');

// const func1 = () => {
//     console.log('func1 tamamlandı');
// };

// const func2 = () => {
//     console.log('func2 tamamlandı');
// }

// func2();
// func1();

// const func1 = () => {
//          console.log('func1 tamamlandı');
//          func2();
//      };

//      const func2 = () => {
//         console.log('func2 tamamlandı');
//         func3();
//     };

//     const func3 = () => {
//         console.log('func3 tamamlandı');
//     };

//     func1();

// const func1 = () => {
//     console.log('func1 tamamlandı');
//     func3();
// };

// const func2 = () => {
//    console.log('func2 tamamlandı');
   
// };

// const func3 = () => {
//    console.log('func3 tamamlandı');
//     func2();
// };

// func1();

// Single Thread --- JS senkron

// let x=5;

// console.log('1. veri',x);
// setTimeout(()=>{
//     x += 5;
//     console.log('2. veri',x);
// },5000)


// x+=5;
// console.log('3.veri',x);

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
    callback();
};

addBook({name: 'kitap 4' , author: 'yazar4'}, listBooks);


//listBooks();