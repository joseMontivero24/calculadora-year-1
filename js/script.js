
const resetearProyect = document.querySelector('#reset-btn');
const fechaInput = document.querySelector('#date');
const mesInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');


resetearProyect.addEventListener('click', () =>{// evento para el btn reset
    reset();
    
})

fechaInput.addEventListener('input', function(){// validar fecha
    const fecha = parseInt(this.value);
    if (isNaN(fecha) || fecha < 1 || fecha > 31) {
        this.classList.add('invalido');

    }else{
        this.classList.remove('invalido');
    }
});

mesInput.addEventListener('input', function(){// validar mes
    const mes = parseInt(this.value);
    if (isNaN(mes) || mes < 1 || mes > 12) {
        this.classList.add('invalido');
        
    }else{
        this.classList.remove('invalido');
    }
});

yearInput.addEventListener('input', function(){// validar year
    const year = parseInt(this.value);
    if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        this.classList.add('invalido');
        
    }else{
        this.classList.remove('invalido');
    }
});

function reset() { // para resetear cada input
    document.querySelector('#date').value = '';
    document.querySelector('#month').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#age').innerHTML = '';
}


function age() {
    const fecha = document.querySelector('#date').value;
    const mes = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;

    let date = new Date();
    let fechaDos = date.getDate();
    let mesDos = 1 + date.getMonth();
    let yearDos = date.getFullYear();

    const arrMes =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (fecha > fechaDos) {
        fechaDos = fechaDos + arrMes[mesDos - 1];
        mesDos = mesDos - 1
    }

    if (mes > mesDos) {
        mesDos = mesDos + 12;
        yearDos = yearDos - 1;
    }

    let f = fechaDos - fecha;
    let m = mesDos - mes;
    let a = yearDos - year;

    const resultado = document.querySelector('#age');
    resultado.innerHTML = `
        Tu edad es de ${a} años con ${m} meses y ${f} días
    
    
    `;

}
