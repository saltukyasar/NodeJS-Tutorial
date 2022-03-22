const fs = require('fs');

// read file

fs.readFile('./password.txt','utf8', (err,data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('Dosya okundu');
})

// write file

fs.writeFile('example.json', '{"name": "Arin", "age": 6}', 'utf8', (err)=>{
    if(err) console.log(err);
    console.log('JSON Dosya basarili bir sekilde olusturuldu');
});

//Veri eklemek

fs.appendFile('example.txt', '\n Deutschlandddddd', 'utf8', (err)=>{
    if(err) console.log(err);
    console.log('yeni veri eklendi');
});

// Delete File

fs.unlink('example.json', (err)=>{
    if (err) console.log(err);
    console.log('dosya silindi');
})

// create folder

fs.mkdir('./uploads/img', {recursive : true}, (err)=>{
    if(err) console.log(err);
    console.log('klasorler olusturuldu');
})

// delete folder
fs.rmdir('./uploads', {recursive : true}, (err)=>{
    if(err) console.log(err);
    console.log('klasorler silindi');
})
