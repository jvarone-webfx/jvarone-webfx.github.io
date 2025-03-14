// On scroll, add a table row - after document is ready
// Only add a row after scrolling in increments of 200px
const NUM_RANDOM_IMAGES = 8;
const NUM_IMAGES_PER_ROW = 6;
let furthestScroll = 0;
let scrollPosition = 0;
let rowCount = 0;
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        scrollPosition = window.scrollY;
        if (scrollPosition - furthestScroll >= 211) {
        let numberOfRows = (scrollPosition - furthestScroll) / 211;
        furthestScroll = scrollPosition;
        let lastRandomNumber = 1;
        for (let i = 0; i < numberOfRows; i++) {
            console.log("scroll");
            const table = document.querySelector("table");
            const row = document.createElement("tr");

            let images = [
                rowCount % 2 === 0 ? "Image_Left-1.png" : "Image_Left-2.png",
            ];
            let lastRandomNumber2 = 1;
            let imagesInRow = [];
            for (let i = 0; i < NUM_IMAGES_PER_ROW - 2; i++) {
                // Generate a random number between 1 and 100
                let randomNumber = Math.floor(Math.random() * 100) + 1;
                while (randomNumber === lastRandomNumber) {
                    randomNumber = Math.floor(Math.random() * 100) + 1;
                }
                lastRandomNumber = randomNumber;
                if (randomNumber > 20) {
                    let randomNumber2 = Math.floor(Math.random() * 8) + 1;
                    while (randomNumber2 === lastRandomNumber2 || imagesInRow.includes(randomNumber2)) {
                        randomNumber2 = Math.floor(Math.random() * 8) + 1;
                    }
                    lastRandomNumber2 = randomNumber2;
                    images.push(`Image_R-${randomNumber2}.png`);
                    imagesInRow.push(randomNumber2);
                } else if (randomNumber > 10) {
                    // Generate a random number between 9 and 12
                    let randomNumber2 = Math.floor(Math.random() * 4) + 9;
                    while (randomNumber2 === lastRandomNumber2 || imagesInRow.includes(randomNumber2)) {
                        randomNumber2 = Math.floor(Math.random() * 4) + 9;
                    }
                    lastRandomNumber2 = randomNumber2;
                    images.push(`Image_R-${randomNumber2}.png`);
                    imagesInRow.push(randomNumber2);
                } else if (randomNumber > 1) {
                    // Generate a random number between 13 and 15
                    let randomNumber2 = Math.floor(Math.random() * 3) + 13;
                    while (randomNumber2 === lastRandomNumber2 || imagesInRow.includes(randomNumber2)) {
                        randomNumber2 = Math.floor(Math.random() * 3) + 13;
                    }
                    lastRandomNumber2 = randomNumber2;
                    images.push(`Image_R-${randomNumber2}.png`);
                    imagesInRow.push(randomNumber2);
                } else if (lastRandomNumber2 !== 16 && !imagesInRow.includes(16)) {
                    images.push(`Image_R-16.png`);
                    lastRandomNumber2 = 16;
                } else {
                    // Just do any random number between 1 and 16
                    let randomNumber2 = Math.floor(Math.random() * 16) + 1;
                    while (randomNumber2 === lastRandomNumber2 || imagesInRow.includes(randomNumber2)) {
                        randomNumber2 = Math.floor(Math.random() * 16) + 1;
                    }
                    lastRandomNumber2 = randomNumber2;
                    images.push(`Image_R-${randomNumber2}.png`);
                    imagesInRow.push(randomNumber2);
                }
            }
            images.push(
                rowCount % 2 === 0 ? "Image_Right-1.png" : "Image_Right-2.png"
            );

            let innerHTML = "";
            for (const image of images) {
                innerHTML += '<td><img src="images/' + image + '" /></td>';
            }
            row.innerHTML = innerHTML;
            table.appendChild(row);
            rowCount++;
        }
        }
    });

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
});