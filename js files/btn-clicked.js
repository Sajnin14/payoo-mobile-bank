// when we clicked on add money button,
// add money form will be showed and
// cash out form will be hidden

document.getElementById('add-money-button').addEventListener('click', function(){

    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');

    
})


// when we clicked on cash out button,
// cash out form will be showed and
// add money form will be hidden

document.getElementById('cash-out-button').addEventListener('click', function(){

    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})