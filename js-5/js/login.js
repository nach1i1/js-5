var humans =[];

function saveHumans(){
    var recoName = document.querySelector('#inputName');
    var recoYear = document.querySelector('#inputYear');
    var human = {
        name:recoName.value,
        year:recoYear.value
    };
    humans.push(human);
    recoName.value = '';
    recoYear.value = '';
};

function printTable(contentHumans){
    var table = document.querySelector('#table');
    var tableTop = `
    <table>
        <thead>
            <tr>
                <th>Nombre</th> <th>Edad</th>
            </tr>
        </thead>

        <tbody>
    `;
    for (let i= 0; i < contentHumans.length; i++) {
        tableTop=tableTop+`<tr><td class="name">`+contentHumans[i].name+`</td>`;
        tableTop=tableTop+`<td class="year">`+contentHumans[i].year+`</td></tr>`;
        };
        

        if(contentHumans==0){
            table.innerHTML=`<h1>No hay datos recopilados</h1>`
        }else{
            table.innerHTML=tableTop
        };
    var tableTop=tableTop+`

        </
    </table>

    `;
}

function print(){
    printTable(humans);
    console.log(humans);
}

function resetPrint(){
    var table = document.querySelector('#table')
    table.innerHTML=''
}