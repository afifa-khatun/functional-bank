document.getElementById('deposit-button').addEventListener('click', function () {
    console.log('diposit button clicked');
    const depositInput = document.getElementById('deposit-input');
    const depositAmonuntText = depositInput.value;
    const depositAmount = parseFloat(depositAmonuntText)
    console.log(depositAmount);


    // get curent deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    console.log(depositTotalText);
    const previousDepositTotal = parseFloat(depositTotalText);


    depositTotal.innerText = depositAmount;
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // balance update
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


    // clear input field
    depositInput.value = '';


});



// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('withdraw button clicked')
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);




    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawtext = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawtext);
    console.log(previousWithdrawTotal);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // clear withdraw input
    withdrawInput.value = '';


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalancetotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalancetotal;



});
