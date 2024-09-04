let buttonContainer = document.getElementById('buttonContainer');
let randomColorButton = document.getElementById('randomColorButton');
let h1Id = document.getElementById('randRGB');
let sucFail = document.getElementById('fail');
let coloredButtons = document.querySelectorAll('.coloredButton');
let easyModeFunction = document.querySelector(".easy");
let hardModeFunction = document.querySelector(".hard");
let allowSelection = true;

function getRandomColor() {

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;

}

function hardMode () {

    
    let colors = [];
    
    randomColorButton.addEventListener('click', function () {
    
        if (!allowSelection) return;

        colors = [];
    
        for (let i = 0; i < coloredButtons.length; i++) {
    
            const color = getRandomColor();
    
            colors.push(color);
    
            coloredButtons[i].style.backgroundColor = color;
    
        }
    
        h1Id.innerText = colors[Math.floor(Math.random() * colors.length)];
        allowSelection = true;

    });

    buttonContainer.addEventListener('click', function (event) {

        if (!allowSelection || !event.target.classList.contains('coloredButton')) {

            return;

        }
    
        if (event.target.classList.contains('coloredButton')) {

            const clickedColor = event.target.style.backgroundColor;
            const randomColor = h1Id.innerText;
    
            if (clickedColor === randomColor) {

                sucFail.innerText = 'You got it!';
                sucFail.style.backgroundColor = "green";

            }

            else {

                sucFail.innerText = 'Try again.';
                sucFail.style.backgroundColor = "red";

            }
        }
    
        allowSelection = false;

    });
    
    
    function refreshPage() {
        
        location.reload(); 
    
    }
    
    sucFail.addEventListener('click', refreshPage);
}

function easyMode () {

    
    let colors = [];
    
    randomColorButton.addEventListener('click', function () {
    
        if (!allowSelection) return;

        colors = [];
    
        for (let i = 3; i < coloredButtons.length; i++) {
    
            const color = getRandomColor();
    
            colors.push(color);
    
            coloredButtons[i].style.backgroundColor = color;
    
        }
    
        h1Id.innerText = colors[Math.floor(Math.random() * colors.length)];
        allowSelection = true;

    });
    
    buttonContainer.addEventListener('click', function (event) {
        
        if (!allowSelection || !event.target.classList.contains('coloredButton')) {

            return;

        }
    
        if (event.target.classList.contains('coloredButton')) {

            const clickedColor = event.target.style.backgroundColor;
            const randomColor = h1Id.innerText;
    
            if (clickedColor === randomColor) {

                sucFail.innerText = 'You got it!';
                sucFail.style.backgroundColor = "green";

            }

            else {

                sucFail.innerText = 'Try again.';
                sucFail.style.backgroundColor = "red";

            }
        }
    
        allowSelection = false;
        
    });
    
    
    function refreshPage() {
        
        location.reload(); 
    
    }
    
    sucFail.addEventListener('click', refreshPage);
}

hardMode();


let clickEasy = easyModeFunction.addEventListener("click", function () {
    
    easyMode();
    getRandomColor();



    for (let i = 0; i < 3; i++) {

        buttonContainer.removeChild(coloredButtons[i]);

    }

    colors = [];
    
    for (let i = 3; i < coloredButtons.length; i++) {

        const color = getRandomColor();

        colors.push(color);

        coloredButtons[i].style.backgroundColor = color;

    }

    h1Id.innerText = colors[Math.floor(Math.random() * colors.length)];

    

});




let clickHard = hardModeFunction.addEventListener("click", function () {
    
    hardMode();
    getRandomColor();



    for (let i = 0; i < 6; i++) {

        buttonContainer.appendChild(coloredButtons[i]);

    }

    colors = [];
    
    for (let i = 0; i < coloredButtons.length; i++) {

        const color = getRandomColor();

        colors.push(color);

        coloredButtons[i].style.backgroundColor = color;

    }

    h1Id.innerText = colors[Math.floor(Math.random() * colors.length)];


});







