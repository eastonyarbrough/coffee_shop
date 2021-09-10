let form = document.getElementById("myForm");
let total = document.getElementById("total");
let espQuantity = form.elements["espQuan"];
let latQuantity = form.elements["latQuan"];
let capQuantity = form.elements["capQuan"];
let macQuantity = form.elements["macQuan"];
let espCost = document.getElementById("espPrice").value;
let latCost = document.getElementById("latPrice").value;
let capCost = document.getElementById("capPrice").value;
let macCost = document.getElementById("macPrice").value;
let espTotal = espQuantity.value * espCost;
let latTotal = latQuantity.value * latCost;
let capTotal = capQuantity.value * capCost;
let macTotal = macQuantity.value * macCost;

form.addEventListener("submit", function(e) {
    e.preventDefault()
    total.textContent = "$" + (espTotal += latTotal += capTotal += macTotal);
});