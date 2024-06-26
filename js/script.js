document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('contadorVisitas');
    const resetCounter = document.getElementById('btnReestablecer');
    let  contadorVisitas = localStorage.getItem('contadorVisitas');
    
    if (contadorVisitas === null) {
        contadorVisitas = 0;
    }

    contadorVisitas = parseInt(contadorVisitas) +1;

    localStorage.setItem('contadorVisitas', contadorVisitas);

    counter.textContent = contadorVisitas;
    
    resetCounter.addEventListener('click', () => {
        localStorage.setItem('contadorVisitas', 0);
        counter.textContent = 0;
    })
})
