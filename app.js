document.getElementById('btnSubmit').addEventListener('click', function() {
    const jewelryType = document.getElementById('select').value.trim();
    const weight = parseFloat(document.getElementById('weight').value);
    const price = parseFloat(document.getElementById('price').value);
    const interestRate = parseFloat(document.getElementById('interest').value);

    if (!jewelryType || isNaN(weight) || isNaN(price) || isNaN(interestRate) || weight <= 0 || price <= 0 || interestRate <= 0) {
        alert('Please fill out all fields correctly with positive values.');
        return;
    }

    let baseValue;
    if (jewelryType.toLowerCase() === "gold") {
        baseValue = weight * 70 / 100;
    } else if (jewelryType.toLowerCase() === "silver") {
        baseValue = weight * 50 / 100;
    } else {
        baseValue = weight * 80 / 100;
    }

    const totalPrice = baseValue * (price / 10);
    const interestToGive = totalPrice * interestRate / 100;

    const params = new URLSearchParams({
        jewelryType,
        weight,
        price,
        interestRate,
        totalPrice,
        interestToGive,
    });

    window.open(`bill.html?${params.toString()}`, 'Bill');
});
