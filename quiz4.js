var otomotifArray = ["Mobil", "Motor", "Truk", "Sepeda"];

var jadwalSholatArray = new Array("Subuh", "Dhuhr", "Ashar", "Maghrib", "Isya");

var daftarLainnya = [
  "Buku",
  "Pulpen",
  "Laptop",
  "Kamera",
  "Sepatu"
];

otomotifArray.push("Scooter");

jadwalSholatArray.splice(2, 1);

console.log("Otomotif:", otomotifArray);
console.log("Jadwal Sholat:", jadwalSholatArray);
console.log("Daftar Lainnya:", daftarLainnya);

var gabunganArray = otomotifArray.concat(daftarLainnya);
console.log("Gabungan Array:", gabunganArray);

gabunganArray.sort();
console.log("Array Gabungan yang Diurutkan:", gabunganArray);

var pencarian = "Laptop";
var posisi = gabunganArray.indexOf(pencarian);
if (posisi !== -1) {
  console.log(pencarian, "ditemukan di posisi", posisi);
} else {
  console.log(pencarian, "tidak ditemukan dalam array.");
}
