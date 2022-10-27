let name = "Alex"
let money = 10000
let account = 7777

let que = prompt("как тебя зовут?")

if(que === name) {
    
    let que2 = prompt('номер счета?')
    if(que2 === '7777') {
        let money = +prompt("сколько обналичить?")

        if(money <= '10000') {
            alert(`сколько снял?: ${money}, сколько осталось?: ${10000 - money}`)
        }
        
        else {
            console.log('недостаточно средств');
        }
    }
    
    else {
        console.log('пользователь не найден, иди на три буквы');
    }
} 

else {
    console.log('пользователь не найден, иди на три буквы');
}


/// /// ///

// let name1 = prompt('What is you name?').trim()
// let age1 = '21'

// if(age1 >= 20 && age1 <= 40) {
//     console.log('welcome ' + name1);
// } else {
//     console.log('we do not know you');
// }