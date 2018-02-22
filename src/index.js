module.exports = function getZerosCount(number) {
  // your implementation
    var num_2=0,
        num_5=0;

    for (var i=5; i<=number; i+=5) {
        num_5++;
        var j=i;
        j/=5;
        while (j%5==0) {
            j/=5;
            num_5++;
        }
    }

    return num_5;
}
