/*
  GANTI LINK DI BAWAH INI DENGAN AKUN RESMI UMROH FAMILY VIP.
  Contoh WhatsApp: https://wa.me/6281234567890
  Contoh Instagram: https://instagram.com/username
*/
const officialLinks = {
  whatsapp: "https://wa.me/6281234567890",
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
  facebook: "https://facebook.com/",
  maps: "https://maps.google.com/",
  packages: "https://wa.me/6281234567890?text=Halo%20Umroh%20Family%20VIP%2C%20saya%20ingin%20melihat%20paket%20dan%20jadwal%20umroh.",
  admin: "https://wa.me/6281234567890?text=Halo%20Admin%20Umroh%20Family%20VIP."
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const key = link.dataset.link;
  if (officialLinks[key]) link.href = officialLinks[key];
});
document.getElementById("year").textContent = new Date().getFullYear();
