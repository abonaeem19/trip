document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const familySize = localStorage.getItem('familySize');
    const destination = localStorage.getItem('destination');

    const confirmationSection = document.getElementById('confirmation-section');
    confirmationSection.innerHTML = `
        <p><strong>اسم المسافر:</strong> ${username}</p>
        <p><strong>عدد الأفراد:</strong> ${familySize}</p>
        <p><strong>الوجهة:</strong> ${destination}</p>
    `;

    document.getElementById('confirm-button').addEventListener('click', function() {
        alert('شكرا لاختياركم موقعنا! رحلة سعيدة');
        window.location.href = 'index.html';
    });
});
