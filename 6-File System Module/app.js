const fs = require('fs');  // Dosya işlemlerini yapmamızı sağlar

/*
const files = fs.readdir('./', function(error, data){
    if (error){
        console.log(error);
    }else {
        console.log(data);
    }
});
*/


/*
-> Dosya içeriğini okur.
const data = fs.readFile('index.html', 'utf8', function (error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});
*/


/*
-> Dosya oluşturulur ve içine yazı yazar her dosya olşturmada yeniden yazar içeriği
fs.writeFile('deneme.txt', 'Hello World...', function(error) {
    if(error) {
        console.log(error);
    }else{
        console.log('dosya oluşturuldu')
    }
})
*/

/*
-> Dosya oluşturma konusunda yukardaki kod ile aynı işlemi yapar ancak;
içerik varsa eğer 'append' işlemi üzerine yazar yukardaki siler tekrar yazar.
fs.appendFile('deneme1.txt', '/Hello World...', function(error) {
    if(error) {
        console.log(error);
    }else{
        console.log('dosya oluşturuldu')
    }
})
*/

/*
fs.unlink('deneme1.txt', function(error){
    console.log('dosya silindi')
})
*/

/*
fs.rename('deneme1.txt', function(error){
    console.log('dosya ismi değiştirildi')
})
*/