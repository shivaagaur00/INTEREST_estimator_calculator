document.getElementById('btnSubmit').addEventListener('click', function() {
    const purityTypeElement = document.querySelector('input[name="purity"]:checked');
    if (!purityTypeElement) {
        alert('Please select the purity type.');
        return;
    }

    const purityType = purityTypeElement.value.trim();
    let purityInputValue = document.getElementById('value').value.trim();
    const jewelryType = document.getElementById('select').value.trim();
    const weight = parseFloat(document.getElementById('weight').value);
    const price = parseFloat(document.getElementById('price').value);
    const interestRate = parseFloat(document.getElementById('interest').value);

    if (!jewelryType || isNaN(weight) || isNaN(price) || isNaN(interestRate) || weight <= 0 || price <= 0 || interestRate <= 0 || isNaN(purityInputValue) || purityInputValue <= 0) {
        alert('Please fill out all fields correctly with positive values.');
        return;
    }

    if (purityType === "carat") {
        purityInputValue = purityInputValue / 24 * 100;
    }

    const baseValue = weight * purityInputValue / 100;
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
