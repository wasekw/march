
// const arr = [2, 4, 5];


// arr.push(3);
// console.log(arr);


// let myName = 'Vasiliy';

// let bool = true;

// let nothing = null;
// let dog = undefined;

// let obj = {
//     mass: 100,
//     form: 'sercle',
//     quantity: [1, 3, 5, 7, 898],
// };
// console.log(dog);

// let answer = prompt('Вам є 18 років?', '');
// console.log(answer);

// let answer = confirm('Вам є 18 років?');
// console.log(answer);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// answers[0] = prompt('Яке Ваше імя?', '');
// answers[1] = prompt('Якe Вашe прізвище?', '');
// answers[2] = prompt('Скільки Вам років?', '');
// answers[3] = prompt('Яке Ваше хобі?', '');
// document.write(answers);
//=====================================================================

// let answers = [];
// let question = [
//     'Яке Ваше імя?',
//     'Якe Вашe прізвище?',
//     'Скільки Вам років?', 
//     'Яке Ваше хобі?'
// ];

// for (let i = 0; i < question.length; i+= 1) {
// answers.push(prompt(question[i], ''));
// answers[i] = prompt(question[i], '');
// }

// console.log(answers);

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// let i = 0;
// do {
//     answers.push(prompt(question[i], ''));
//     i++;
// } while (i < question.length);

// let i = 0;
// while (i < question.length) {
//     answers.push(prompt(question[i], ''));
//     i++;
// }

// console.log(answers);

// markLoop:
// while (theMark == true) {
//    doSomething();
// }

//=============================================================================================

// // Function Declaration
// function humanSayHello(name) {
//     console.log('Hello ' + name + '!');
// }

// humanSayHello('Vasek');

// // Function Expression
// let calc = function(a, b) {
//     return a + b;
// };

// console.log(calc(5, 7));

//=====================================================================================================

function myFirstApp (name, age) {
    alert(`Мене звати ${name} і це моя перша программа!!!`);

    function showSkills() {
        let skills = ['html', 'css', 'javascript', 'react', 'vue'];

        skills.map(el => {
            console.log(`Я володію: ${el}`);
        });
    }

    showSkills();

    function checkAge() {
        if (age > 18) {
            console.log('Це дуже круто ти станеш гарним фронтенд розробником!');
        } else if (age > 90) {
            console.log('Нажаль ти вже занадто старий:(');
        } else {
            console.log('Ти занадто молодий!');
        }
    }

    checkAge();

    function calcPow(num) {
        return num * num;
    }

    console.log(calcPow(4));
}

myFirstApp('Vasek', 50);