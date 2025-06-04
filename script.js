const acciones = ['tocar', 'besar', 'acariciar', 'lamer', 'tu elijes', 'estimular'];
const partes = ['cuello', 'espalda', 'pechos', 'clitoris', 'pene', 'Tu elijes'];

function lanzarDados() {
    const accion = acciones[Math.floor(Math.random() * acciones.length)];
    const parte = partes[Math.floor(Math.random() * partes.length)];

    document.getElementById('dado1').textContent = accion;
    document.getElementById('dado2').textContent = parte;
}
