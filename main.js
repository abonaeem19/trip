document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const age = parseInt(document.getElementById('age').value);
        const familySize = parseInt(document.getElementById('familySize').value);

        if (!username || age <= 0 || familySize <= 0) {
            alert("يرجى ملء جميع الحقول بشكل صحيح.");
            return;
        }

        const destination = document.getElementById('destination').value;
        const transport = document.getElementById('transport').value;

        localStorage.setItem('username', username);
        localStorage.setItem('age', age);
        localStorage.setItem('familySize', familySize);
        localStorage.setItem('destination', destination);
        localStorage.setItem('transport', transport);

        window.location.href = 'results.html';
    });
});
