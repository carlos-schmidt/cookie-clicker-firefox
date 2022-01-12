console.log("Found stackover...");

clickTagElementByName("button", "Customize settings");
var interv = setInterval(clickTagElementByNameNonstop, 200, "button", "Confirm my choices");

function clickTagElementByName(tagName, name) {
    const tagElements = document.getElementsByTagName(tagName);
    for (const tagElement of tagElements) {
        if (tagElement.innerText === name) {
            tagElement.click();
        }
    }
}

function clickTagElementByNameNonstop(tagName, name) {
    const tagElements = document.getElementsByTagName(tagName);
    for (const tagElement of tagElements) {
        if (tagElement.innerText === name) {
            tagElement.click();
            clearInterval(interv);
        }
    }
}
