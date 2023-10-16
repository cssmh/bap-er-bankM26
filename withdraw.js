document.getElementById("btn-withdraw").addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawParse = parseFloat(withdrawField.value);

    withdrawField.value = '';
    if(isNaN(withdrawParse)){
        alert('number deo')
        return;
    }
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalField = parseFloat(withdrawTotal.innerText);

    
    const balanceWithdraw = document.getElementById('balance-total');
    const balanceWithdrawString = parseFloat(balanceWithdraw.innerText);
    
    if(withdrawParse > balanceWithdrawString){
        alert('taka nai eto')
        return;
    }
    withdrawTotal.innerText = withdrawParse + withdrawTotalField;

    balanceWithdraw.innerText = balanceWithdrawString - withdrawParse;

})