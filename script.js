let str = `JavaScript nima?
JavaScript dastlab "veb-sahifalarni jonlantirish" uchun yaratilgan .

Bu tildagi dasturlar skriptlar deb ataladi . Ular HTML-ga kiritilishi va veb-sahifa yuklanganda avtomatik ravishda ishga tushishi mumkin.

Skriptlar oddiy matn sifatida taqsimlanadi va bajariladi. Ularni ishga tushirish uchun maxsus tayyorgarlik yoki kompilyatsiya kerak emas.

Bu JavaScript-ni boshqa til - Java dan ajratib turadi .`
function checkText(x){
    let i = 0
    let i2 = x.length
    let result 
    let text = x

    while( i < x.length + 1){

        if( x.indexOf("A" , i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{
        }

        if( x.indexOf("a", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("E", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{} 
        if( x.indexOf("e", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}

        if( x.indexOf("I", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("i", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("U", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("u", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("O", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("o", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("O'", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        if( x.indexOf("o'", i) == i){
            text = text.substring( 0, i) + "*" + (text.substr( x.length - i2 + 1))
        }else{}
        i++
        i2--


    }
    console.log(x.substring(0, i))
    console.log(text)

} 

checkText(str)

