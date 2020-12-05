const HW = require('./hw.json');

function Topping() {
    const myList = document.createElement('ul');
    for (let j = 0; j < HW.length; j++) {
        for (let i = 0; i < HW[j].topping.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = HW[j].topping[i].type;
            myList.appendChild(listItem);
        }
    }

}

function Batters() {
    const myList = document.createElement('ul');
    for (let j = 0; j < HW.length; j++) {
        for (let i = 0; i < HW[j].batters.batter; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = HW[j].batters.batter[i].type;
            myList.appendChild(listItem);
        }
    }
}

function PSum() {
    const psum = document.createElement('p');
    let sum = 0;
    for (let j = 0; j < HW.length; j++) {
            sum += HW[j].ppu;
    }
    psum.textContent = sum;
    console.log(sum);
}

function Avg() {
    const pavg = document.createElement('p');
    let sum=0;
    let avg = 0;
    for (let j = 0; j < HW.length; j++) {
            sum += HW[j].ppu;
    }
    avg = sum / HW.length;
    pavg.textContent = avg;
    console.log(avg);
}

function IDs() {
    const myList = document.createElement('ul');
    for (let j = 0; j < HW.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = HW[j].id;
            myList.appendChild(listItem);
            for (let i = 0; i < HW[j].topping.length; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = HW[j].topping[i].id;
                myList.appendChild(listItem);
            }
            for (let i = 0; i < HW[j].batters.batter; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = HW[j].batters.batter[i].id;
                myList.appendChild(listItem);
            }
    }
}