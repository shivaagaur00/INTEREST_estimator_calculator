function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        jewelryType: params.get('jewelryType'),
        weight: params.get('weight'),
        price: params.get('price'),
        interestRate: params.get('interestRate'),
        totalPrice: params.get('totalPrice'),
        interestToGive: params.get('interestToGive')
    };
}
window.onload = function() {
    const params = getQueryParams();
    document.getElementById('jewelryType').textContent = params.jewelryType;
    document.getElementById('weight').textContent = params.weight;
    document.getElementById('price').textContent = params.price;
    document.getElementById('interestRate').textContent = params.interestRate;
    document.getElementById('totalPrice').textContent = params.totalPrice;
    document.getElementById('interestToGive').textContent = params.interestToGive;
};