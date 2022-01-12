console.log("Found deepl...");

clickTagElementByName("button", "Auswahl akzeptieren");

function clickTagElementByName(tagName, name) {
    const tagElements = document.getElementsByTagName(tagName);
    for (const tagElement of tagElements) {
        if (tagElement.innerText === name) {
            tagElement.click();
        }
    }
}
