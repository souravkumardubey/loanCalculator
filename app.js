document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){

    console.log('calculation');

    const UIamount = document.getElementById('amount');

    const interest = document.getElementById('interest');

    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');

    const totalPayment = document.getElementById('total-payment');

    const totalInterest = document.getElementById('total-interest');



    const principal = parseFloat('amount.value');

    const calculatedIntrest = parseFloat(interest.value)/100/12;

    const calculatedPayments = parseFloat(years.value) * 12;


    const x = Math.pow(1+ calculatedIntrest + calculatedPayments);


    e.preventDefaut();
}