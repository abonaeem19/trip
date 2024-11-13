document.addEventListener('DOMContentLoaded', function() {
    const destination = localStorage.getItem('destination');
    const transport = localStorage.getItem('transport');
    const resultsSection = document.getElementById('results-section');

    for (let i = 1; i <= 3; i++) {
        const tripOption = document.createElement('div');
        tripOption.classList.add('trip-option');

        const randomTime = `${Math.floor(Math.random() * 24)}:00`;
        const randomPrice = Math.floor(Math.random() * (650 - 150 + 1)) + 150;

        tripOption.innerHTML = `
            <p><strong>الوجهة:</strong> ${destination}</p>
            <p><strong>وسيلة النقل:</strong> ${transport}</p>
            <p><strong>الوقت:</strong> ${randomTime}</p>
            <p><strong>السعر:</strong> ${randomPrice} ريال</p>
            <button class="select-trip" data-price="${randomPrice}">اختر هذه الرحلة</button>
        `;

        resultsSection.appendChild(tripOption);
    }

    resultsSection.addEventListener('click', function(e) {
        if (e.target.classList.contains('select-trip')) {
            const selectedPrice = e.target.getAttribute('data-price');
            const confirmation = confirm(`هل تريد تأكيد الرحلة بسعر ${selectedPrice} ريال؟`);
            if (confirmation) {
                localStorage.setItem('selectedPrice', selectedPrice);
                window.location.href = 'confirmation.html';
            }
        }
    });
});
