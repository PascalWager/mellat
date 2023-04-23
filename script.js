function checkd() {
  let driver = window.scrollY / window.innerHeight;
  if (driver > 1) {
    const temp = document.querySelector(".navbar");
    const temp2 = document.querySelector(".logo");
    temp2.classList.remove("active");
    console.log("here");
    temp.style.background = "#f5f5f5";
  } else {
    const temp = document.querySelector(".navbar");
    temp.style.background = "white";
  }
  console.log(driver);
  window.requestAnimationFrame(checkd);
}
checkd();
// window.addEventListener("scroll",()=>{
//     let driver = window.scrollY;
//     if (driver>)
//     const temp2 = document.querySelector(".logo");
//     temp2.classList.toggle("active");
//     console.log("here");
// });
