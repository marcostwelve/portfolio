const backToTopBtn = document.getElementById("back_to_top");

window.addEventListener("scroll", function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > 1200) {
    backToTopBtn.style.display = "block";
  }
  else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
});