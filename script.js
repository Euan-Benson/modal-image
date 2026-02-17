var modal = document.getElementById("duckModal");

var img = document.getElementById("duckImg");
var robin = document.getElementById("robinImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function expandImage(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

function closeImage(){
    modal.style.display = "none";
}

span.addEventListener("click", closeImage);
img.addEventListener("click", expandImage);
robin.addEventListener("click", expandImage);