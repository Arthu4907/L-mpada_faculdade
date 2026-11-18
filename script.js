
let ligada = false;

function ligarDesligar() {
    const lampada = document.getElementById("lampada");

    ligada = !ligada;

    if (ligada) {
        lampada.innerHTML = "💡";
        document.body.classList.add("acesa");
    } else {
        lampada.innerHTML = "⚫";
        document.body.classList.remove("acesa");
    }
}
