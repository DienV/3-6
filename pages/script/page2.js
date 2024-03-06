document.addEventListener('DOMContentLoaded', function() {
    const prevPageButton = document.getElementById('prevPage2');
    const nextPageButton = document.getElementById('nextPage2');
    const form = document.getElementById('multipleChoiceForm');

    prevPageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút
        window.location.href = 'page1.html'; // Thay đổi URL này theo trang bạn muốn chuyển đến
    });

    nextPageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

        // Kiểm tra xem người dùng đã chọn đáp án cho tất cả các câu hỏi
        const inputs = form.querySelectorAll('input[type="radio"]');
        let allQuestionsAnswered = true;

        inputs.forEach(input => {
            if (!input.checked) {
                allQuestionsAnswered = false;
            }
        });

        if (allQuestionsAnswered) {
            // Chuyển đến trang tiếp theo
            window.location.href = 'page3.html'; // Thay đổi URL này theo trang bạn muốn chuyển đến
        } else {
            alert('Vui lòng chọn đáp án cho tất cả các câu hỏi.');
        }
    });
});