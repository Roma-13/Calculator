function display(value) {
    document.getElementById('gamosaxuleba').value += value;
}

function yvelafrisWashla() {
    document.getElementById('gamosaxuleba').value='';
}

function gamotvla(){
    var result = eval(document.getElementById('gamosaxuleba').value);
    document.getElementById('gamosaxuleba').value = result;}