var elemenDenganID = document.getElementById("judul");

elemenDenganID.innerHTML = "iyeu teh ngarana japaskrip";
var elemenTagP = document.getElementsByTagName("p");

for (var i = 0; i < elemenTagP.length; i++) {
    elemenTagP[i].innerHTML = "naon nu dimaksut japaskrip?";
}
var elemenDenganClass = document.getElementsByClassName("konten");

for (var i = 0; i < elemenDenganClass.length; i++) {
    elemenDenganClass[i].innerHTML = "tah iyeu tah ngarana japaskrip teh kos kiyeu";
}
