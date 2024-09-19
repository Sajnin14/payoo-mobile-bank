document.getElementById('button-login').addEventListener('click', function(event){
  event.preventDefault();

  const mobileNumber = document.getElementById('mobile-number').value;
  // console.log(mobileNumber);

  const pinNumber = document.getElementById('pin-number').value;
  // console.log(pinNumber);


  if(mobileNumber === '4' && pinNumber === '1234'){
     window.location.href = './home.html';
  }
  else{
     alert('your mobile number or pin number is not correct');
  }



})