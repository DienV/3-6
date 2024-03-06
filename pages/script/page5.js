document.addEventListener('DOMContentLoaded', function() {
    var testResults = JSON.parse(localStorage.getItem('testResults'));
    if (testResults) {
        var resultsContainer = document.getElementById('testResults');
        testResults.forEach(function(result) {
            var resultElement = document.createElement('p');
            resultElement.textContent = result.join(': ');
            resultsContainer.appendChild(resultElement);
        });
    } else {
        alert('Không có kết quả kiểm tra nào được tìm thấy.');
    }
});