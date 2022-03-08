function bombs (numberBombs, maxCells){
    const arrayBombs = [];
    for(let i = 0; i < numberBombs; i++){
        arrayBombs.push(generateUniqueRandomNumber(arrayBombs, 1, maxCells ));
    }
    return arrayBombs;
}

function generateUniqueRandomNumber (numbArray, min ,max){
    let check = false;
    let randomInt;

    while(!check){
        randomInt = Math.floor(Math.random() * ((max + 1 ) - min) + min);
        if( !numbArray.includes(randomInt)){
            check = true;
        }
    }
    return randomInt;
}


const numArray = bombs(5, 10);
console.log(numArray);

for(let i = 0; i < numArray.length; i++){
    document.getElementById('random-num').innerHTML += `${numArray[i]} \xa0`;
}

const userNums = setTimeout(myFunction, 1500);


function myFunction() {
    document.getElementById('random-num').classList.add('d-none');
    const userArray = [];
    let myFlag = 0;
    for(let x = 0; x < 5; x++){
        let userNum = parseInt(prompt('inserisci un numero'));
        userArray.push(userNum);
    }
    console.log(userArray);
    for(let y = 0; y < numArray.length; y++){
        if (numArray.includes(userArray[y])){
            myFlag++;
        }
    }
    console.log(myFlag);
    document.getElementById('indovinati').innerHTML = myFlag;
}
