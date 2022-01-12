const docLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');
switch (docLanguage.slice(0, 2)) {
    case "de":
        clickParentOfTagElementByNameAmountOfTimesTimes("div", "Anpassen", 1);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "Aus", 3);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "Bestätigen", 1);
        break;
    case "en":
        clickParentOfTagElementByNameAmountOfTimesTimes("div", "Customise", 1);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "Off", 3);
        clickParentOfTagElementByNameAmountOfTimesTimes("span", "Confirm", 1);    
}

function clickParentOfTagElementByNameAmountOfTimesTimes(tagName, name, amountOfTimes) {
    const tagElements = document.getElementsByTagName(tagName);
    var x = 0;
    for (const tagElement of tagElements) {
        if (x == amountOfTimes) return;
        if (tagElement.innerText === name) {
            x += 1;
            tagElement.parentElement.click();
        }
    }
}