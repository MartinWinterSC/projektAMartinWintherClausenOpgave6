const input = document.getElementById("input");

const wordCounter = document.getElementById("wordCounter");
const characterWSpaceCounter = document.getElementById("characterWSpaceCounter");
const characterWOSpaceCounter = document.getElementById("characterWOSpaceCounter");
const characterAverage = document.getElementById("characterAverage");
const pageCounter = document.getElementById("pageCounter");

input.addEventListener("input", function () {
    var text = input.value;
    var textWOSpaces = text.replace(/\s/g, "");

    var wordArray = text.trim() === "" ? [] : text.trim().split(/\s+/);
        wordArray = wordArray.filter(function (word) {
        return /[a-zA-ZæøåÆØÅ0-9]/.test(word);
    });    
    var words = wordArray.length;
    var pages = text.length / 2400;
    var averageWordLength = words === 0 ? 0 : textWOSpaces.length / words;

    wordCounter.textContent = words;
    characterWSpaceCounter.textContent = text.length;
    characterWOSpaceCounter.textContent = textWOSpaces.length;
    characterAverage.textContent = averageWordLength.toFixed(1);
    pageCounter.textContent = pages.toFixed(1);
    
    console.log("Words:", words);
    console.log("Characters:", text.length);
    console.log("Characters without spaces:", textWOSpaces.length);
    console.log("Average characters per word:", averageWordLength);
    console.log("Average characters per word:", averageWordLength.toFixed(1));
    console.log("Pages:", pages);
    console.log("Pages:", pages.toFixed(1));

    // All of this is purely for my own perfectionism.
    // If I wanted the better performance, I'd simply delete this and add an (s) by the text in the HTML instead
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

    if (averageWordLength.toFixed(1) === "1.0") {
        pluralAverage.textContent = "";
    } else {
        pluralAverage.textContent = "s";
    }

    if (pages.toFixed(1) === "1.0") {
        pluralPage.textContent = "";
    } else {
        pluralPage.textContent = "s";
    }
});

input.dispatchEvent(new Event("input"));