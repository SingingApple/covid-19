const collection = document.querySelector("#random");
const quotes = [
  "If you have any queries, reach out to your district administration or doctors!",
  "Lockdown means LOCKDOWN! Avoid going out unless absolutely necessary. Stay safe!",
  "Going out to buy essentials? Social Distancing is KEY! Maintain 2 metres distance between each other in the line.",
  "Help the medical fraternity by staying at home!",
  "Panic mode : OFF! ❌ ESSENTIALS ARE ON! ✔️",
  "Be a true Indian. Show compassion. Be considerate. Help those in need. We will get through this!",
  "Don't Hoard groceries and essentials. Please ensure that people who are in need don't face a shortage because of you!",
  "Be considerate : While buying essentials remember : You need to share with 130 Crore Others!"
];
setInterval(() => {
  const rand = Math.floor(Math.random() * (7 - 0)) + 0;
  collection.textContent = quotes[rand];
}, 5000);
