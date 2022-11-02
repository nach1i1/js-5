var array = [];
function recopilaciones(){
    var recopilacion = document.querySelector('#input');
    var recopilado = recopilacion.value;  
    array.push(recopilado);
    recopilacion.value = '';
    
    }


function mostrar(){
console.log(array);
}