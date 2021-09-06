//SETUP
const anvilButton = document.getElementById("UPGRADEbutton");
const itemDisplay = document.getElementById("itemDisplay");
let iDisplayHtml = itemDisplay.innerHTML;
let itemStatus = 0;
const printResult = document.getElementById("result");
//CODE

//RandomNumberGenerator
const upgradeChance = (min, max) => { return Math.floor(Math.random() * (max - min)); }
let chanceOfSuccess = upgradeChance(0, 100);

//SUCCESS FAILURE FUNCTIONS
//Success
const successDisplay = () => {
    printResult.style.color = "green";
    printResult.style.visibility = "visible";
    printResult.innerHTML = "SUCCESS"
    setTimeout(function () { printResult.style.visibility = "hidden" }, 1000)
};
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


//BUTTON FUNCTIONS


const upgradeStatus = () => {
    let chanceOfSuccess = upgradeChance(0, 100);
    if (itemStatus < 5) {
        if (chanceOfSuccess < 30) {
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
        if (chanceOfSuccess < 15) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    }
    else if (itemStatus < 7) {
        if (chanceOfSuccess < 10) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    }
    else if (itemStatus < 8) {
        if (chanceOfSuccess < 5) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    }
    else if (itemStatus < 9) {
        if (chanceOfSuccess < 3) {
            //SUCCESS
            return itemGrade();
        }
        else {
            //FAILURE
            return itemDegrade();
        }
    }

}
anvilButton.addEventListener("click", upgradeStatus);


//display
console.log(iDisplayHtml)
