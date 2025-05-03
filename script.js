
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "amalhassine" && pass === "amal123") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").textContent = "Identifiants incorrects.";
  }
}

async function togglePompe() {
  const res = await fetch("https://esp32-api-verceles.vercel.app/api/commandes", { method: "POST", body: JSON.stringify({ pompe: "toggle" }) });
  const txt = await res.text();
  alert("Pompe changée : " + txt);
}

async function refreshData() {
  try {
    const res = await fetch("https://esp32-api-verceles.vercel.app/api/data");
    const data = await res.json();
    document.getElementById("tempBox").innerText = "Température: " + data.temp + " °C";
    document.getElementById("humBox").innerText = "Humidité: " + data.hum + " %";
    document.getElementById("solBox").innerText = "Humidité du sol: " + data.sol + " %";
  } catch (e) {
    console.error("Erreur données", e);
  }
}
setInterval(refreshData, 10000);
refreshData();
