function display(value) {
    document.getElementById('gamosaxuleba').value += value;
}

function yvelafrisWashla() {
    document.getElementById('gamosaxuleba').value = '';
}

function gamotvla() {
    var result = eval(document.getElementById('gamosaxuleba').value);
    document.getElementById('gamosaxuleba').value = result;
}

function calculatePercentage() {
    var result = eval(document.getElementById('gamosaxuleba').value + '/100');
    document.getElementById('gamosaxuleba').value = result;
}

function negate() {
    var value = document.getElementById('gamosaxuleba').value;
    value = (parseFloat(value) * -1).toString();
    document.getElementById('gamosaxuleba').value = value;
}
