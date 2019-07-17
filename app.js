document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){

    console.log('calculating...');

    const amount = document.getElementById('amount');

    const interest = document.getElementById('interest');

    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');

    const totalPayment = document.getElementById('total-payment');

    const totalInterest = document.getElementById('total-interest');



    const principal = parseFloat(amount.value);

    const calculatedIntrest = parseFloat(interest.value)/100/12;

    const calculatedPayments = parseFloat(years.value) * 12;


    const x = Math.pow(1+ calculatedIntrest , calculatedPayments);

    const monthly = (principal*x*calculatedIntrest)/(x-1);
    
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
    }else{
        showError('please check your numbers')
    }

    e.preventDefault();
}

function showError(error){

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    const errorDiv = document.createElement('div');

    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv,heading);

    setTimeout(clearError, 2000);

}

function clearError(){
    document.querySelector('.alert').remove();
}