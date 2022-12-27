const graciasContainer = document.getElementById('gracias');
const calificanosContainer = document.getElementById('calificanos');
const calificacionMostrar = document.querySelector('.seleccion-calificacion__seleccion')

const score = document.querySelectorAll('input');
const submitBtn = document.querySelector('.btn');


submitBtn.addEventListener('click', (e) => {
    let scoreSelected = 0
    score.forEach((elemento) => {
        if (elemento.checked){
            scoreSelected = elemento.value
        }
    })
    calificanosContainer.classList.add('inactive');
    graciasContainer.classList.remove('inactive');
    calificacionMostrar.innerText = scoreSelected
    
    console.log(scoreSelected);
    // console.log(score[0].checked);
    e.preventDefault()
})
