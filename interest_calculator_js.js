document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("calculate-btn").addEventListener('click', function() {
        const principal = parseFloat(document.getElementById("principal").value.trim());
        const interestRate = parseFloat(document.getElementById("interest-input").value.trim());
        const date = new Date(document.getElementById("date-input").value);

        if (isNaN(principal) || isNaN(interestRate) || principal <= 0 || interestRate <= 0) {
            alert('Please fill out all fields correctly with positive values.');
            return;
        }

        const interestToGive = (principal * interestRate) / 100;

        const today = new Date();
        const timeDifference = today.getTime() - date.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        const totalInterestAmount = (daysDifference * interestToGive) / 30;

        const params = new URLSearchParams();
        params.append('principal', principal);
        params.append('interestRate', interestRate);
        params.append('date', date.toISOString());
        params.append('interestToGive', totalInterestAmount);
        params.append('totalPrice', principal + totalInterestAmount);

        window.open(`billInterest.html?${params.toString()}`, 'Bill');
    });
});
