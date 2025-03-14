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
    for (let i = 0; i < numberOfRows; i++) {
        console.log("scroll");
        const table = document.querySelector("table");
        const row = document.createElement("tr");

        let images = [
        rowCount % 2 === 0 ? "Image_Left-1.png" : "Image_Left-2.png",
        ];
        for (let i = 0; i < NUM_IMAGES_PER_ROW - 2; i++) {
        images.push(`Image_R-${Math.floor(Math.random() * 8) + 1}.png`);
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
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}