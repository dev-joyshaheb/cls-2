
let boername = prompt('What Is  Boer Name');
let konename =prompt('What Is kone Name');
let age = prompt('What Is Your Age');


console.log(`

    Boer Name :     ${boername}
    Koner Name:     ${konename}
    Age       :     ${age}
`);

if(age >=18){
    console.log(`Aponi Akhon Nirdithe Biye korte paren..Aponake keo Distap korbe Na..Aponer Biyea Shovo hok`);
}else{
    console.log(`Aponer akhono Biyer boyos hoi ni..Aponake Doya kore ${ 18-age } bosor opekha korte hobe..ta na hole sobi aponake distap korbe`);
}