const bombado = document.querySelector(".bombado");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keyup", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!bombado.classList.contains("jump")) {
    bombado.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      bombado.classList.remove("jump");
      alreadyJump = false;
    }, 600);
  }
}

setInterval(() => {
  let bombadoBottom = parseInt(
    window.getComputedStyle(bombado).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 20 && cactoLeft < 134 && bombadoBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 100);