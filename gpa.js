

let name1 = prompt('What is your First Name');
let name2 = prompt('What is your Last Name');
let roll = prompt('What is your Roll Number');

let ban = prompt('Bangla Marks');
let eng = prompt('English Marks');
let mat = prompt('Maths Marks');
let s = prompt('Since Marks');
let ss = prompt('Social since Marks');
let reg = prompt('Religion Marks');

let totalnumber = ban+eng+mat+s+ss+reg;
let cgpa =(totalnumber/6)

console.log(`

    First Name: ${name1}
    Last Name: ${name2}
    Roll Number: ${roll}


    Bangla :           ${ban}
    English :          ${eng}
    Since :            ${s}
    Social since :     ${ss}
    Maths :            ${mat}
    Religion :         ${reg}
    =====================================
    Mot Number:        ${totalnumber}
`);

if(mark >0 mark 33<){
    console.log('Tomer Result D');
}else if(mark >=33 mark 40<) {
    console.log('Tomer Result C');
}else if(mark >=40 mark 50<){
    console.log('Tomer Result B');
}else if(mark =>50 mark 60<){
    console.log('Tomar Result A-');
}else if(mark =>60 mark 80<){
    console.log('Tomar Result A');
}else if(mark =>80 mark 100<){
    console.log('Tomar Result A+');
}else if(mark == 100){
    console.log('Tomar Result A+');
};