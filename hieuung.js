function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Kiểm tra thông tin đăng nhập
    // ... (thêm mã kiểm tra tài khoản, mật khẩu ở đây)
  
    // Nếu thông tin đúng, cho phép đăng nhập
    // Ngược lại, hiển thị thông báo lỗi
    if (username === "pankhongsuy@gmail.com" && password === "pankhongsuy") {
      return true;
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác!");
      return false;
    }
  }