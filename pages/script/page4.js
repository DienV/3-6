document.addEventListener('DOMContentLoaded', function() {
    const prevPageButton = document.getElementById('prevPage4');
    const form = document.getElementById('freeAnswerForm');

    prevPageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút
        window.location.href = 'page3.html'; // Thay đổi URL này theo trang bạn muốn chuyển đến
    });

    // Kiểm tra xem người dùng đã nhập đáp án cho tất cả các câu hỏi
    // Trong trường hợp này, chúng ta chỉ kiểm tra xem có đáp án nào được nhập hay không
    // Bạn có thể thêm logic phức tạp hơn nếu cần
    const textareas = form.querySelectorAll('textarea');
    let allQuestionsAnswered = true;

    textareas.forEach(textarea => {
        if (textarea.value.trim() === '') {
            allQuestionsAnswered = false;
        }
    });

    if (!allQuestionsAnswered) {
        alert('Vui lòng nhập đáp án cho tất cả các câu hỏi.');
    }
});