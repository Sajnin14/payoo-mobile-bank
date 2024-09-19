document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();

  const inputAmount = document.getElementById('input-amount').value;
//   console.log(inputAmount);
  
  const inputPin = document.getElementById('input-pin').value;
//   console.log(inputPin);

  if(inputPin === '1234'){
    const accountBalance = document.getElementById('account-balance').innerText;

    const accountBalanceNumber = parseFloat(accountBalance);
    const inputAmountNumber = parseFloat(inputAmount);
    
    const currentBalance = accountBalanceNumber + inputAmountNumber;
    // console.log(currentBalance);

    document.getElementById('account-balance').innerText = currentBalance;

  }
  else {
    alert('somthing is wrong! try again');
  }

})