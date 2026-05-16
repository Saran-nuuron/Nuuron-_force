document.addEventListener("DOMContentLoaded", () => {
  const bg = document.body;
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    p.className = "particle" + (i % 3 === 0 ? " b" : "");
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";
    p.style.animationDelay = -(Math.random() * 10) + "s";
    p.style.opacity = 0.25 + Math.random() * 0.6;
    p.style.position = "fixed";
    bg.appendChild(p);
  }
});
