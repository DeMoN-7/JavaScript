var flag = 0;
var addo = document.querySelector("#addo");
var headd = document.querySelector("#stat");
var remo = document.querySelector("#remo");
addo.addEventListener("click", function () {
  headd.innerHTML = "Friends";
  flag = 1;
  headd.style.color = "green";

  
  
});

remo.addEventListener("click", function () {
  headd.innerHTML = "Stranger";
  headd.style.color = "red";
});
