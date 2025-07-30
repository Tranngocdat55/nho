document.getElementById('file-input').addEventListener('change', function(e){
  const file = e.target.files[0];
  if (!file) return;
  const img = document.getElementById('background-image');
  const reader = new FileReader();
  reader.onload = evt => img.src = evt.target.result;
  reader.readAsDataURL(file);
});

document.getElementById('gratitude-form').addEventListener('submit', function(e){
  e.preventDefault();
  // Chuẩn bị tạo ảnh tổng hợp từ dữ liệu form
  alert('Tên: ' + this.name.value +
        '\nChức vụ: ' + this.position.value +
        '\nLời tri ân: ' + this.message.value +
        '\n\nTính năng tạo ảnh tải file có thể được thêm vào sau.');
});
