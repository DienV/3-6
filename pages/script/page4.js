// script.js
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('freeAnswerForm');
    var prevPageButton = document.getElementById('prevPage4');

    // Xử lý sự kiện submit form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

        // Thu thập dữ liệu form
        var formData = new FormData(form);

        // Xử lý dữ liệu form và lưu kết quả (đây là nơi bạn sẽ tính toán kết quả kiểm tra)
        // Đối với ví dụ, chúng tôi chỉ log dữ liệu form
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        // Chuyển hướng đến trang kết quả
        window.location.href = 'page5.html';
    });

    // Xử lý sự kiện click nút quay lại
    prevPageButton.addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của nút
        window.location.href = 'page3.html'; // Thay đổi URL này theo trang bạn muốn chuyển đến
    });

    // Kiểm tra xem người dùng đã nhập đáp án cho tất cả các câu hỏi
    // Trong trường hợp này, chúng ta chỉ kiểm tra xem có đáp án nào được nhập hay không
    // Bạn có thể thêm logic phức tạp hơn nếu cần
    const textareas = form.querySelectorAll('textarea');
    let allQuestionsAnswered = false;

    textareas.forEach(textarea => {
        if (textarea.value.trim() === '') {
            allQuestionsAnswered = true;
        }
    });

    if (!allQuestionsAnswered) {
        alert('Vui lòng nhập đáp án cho tất cả các câu hỏi.');
    }
});