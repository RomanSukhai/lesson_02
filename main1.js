var user={}
user.name = 'ПИЛИП'
user.surname = 'ШЕВЧЕНКО'
var key = user.name
var key2 = user.surname
key = 'СЕРГІЙ'
console.log(key);
delete user.surname
console.log(user.surname);