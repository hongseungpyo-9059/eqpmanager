// 페이지 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function () {
  // 글자 하나씩 나타나는 애니메이션
  const h1 = document.querySelector('h1');
  h1.style.opacity = '0';
  h1.style.transform = 'translateY(20px)';
  h1.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

  setTimeout(function () {
    h1.style.opacity = '1';
    h1.style.transform = 'translateY(0)';
  }, 200);
});