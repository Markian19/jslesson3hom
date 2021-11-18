
//     --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let numbers = [1,2,3,4,5];
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])
let string =['string1','strsng2','string3','strsng4','strsng5'];
console.log(string[0])
console.log(string[1])
console.log(string[2])
console.log(string[3])
console.log(string[4])
let array = ['str1' , 'str2' , 2 , 3 , true , false]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let dataEmpty = [];
dataEmpty[0]=100;
dataEmpty[1]='some text';
dataEmpty[2]='some text';
dataEmpty[3]='some text';
dataEmpty[4]='some text';


//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let  i = 0; i < 10; i++) {
document.write(`<div>`)
    document.write('some text');
document.write(`</div>`)

}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let  i = 0; i < 10; i++) {
    document.write(`<div>`)
    document.write(`some text ${i}`);
    document.write(`</div>`)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i< 20){
    document.write(`<h1>`)
    document.write("some text")
    document.write(`</h1>`)
    i++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i< 20) {
//     document.write(`<h1>`)
//     document.write(`some text ${i}`)
//     document.write(`</h1>`)
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
 let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let a = 0; a < 10; a++) {
//  console.log(a)

// }
 let x = 0
while (x < a.length){
    console.log(a[x]);
    x++
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str = ['nnn','mmm','bbb','ccc','yyy']
for (let i = 0;  i<str.length; i++) {
    console.log(str[i])
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let str1 =[1,2,'sss','ooo',true,false]
for (let j = 0; j < str1.length; j++) {
    const str1Element = str1[j];
    console.log(str1[j])

}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write