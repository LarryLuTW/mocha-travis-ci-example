module.exports = function min(array){
    var min = array[0];
    for(var i=0 ; i<array.length ; i++){
        min = array[i] < min ? array[i] : min;
    }
    return min;
}
