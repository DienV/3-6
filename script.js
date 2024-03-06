document.addEventListener('DOMContentLoaded', function() {
    const userInfoForm = document.getElementById('userInfoForm');
    const submitBtn = document.getElementById('submitBtn'); // Giả sử bạn có một nút gửi với ID là 'submitBtn'

    userInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = userInfoForm.fullName.value;
        const birthDate = userInfoForm.birthDate.value;
        const identityCard = userInfoForm.identityCard.value;
        const address = userInfoForm.address.value;

        // Kiểm tra thông tin đã được điền đúng chưa
        // Đây chỉ là một ví dụ đơn giản, bạn có thể thêm các điều kiện kiểm tra phức tạp hơn
        if (fullName && birthDate && identityCard && address) {
            // Xử lý dữ liệu tại đây
            console.log(`Họ và Tên: ${fullName}`);
            console.log(`Ngày tháng năm sinh: ${birthDate}`);
            console.log(`CCCD: ${identityCard}`);
            console.log(`Địa chỉ: ${address}`);

            // Chuyển hướng đến trang page1.html
            window.location.href = 'https://dienv.github.io/3-6/pages/page1.html';
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    });

    // Sự kiện click cho nút gửi
    submitBtn.addEventListener('click', function() {
        userInfoForm.submit(); // Gửi form
    });
});