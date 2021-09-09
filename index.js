//SETUP
const anvilButton = document.getElementById("UPGRADEbutton");
const selectDiff = document.getElementById("diffSelect");
const displayJoke = document.getElementById("balls")
const itemDisplay = document.getElementById("itemDisplay");
let iDisplayHtml = itemDisplay.innerHTML;
let itemStatus = 0;
const printResult = document.getElementById("result");
const difficulty = {
    "Hard": [30, 15, 10, 5, 3],
    "Medium": [65, 45, 30, 15, 5],
    "Easy": [100, 80, 60, 50, 35]
}
let upgradeDiff = difficulty.Hard;
//CODE

//RandomNumberGenerator
const upgradeChance = (min, max) => { return Math.floor(Math.random() * (max - min)); }

//SUCCESS FAILURE FUNCTIONS

//Success
const successDisplay = () => {
    printResult.style.color = "green";
    printResult.style.visibility = "visible";
    printResult.innerHTML = "SUCCESS"
    setTimeout(function () { printResult.style.visibility = "hidden" }, 1000)
};
const successMaxed = () => {
    printResult.style.color = "green";
    printResult.style.visibility = "visible";
    printResult.innerHTML = "This item is MAXED"
    setTimeout(function () { printResult.style.visibility = "hidden" }, 1000)
}
const itemGrade = () => {
    itemStatus++;
    iDisplayHtml = "+" + itemStatus;
    itemDisplay.innerHTML = iDisplayHtml;
    successDisplay();
    return itemStatus;
};
//Failure
const failureDisplay = () => {
    printResult.style.color = "red";
    printResult.style.visibility = "visible";
    printResult.innerHTML = "FAILURE"
    setTimeout(function () { printResult.style.visibility = "hidden" }, 1000)
};
const itemDegrade = () => {
    itemStatus--;
    iDisplayHtml = "+" + itemStatus;
    itemDisplay.innerHTML = iDisplayHtml;
    failureDisplay();
    return itemStatus;
}
///DIFFICULTY SETTINGS

const getDiff = (selectDiff) => {
    let selectValue = selectDiff.value;
    itemStatus=0;
    if (selectValue == "Hard") {
        itemDisplay.innerHTML = "+0"
        displayJoke.innerHTML = "Balls of steel"
        displayJoke.style.visibility = "visible"
        setTimeout(function () { displayJoke.style.visibility = "hidden" }, 500)
        return upgradeDiff = difficulty.Hard;
    }
    if (selectValue == "Medium") {
        itemDisplay.innerHTML = "+0"
        displayJoke.innerHTML = "GIT GUD"
        displayJoke.style.visibility = "visible"
        setTimeout(function () { displayJoke.style.visibility = "hidden" }, 500)
        return upgradeDiff = difficulty.Medium;
    }
    if (selectValue == "Easy") {
        itemDisplay.innerHTML = "+0"
        displayJoke.innerHTML = "YOU NOOB"
        displayJoke.style.visibility = "visible"
        setTimeout(function () { displayJoke.style.visibility = "hidden" }, 500)
        return upgradeDiff = difficulty.Easy;
    }
}

//BUTTON FUNCTIONS
const upgradeStatus = () => {
    let chanceOfSuccess = upgradeChance(0, 100);
    if (itemStatus < 5) {
        if (chanceOfSuccess < upgradeDiff[0]) {
            //ADD PRINT SUCCESS CODE TO SCREEN IN THIS LINE / / / / / /
            successDisplay();
            return itemGrade();
        }
        else {
            //ADD PRINT FAILURE CODE TO SCREEN IN THIS LINE / / / / / /
            //No item status reduction
            failureDisplay();
        }
    }
    else if (itemStatus < 6) {
        if (chanceOfSuccess < upgradeDiff[1]) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    }
    else if (itemStatus < 7) {
        if (chanceOfSuccess < upgradeDiff[2]) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    }
    else if (itemStatus < 8) {
        if (chanceOfSuccess < upgradeDiff[3]) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    }
    else if (itemStatus < 9) {
        if (chanceOfSuccess < upgradeDiff[4]) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    } else if (itemStatus >= 9) {
        return successMaxed();
    }

}
anvilButton.addEventListener("click", upgradeStatus);
//display
