document.getElementById('button-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const inputAmountCashout = document.getElementById('input-amount-cashout').value;
    
    const inputPinCash = document.getElementById('input-pin-cashout').value;

    if(inputPinCash === '1234'){

        const totalAccountBalance = document.getElementById('account-balance').innerText;
        const totalBalanceNumber = parseFloat(totalAccountBalance);

        const cashoutBalanceNumber = parseFloat(inputAmountCashout);

        if(totalBalanceNumber >= cashoutBalanceNumber){
            const currentBalance = totalBalanceNumber - cashoutBalanceNumber;

            document.getElementById('account-balance').innerText = currentBalance;

        }

        else {
            alert('not enough balance');
        }
    }
    else{
        alert('transecton failed! try again!');
    }
})