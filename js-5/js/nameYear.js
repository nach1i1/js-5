var humans = [];
function recoHuman(){
    var inputName = document.querySelector('#inputName');
    var inputYear = document.querySelector('#inputYear');
    var human = {
        name:inputName.value,
        year:inputYear.value
    };
    humans.push(human);
    inputName.value='';
    inputYear.value='';

}
function print(){
    console.log(humans)
}