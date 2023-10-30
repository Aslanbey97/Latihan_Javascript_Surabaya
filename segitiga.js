function hitungKelilingSegitiga(a, b, c) {
    var keliling = a + b + c;
    return keliling;
}

var sisiA = 4;
var sisiB = 5;
var sisiC = 6;
var kelilingSegitiga = hitungKelilingSegitiga(sisiA, sisiB, sisiC);
console.log("Keliling segitiga dengan sisi", sisiA, sisiB, "dan", sisiC, "adalah", kelilingSegitiga);
