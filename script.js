function calculateTotal() {
    var bananaCueQty = parseInt(document.getElementById("banana-cue-quantity").value);
    var haloHaloQty = parseInt(document.getElementById("halo-halo-quantity").value);
    var maisConYeloQty = parseInt(document.getElementById("mais-con-yelo-quantity").value);
    var turonQty = parseInt(document.getElementById("turon-quantity").value);

    var total = (bananaCueQty * 15) + (haloHaloQty * 20) + (maisConYeloQty * 25) + (turonQty * 10);
    document.getElementById("total-bill").textContent = "₱" + total.toFixed(2);
}

function calculateChange() {
    var totalBill = parseFloat(document.getElementById("total-bill").textContent.substr(1));
    var cashAmount = parseFloat(document.getElementById("cash-amount").value);
    var changeDue = cashAmount - totalBill;
    document.getElementById("change-due").textContent = "₱" + changeDue.toFixed(2);
}
