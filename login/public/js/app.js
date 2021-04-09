
const array = ["images/thesis1.png","images/thesis2.png","images/thesis3.png","images/thesis4.png","images/thesis5.png","images/thesis6.png","images/thesis7.png","images/thesis8.png","images/thesis9.png","images/thesis10.png","images/thesis11.png","images/thesis12.png","images/thesis13.png","images/thesis14.png","images/thesis15.png","images/thesis16.png","images/thesis17.png","images/thesis18.png"];

const canvas1 = document.getElementById("image1");
const canvas2 = document.getElementById("image2");
const canvas3 = document.getElementById("image3");
const canvas4 = document.getElementById("image4");
const canvas5 = document.getElementById("image5");
const canvas6 = document.getElementById("image6");
const canvas7 = document.getElementById("image7");
const canvas8 = document.getElementById("image8");
const canvas9 = document.getElementById("image9");
var imageId;
var random9 =[];
random9 = getRandomElementsFromArray(array,9);
// console.log(random9);
function getRandomElementsFromArray(array, numberOfRandomElementsToExtract = 1) {
    const elements = [];

    function getRandomElement(arr) {
        if (elements.length < numberOfRandomElementsToExtract) {
            const index = Math.floor(Math.random() * arr.length)
            const element = arr.splice(index, 1)[0];

            elements.push(element)

            return getRandomElement(arr)
        } else {
            return elements
        }
    }

    return getRandomElement([...array])
}
// console.log(random9[0]);
canvas1.src = `${random9[0]}`;
canvas2.src = `${random9[1]}`;
canvas3.src = `${random9[2]}`;
canvas4.src = `${random9[3]}`;
canvas5.src = `${random9[4]}`;
canvas6.src = `${random9[5]}`;
canvas7.src = `${random9[6]}`;
canvas8.src = `${random9[7]}`;
canvas9.src = `${random9[8]}`;
// canvas1.style.backgroundImage = 'url('+ random9[0]+')';
// // canvas2.style.backgroundImage = 'url('+ random9[1]+')';
// canvas3.style.backgroundImage = 'url('+ random9[2]+')';
// canvas4.style.backgroundImage = 'url('+ random9[3]+')';
// canvas5.style.backgroundImage = 'url('+ random9[4]+')';
// canvas6.style.backgroundImage = 'url('+ random9[5]+')';
// canvas7.style.backgroundImage = 'url('+ random9[6]+')';
// canvas8.style.backgroundImage = 'url('+ random9[7]+')';
// canvas9.style.backgroundImage = 'url('+ random9[8]+')';


const radio1 = document.querySelector(".radio-1");
const radio2 = document.querySelector(".radio-2");
const radio3 = document.querySelector(".radio-3");

const radio4 = document.querySelector(".radio-4");
const radio5 = document.querySelector(".radio-5");
const radio6 = document.querySelector(".radio-6");

const radio7 = document.querySelector(".radio-7");
const radio8 = document.querySelector(".radio-8");
const radio9 = document.querySelector(".radio-9");


radio1.value = `${random9[0]}`;
radio2.value = `${random9[1]}`;
radio3.value = `${random9[2]}`;
radio4.value = `${random9[3]}`;
radio5.value = `${random9[4]}`;
radio6.value = `${random9[5]}`;
radio7.value = `${random9[6]}`;
radio8.value = `${random9[7]}`;
radio9.value = `${random9[8]}`;


















