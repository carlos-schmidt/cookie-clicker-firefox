console.log("Found stackover...");

clickTagElementByName("button", "Customize settings");
setTimeout(clickTagElementByName, 500, "button", "Confirm my choices");

function clickTagElementByName(tagName, name) {
    const tagElements = document.getElementsByTagName(tagName);
    for (const tagElement of tagElements) {
        if (tagElement.innerText === name) {
            tagElement.click();
        }
    }
}

