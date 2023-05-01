let index = 1;
//
document.getElementById("c1").addEventListener("click", (e) => {
  addin((index = 1));
});
document.getElementById("c2").addEventListener("click", (e) => {
  addin((index = 2));
});
document.getElementById("c3").addEventListener("click", (e) => {
  addin((index = 3));
});

// document.getElementById("c2").addEventListener("click", addin);
// document.getElementById("c3").addEventListener("click", addin);
function checkd() {
  let driver = window.scrollY / window.innerHeight;
  if (driver > 1) {
    const temp = document.querySelector(".navbar");
    const temp2 = document.querySelector(".logo");
    temp2.classList.remove("active");
    temp.style.background = "#f5f5f5";
  } else {
    const temp = document.querySelector(".navbar");
    temp.style.background = "white";
  }
  // console.log(driver);
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
function addin(n) {
  // const temp = document.getElementById(`c${x}`);
  for (let i = 1; i < 4; i++) {
    const temp = document.getElementById(`c${i}`);
    const temp2 = document.getElementById(`para${i}`);
    if (i == n) {
      temp.classList.add("active");
      temp2.classList.remove("inactive");
      temp2.classList.add("active");
      console.log(temp2);
    } else {
      temp.classList.remove("active");
      temp2.classList.remove("active");
      temp2.classList.add("inactive");
    }
  }
}
