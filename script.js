function calculerMarge(couts, vente) {
  return vente - couts;
}

document.getElementById("formCalc").addEventListener("submit", function(e) {
  e.preventDefault();

  const couts = parseFloat(document.getElementById("couts").value);
  const vente = parseFloat(document.getElementById("vente").value);

  const marge = calculerMarge(couts, vente);
  const resDiv = document.getElementById("resultat");

  resDiv.style.display = "block";

  if (marge > 0) {
    resDiv.textContent = `✅ Marge bénéficiaire : ${marge} CFA (Rentable)`;
    resDiv.style.background = "#e6ffed";
    resDiv.style.color = "#2e7d32";
  } else if (marge === 0) {
    resDiv.textContent = `⚖️ Marge nulle : ${marge} CFA (Équilibre)`;
    resDiv.style.background = "#fff8e1";
    resDiv.style.color = "#dee600ff";
  } else {
    resDiv.textContent = `❌ Marge négative : ${marge} CFA (Perte)`;
    resDiv.style.background = "#ffebee";
    resDiv.style.color = "#c62828";
  }
});
