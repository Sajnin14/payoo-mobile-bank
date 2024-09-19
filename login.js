document.getElementById('button-login').addEventListener('click', function(event){
  event.preventDefault();

  const mobileNumber = document.getElementById('mobile-number').value;
  console.log(mobileNumber);

  const pinNumber = document.getElementById('pin-number').value;
  console.log(pinNumber);
})