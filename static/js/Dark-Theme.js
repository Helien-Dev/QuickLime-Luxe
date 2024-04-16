function toggleMode() {
    var body = document.body;
    body.classList.toggle('ligh-theme')
    body.classList.toggle('dark-theme')
}

var modoActual = body.classList.contains('light-theme') ? 'ligh' :
    localStorage.setItem('modo', modoActual)

   function cargarModoGuardado() {
    var modoGuardado = localStorage.getItem('modo');
    console.log('Modo guardado encontrado:', modoGuardado)
    if (modoGuardado === 'dark-theme') {
        toggleMode();
        console.log('cargando modo oscuro:')
    }
   }


document.addEventListener("DOMContentLoaded", cargarModoGuardado)