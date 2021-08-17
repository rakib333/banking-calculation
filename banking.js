// deposit and withdraw section
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    const currentDeposit = depositTotal.innerText;

    const newDepositTotal = parseFloat(currentDeposit) + parseFloat(newdepositAmount);

    depositTotal.innerText = newDepositTotal;


    // balance total 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(balanceTotalText) + parseFloat(newdepositAmount);

    balanceTotal.innerText = newBalanceTotal;





    //clear input value
    depositInput.value = '';
});

document.getElementById('go-index').addEventListener('click', function () {
    window.location.href = 'index.html';
})

// withdraw er hisab
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;

    const newWithdrawAmount = parseFloat(withdrawInputText);

    const withDrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withDrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotal);

    const updatedWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    withDrawTotal.innerText = updatedWithdrawAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalance = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalance;

    withdrawInput.value = '';


})