// Please deposit to
document.getElementById("btn-deposit").addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    newDepositAmount = depositField.value;
    const convertNew = parseFloat(newDepositAmount);
    
    depositField.value = '';
    if(isNaN(convertNew)){
        alert('number deo')
        return;
    }
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotal = depositTotalElement.innerText;
    const convertPrevious = parseFloat(previousDepositTotal);

    const currentDepositTotal = convertNew + convertPrevious;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceField = document.getElementById('balance-total');
    const newBalance = balanceField.innerText;
    const convertBalance = parseFloat(newBalance);

    balanceField.innerText = convertNew + convertBalance;
    
// Deposit complete here!
})