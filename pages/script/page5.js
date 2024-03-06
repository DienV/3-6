document.addEventListener('DOMContentLoaded', function() {
    const resultsDiv = document.getElementById('results');

    // Lấy dữ liệu từ localStorage
    for (let i = 1; i <= 10; i++) {
        const answer = localStorage.getItem(`q${i}`);
        if (answer) {
            const result = document.createElement('p');
            result.textContent = `${i}: ${answer === 'true' ? 'Đúng' : 'Sai'}`;
            resultsDiv.appendChild(result);
        }
    }
});