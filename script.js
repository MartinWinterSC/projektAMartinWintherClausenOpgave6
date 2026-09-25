const input = document.getElementById("input");

const wordCounter = document.getElementById("wordCounter");
const characterWSpaceCounter = document.getElementById("characterWSpaceCounter");
const characterWOSpaceCounter = document.getElementById("characterWOSpaceCounter");
const pageCounter = document.getElementById("pageCounter");

input.addEventListener("input", function () {
    var text = input.value;
    var textWOSpaces = text.replace(/\s/g, "");

    var words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    var pages = text.length / 2400;

    wordCounter.textContent = words;
    characterWSpaceCounter.textContent = text.length;
    characterWOSpaceCounter.textContent = textWOSpaces.length;
    pageCounter.textContent = pages.toFixed(1);
    
    console.log("Words:", words);
    console.log("Characters:", text.length);
    console.log("Characters without spaces:", textWOSpaces.length);
    console.log("Pages:", pages);
    console.log("Pages:", pages.toFixed(1));

    if (words === 1) {
        pluralWord.textContent = "";
    } else {
        pluralWord.textContent = "s";
    }

    if (text.length === 1) {
        pluralcharacterWSpace.textContent = "";
    } else {
        pluralcharacterWSpace.textContent = "s";
    }

    if (textWOSpaces.length === 1) {
        pluralcharacterWOSpace.textContent = "";
    } else {
        pluralcharacterWOSpace.textContent = "s";
    }

    if (pages.toFixed(1) === "1.0") {
        pluralPage.textContent = "";
    } else {
        pluralPage.textContent = "s";
    }
});

input.dispatchEvent(new Event("input"));