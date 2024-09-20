document.getElementById('button-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmountCashout = document.getElementById('input-amount-cashout').value;
    
    const inputPinCash = document.getElementById('input-pin-cashout').value;

    if(inputPinCash === '1234'){

        const accountBalance = document.getElementById('account-balance-cashout').innerText;
        const accountBalanceNumber = parseFloat(accountBalance);

        const cashoutBalanceNumber = parseFloat(inputAmountCashout);

        if(accountBalanceNumber >= cashoutBalanceNumber){
            const currentBalance = accountBalanceNumber - cashoutBalanceNumber;

            document.getElementById('account-balance-cashout').innerText = currentBalance;

        }

        else {
            alert('not enough balance');
        }
    }
    else{
        alert('transecton failed! try again!');
    }
})