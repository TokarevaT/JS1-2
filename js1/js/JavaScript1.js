 var names = [];

//for (var i = 0; i < 5; i++) {
//    var name = prompt('Введите имя');
//    names.push(name);
//    console.log(name);
//}

while (names.length <= 4) {
    var name = prompt('Введите имя');

    if (name.length == 0) {
        alert("Имя не может быть пустым");
    }
    else {
        names.push(name);
        console.log(name);
    }

}

var checkName = prompt('Введите имя');

var isMatch = false;

for (var i = 0; i < names.length; i++) {
    if (checkName == names[i]) {
        isMatch = true;
        break;        
    } 
}

if (isMatch == true) {
    alert(checkName + ', вы успешно вошли');
} else {
    alert('ошибка');
}


