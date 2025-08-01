const startDate = new Date("2025-06-12"); // Ganti dengan tanggal jadian kalian
const today = new Date();
const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("daysTogether").innerText = daysTogether;

function nextPage() {
  switchPage('page1', 'page2');
}

function acceptOpen() {
  switchPage('page2', 'page3');
}

function refuseOpen() {
  alert("Yakin? Kamu nggak bisa lihat ucapan manisnya 😢");
}

function replay() {
  switchPage('page3', 'page3');
  alert("Aku sayang kamu 💕");
}

function switchPage(from, to) {
  document.getElementById(from).classList.remove("active");
  document.getElementById(to).classList.add("active");
}
