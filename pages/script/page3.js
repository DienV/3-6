document.addEventListener('DOMContentLoaded', function() {
    const prevPageButton = document.getElementById('prevPage3');
    const nextPageButton = document.getElementById('nextPage3');
    const form = document.getElementById('multipleAnswerForm');

    prevPageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút
        window.location.href = 'page2.html'; // Thay đổi URL này theo trang bạn muốn chuyển đến
    });

    nextPageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

        // Kiểm tra xem người dùng đã chọn đáp án cho tất cả các câu hỏi
        const inputs = form.querySelectorAll('input[type="checkbox"]');
        let allQuestionsAnswered = true;

        inputs.forEach(input => {
            if (!input.checked) {
                allQuestionsAnswered = false;
            }
        });

        if (allQuestionsAnswered) {
            // Chuyển đến trang tiếp theo
            window.location.href = 'page4.html'; // Thay đổi URL này theo trang bạn muốn chuyển đến
        } else {
            alert('Vui lòng chọn đáp án cho tất cả các câu hỏi.');
        }
    });
});