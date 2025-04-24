
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("error-message");

  // تحقق من أن الحقول ليست فارغة
  if (name === "" || email === "" || message === "") {
    errorMsg.textContent = "الرجاء ملء جميع الحقول.";
    return false;
  }

  // تحقق من صحة البريد الإلكتروني باستخدام regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "الرجاء إدخال بريد إلكتروني صالح.";
    return false;
  }

  // إذا كل شيء صحيح
  errorMsg.textContent = "";
  alert("تم الإرسال بنجاح!");
  return true;}