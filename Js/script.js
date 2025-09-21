const burg = document.getElementById('burg');
const cierre = document.getElementById('cierre')
const indice = document.getElementById('indice')
// console.log(indice);

burg.addEventListener('click', ()=> {
    burg.classList = ('offburg');
    cierre.classList = ('');
    // indice.style.display = 'flex';
    indice.style.transform = 'translateY(0%)';


})

cierre.addEventListener('click', ()=> {
    cierre.classList = ('offcierre');
    burg.classList = ('');
    indice.style.transform = 'translateY(-100%)';
})