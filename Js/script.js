const burg = document.getElementById('burg');
const cierre = document.getElementById('cierre');
const indice = document.getElementById('indice');
const websDialog = document.getElementById('webs-dialog');
const wrapper = document.querySelector('.wrapper');
const cards = document.querySelectorAll('.card');

cards.forEach((card => {
    card.addEventListener('click', function(){
        if(card.hasAttribute('onclick')){
            wrapper.children[0].attributes[0].nodeValue = card.children[1].attributes[0].nodeValue
        }
    })
}))

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


function mostrarDialog(){
    websDialog.showModal()
}
function cerrarDialog(){
    websDialog.close()
}

websDialog.addEventListener('click', (e) => {
    if(!wrapper.contains(e.target)){
        cerrarDialog();
    }
})
