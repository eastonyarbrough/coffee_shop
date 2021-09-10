let form = document.getElementById("myForm");
let total = document.getElementById("total");
let espQuantity = form.elements["espQuan"];
let espCost = document.getElementById("espPrice").value;
let latQuantity = form.elements["latQuan"];
let latCost = document.getElementById("latPrice").value;
let capQuantity = form.elements["capQuan"];
let capCost = document.getElementById("capPrice").value;
let macQuantity = form.elements["macQuan"];
let macCost = document.getElementById("macPrice").value;

form.addEventListener("change", function() {
    total.textContent = "$" + ((espQuantity.value * espCost) + (latQuantity.value * latCost) + (capQuantity.value * capCost) + (macQuantity.value * macCost)).toFixed(2);
});