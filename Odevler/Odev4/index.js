const fs = require('fs');

fs.writeFile('employee.json', '{"name": "Employee 1 Name", "salary": 2000}','utf8', (err,data)=>{
    if(err) console.log('veriler yazilamadi');
    console.log('islem tamamlandi');
})

fs.readFile('./employee.json', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });

fs.appendFile('employee.json', '{"name": "Employee 2 Name", "salary": 3000}','utf8', (err,data)=>{
    if(err) console.log('yeni veriler yazilamadi');
    console.log('yeni islem tamamlandi');
})

fs.unlink('employee.json',  (err)=>{
    if (err) console.log(err);
    console.log('dosya silindi');
})