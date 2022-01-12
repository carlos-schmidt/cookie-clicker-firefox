console.log("Found yout...");


const docLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');
switch (docLanguage.slice(0, 2)) {
    case "de":
        clickParentOfTagElementByNameAmountOfTimesTimes("yt-formatted-string", "ANPASSEN", 1);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "Aus", 3);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "BESTÄTIGEN", 5);
        break;
    case "en":
        clickParentOfTagElementByNameAmountOfTimesTimes("yt-formatted-string", "CUSTOMIZE", 1);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "Off", 3);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "CONFIRM", 5); 
        break;   
}

console.log("...ube");


function clickParentOfTagElementByNameAmountOfTimesTimes(tagName, name, amountOfTimes) {
    const tagElements = document.getElementsByTagName(tagName);
    var counter = 0;
    for (const tagElement of tagElements) {
        console.log("Searching for Element")
        if (counter == amountOfTimes) return;
        if (tagElement.innerText === name) {
            counter += 1;
            tagElement.parentElement.click();
        }
    }
}
