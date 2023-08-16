function getValuByInputId(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}
function getValueByElementId(elementId){
    const elementField = document.getElementById(elementId);
    const elementValue = parseFloat(elementField.innerText);
    return elementValue;
}
function setPlusTotal(whereID, value1, value2){
    const oldField = document.getElementById(whereID);
    oldField.innerText = value1 + value2;
}
function setMinusTotal(whereID, value1, value2){
    const oldField = document.getElementById(whereID);
    oldField.innerText = value1 - value2;
}

document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = getValuByInputId('deposit-field');
    if (depositAmount >= 500) {
        const depositTotal = getValueByElementId('depositTotal');
        setPlusTotal('depositTotal', depositAmount, depositTotal);

        const totalAmount = getValueByElementId('totalBalance');
        setPlusTotal('totalBalance', depositAmount, totalAmount);
    }else{
        alert('Please Enter Valid Amount')
    }
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    
    const withdrawAmount = getValuByInputId('withdraw-field');
    const totalAmount = getValueByElementId('totalBalance');

    if (withdrawAmount < totalAmount && withdrawAmount >= 500) {
        const withdrawTotal = getValueByElementId('withdrawTotal');
        setPlusTotal('withdrawTotal', withdrawTotal, withdrawAmount);

        setMinusTotal('totalBalance', totalAmount, withdrawAmount);
    } else if (withdrawAmount > totalAmount) {
        alert('Not enough money! Check Your Balance!');
    }
    else{
        alert('Please Enter Valid Amount');
    }
})