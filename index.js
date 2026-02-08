let count_n = localStorage.getItem("count_n")
  ? Number(localStorage.getItem("count_n"))
  : 0;
//let count_n = 0;
let transform = 1;
function moveNo() {
  const noButton = document.getElementById("no");
  const yesButton = document.getElementById("yes");

  localStorage.setItem("count_n", count_n);
  count_n += 1;
  document.getElementById("cntlabel").innerHTML = count_n;

  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
  
  noButton.addEventListener("mouseover",() => {
    transform += 0.05;
  yesButton.style.transform = `scale(${transform})`;
  })
}

let count_hg = localStorage.getItem("count_hg")
  ? Number(localStorage.getItem("count_hg"))
  : 0;
//let count_hg = 0;
function hugCount() {
  localStorage.setItem("count_hg", count_hg);
  count_hg += 1;
  document.getElementById("cntlabel").innerHTML = count_hg;
}

let count_t = localStorage.getItem("plushhie")
  ? Number(localStorage.getItem("plushhie"))
  : 0;
//let count_t = 0;
function tedYes() {
  localStorage.setItem("plushhie", count_t);
  count_t += 1;
  document.getElementById("ted").innerHTML = count_t;
}

const btn_r = document.getElementById("rose");
const btn_p = document.getElementById("propose");
const btn_c = document.getElementById("choco");
const btn_t = document.getElementById("ted");
const btn_pr = document.getElementById("pro");
const btn_h = document.getElementById("hug");
const btn_k = document.getElementById("kiss");
const btn_v = document.getElementById("Dday");

btn_r.disabled = true;
btn_p.disabled = true;
btn_c.disabled = true;
btn_t.disabled = true;
btn_pr.disabled = true;
btn_h.disabled = true;
btn_k.disabled = true;
btn_v.disabled = true;

function checkDaysAndEnableButton() {
  const now = new Date();
  const valentinesDay = new Date(now.getFullYear(), 1, 14);

  const diff = valentinesDay - now;
  const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;

  if (daysLeft < 8) {
    btn_r.disabled = false;
  }
  if (daysLeft < 7) {
    btn_p.disabled = false;
  }
  if (daysLeft < 6) {
    btn_c.disabled = false;
  }
  if (daysLeft < 5) {
    btn_t.disabled = false;
  }
  if (daysLeft < 4) {
    btn_pr.disabled = false;
  }
  if (daysLeft < 3) {
    btn_h.disabled = false;
  }
  if (daysLeft < 2) {
    btn_k.disabled = false;
  }
  if (daysLeft < 1) {
    btn_v.disabled = false;
  }
}
checkDaysAndEnableButton();
setInterval(checkDaysAndEnableButton, 1000);



