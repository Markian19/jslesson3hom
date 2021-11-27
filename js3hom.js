
//     --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [1,2,3,4,5];
// console.log(numbers[0])
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// let string =['string1','strsng2','string3','strsng4','strsng5'];
// console.log(string[0])
// console.log(string[1])
// console.log(string[2])
// console.log(string[3])
// console.log(string[4])
// let array = ['str1' , 'str2' , 2 , 3 , true , false]
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])
// console.log(array[5])


//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let dataEmpty = [];
// dataEmpty[0]=100;
// dataEmpty[1]='some text';
// dataEmpty[2]='some text';
// dataEmpty[3]='some text';
// dataEmpty[4]='some text';


//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let  i = 0; i < 10; i++) {
// document.write(`<div>`)
//     document.write('some text');
// document.write(`</div>`)
//
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let  i = 0; i < 10; i++) {
//     document.write(`<div>`)
//     document.write(`some text ${i}`);
//     document.write(`</div>`)
//
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i< 20){
//     document.write(`<h1>`)
//     document.write("some text")
//     document.write(`</h1>`)
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i< 20) {
//     document.write(`<h1>`)
//     document.write(`some text ${i}`)
//     document.write(`</h1>`)
//     i++
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let a = 0; a < 10; a++) {
//  console.log(a)

// }
//  let x = 0
// while (x < a.length){
//     console.log(a[x]);
//     x++
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['nnn','mmm','bbb','ccc','yyy']
// for (let i = 0;  i<str.length; i++) {
//     console.log(str[i])
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let str1 =[1,2,'sss','ooo',true,false]
// for (let j = 0; j < str1.length; j++) {
//     const str1Element = str1[j];
//     console.log(str1[j])
//
// }

// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let array1 = [0,22,16,34,76]
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
let array2 = ['string','string2','string3','string4','string5']
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);
console.log(array2[4]);
let array3 = [22,13,'string','string',true,false]
console.log(array3[0]);
console.log(array3[1]);
console.log(array3[2]);
console.log(array3[3]);
console.log(array3[4]);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array4 = []
array4[0] = 12;
array4[1] = 'srtring2';
array4[2] = 'srtring7';
array4[3] = 66;
array4[4] = true;
console.log(array4);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for( let i=0; i<10; i++){
    document.write('<div>some text</div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for( let i=0; i<10; i++){
    document.write(`<div>some${i}text</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0
while (i<20){
    document.write('<h1>some text</h1>')
    i++
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let y = 0
while (y<20){
    document.write(`<h1>some text${y}</h1>`)
    y++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let newArray = [22,12,65,8,99,45,7,88,29,0]
for (const number of newArray) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let newArray2 = ['str1','str2','str3','str4','str5','str6','str7','str8','str9','str10']
for (const string of newArray2) {
    console.log(string);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let newArray3 = ['element',55,3.14,'element2',true,0,'some text',99,false]
for (const newArray3Element of newArray3) {
    console.log(newArray3Element);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let newArray4 = ['element',55,3.14,'element2',true,0,'some text',99,false]
for (const newArray4Element of newArray4) {
    if (typeof newArray4Element === "boolean") {
        console.log(newArray4Element)
    }//зробив не так як було в прикладі,але працює.
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let newArray5 = ['element',55,3.14,'element2',true,0,'some text',99,false]
for (const newArray5Element of newArray5) {
    if (typeof newArray5Element === "number") {
        console.log(newArray5Element)
    }//зробив не так як було в прикладі,але працює.
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let newArray6 = ['element',55,3.14,'element2',true,0,'some text',99,false]
for (const newArray6Element of newArray6) {
    if (typeof newArray6Element === "string") {
        console.log(newArray6Element)
    }//зробив не так як було в прикладі,але працює.
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let newArray7 = []
newArray7[0] = 123;
newArray7[1] = 23;
newArray7[2] = false;
newArray7[3] = 'str1';
newArray7[4] = 'str2';
newArray7[5] = 'str3';
newArray7[6] = 0;
newArray7[7] = true;
newArray7[8] = 12;
newArray7[9] = 'str4';

for(let i=0;i<newArray7.length;i++){
    console.log(newArray7[i]);
    document.write(newArray7[0],newArray7[1],newArray7[2],newArray7[3],newArray7[4],newArray7[5],newArray7[6])

}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i =0;i<=10;i++){
console.log(i);
    document.write(`${i}`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i =0;i<=100;i++){
    console.log(i);
    document.write(`${i}`);}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i =0;i<100;i+=2){
    console.log(i);
    document.write(`${i}`);}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i =0;i<100;i++){
    if(i%2===0){
        console.log(i);
        document.write(`${i}`);
    }

}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i =0;i<100;i++){
    if(i%3===1){
        console.log(i);
        document.write(`${i}`);
    }

}