
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const hotPriceClass = document.querySelectorAll('.hot')
  hotPriceClass.forEach(el => {
    el.textContent += ' 🔥' ;
  })
});
