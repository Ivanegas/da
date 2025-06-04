const acciones = ['tocar', 'besar', 'acariciar', 'lamer', 'tu elijes', 'estimular', 'apretar'];
const partes = ['cuello', 'espalda', 'pechos', 'clitoris', 'pene', 'pies', 'abdomen', 'tu elijes', 'gluteos', 'piernas'];

let jugadores = [];
let turnoIndex = 0;

function iniciarJuego() {
  const j1 = document.getElementById('jugador1').value.trim();
  const j2 = document.getElementById('jugador2').value.trim();

  if (!j1 || !j2) {
    alert("Por favor, ingresa ambos nombres.");
    return;
  }

  jugadores = [j1, j2];
  turnoIndex = 0;

  document.querySelector(".players").style.display = "none";
  document.getElementById("juego").style.display = "block";
  actualizarTurno();
}

function actualizarTurno() {
  document.getElementById("turno").textContent = `Turno de: ${jugadores[turnoIndex]}`;
  document.getElementById("resultado").textContent = '';
  document.getElementById("dado1").textContent = 'Acción';
  document.getElementById("dado2").textContent = 'Parte';
}

function lanzarDados() {
  const accion = acciones[Math.floor(Math.random() * acciones.length)];
  const parte = partes[Math.floor(Math.random() * partes.length)];
  const jugadorActual = jugadores[turnoIndex];

  document.getElementById('dado1').textContent = accion;
  document.getElementById('dado2').textContent = parte;
  document.getElementById('resultado').textContent = `🔥 ${jugadorActual} debe recibir ${accion} el/la ${parte}`;

  turnoIndex = (turnoIndex + 1) % jugadores.length;
  setTimeout(actualizarTurno, 10000); // espera 3 segundos antes del siguiente turno
}
