/*
 *  Websites list in order
 */
var websites = [
    "1.html",
    "2.html",
    "3.html",
    "4.html"
];

/*
 *  Website index variable
 */
var currentIndex = 0;

window.onload = function getCurrentIndex() {
    var path = window.location.href.split("#")[0];
    currentIndex = websites.indexOf(path);
    if (currentIndex == -1) {
        currentIndex = websites.indexOf(path.split("/").pop());
    }
}

/*
 *  Goes to the previous page from the index of current page in list
 */
function goToPrevious() {
    currentIndex = (currentIndex - 1 + websites.length) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to the next page from the index of current page in list
 */
function goToNext() {
    currentIndex = (currentIndex + 1) % websites.length;
    location.href = websites[currentIndex];
}

/*
 *  Goes to random page that is not the current page
 */
function goToRandom() {
    var randomIndex = currentIndex;
    while (randomIndex == currentIndex) {
        randomIndex = Math.floor(Math.random() * websites.length);
    }
    currentIndex = randomIndex;
    location.href = websites[currentIndex];
}