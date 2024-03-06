document.addEventListener('DOMContentLoaded', function() {
    const userInfoForm = document.getElementById('userInfoForm');

    userInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = userInfoForm.fullName.value;
        const birthDate = userInfoForm.birthDate.value;
        const identityCard = userInfoForm.identityCard.value;
        const address = userInfoForm.address.value;

        // Xử lý dữ liệu tại đây
        console.log(`Họ và Tên: ${fullName}`);
        console.log(`Ngày tháng năm sinh: ${birthDate}`);
        console.log(`CCCD: ${identityCard}`);
        console.log(`Địa chỉ: ${address}`);
    });
});

