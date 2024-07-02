function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        principal: parseFloat(params.get('principal')),
        interestRate: parseFloat(params.get('interestRate')),
        date: new Date(params.get('date')).toLocaleDateString('en-US', { 
            year: 'numeric', month: 'short', day: 'numeric', 
            hour: 'numeric', minute: 'numeric', second: 'numeric', 
            hour12: false 
        }),
        interestToGive: parseFloat(params.get('interestToGive')),
        totalPrice: parseFloat(params.get('totalPrice')),
    };
}

window.onload = function() {
    const params = getQueryParams();
    document.getElementById('principal').textContent = params.principal.toFixed(2);
    document.getElementById('interestRate').textContent = params.interestRate.toFixed(2);
    document.getElementById('date').textContent = params.date;
    document.getElementById('interestToGive').textContent = params.interestToGive.toFixed(2);
    document.getElementById('totalPrice').textContent = params.totalPrice.toFixed(2);
};
