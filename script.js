const scroll = document.getElementsByClassName("scrollTop")[0];

scroll.addEventListener("click", () => {
  console.log("top");
  scrollToTop();
});

window.addEventListener("scroll", function () {
  scroll.classList.toggle("active", window.scrollY > 500);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};
