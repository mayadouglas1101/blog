(() => {
  const KEY = "AMZNBLYOKCQXJDRWIESVHGTFUP";
  const target = "DECRYPTING...";
  const el = document.getElementById("decrypt-text");
  const loader = document.getElementById("decrypt-loader");
  if (!el || !loader) return;

  const letters = target.split("");
  const lockTime = letters.map((ch, i) => (ch === " " || ch === "." ? 0 : 250 + i * 180));

  el.textContent = "";
  const spans = letters.map((ch) => {
    const s = document.createElement("span");
    s.className = "dchar";
    s.textContent = ch;
    el.appendChild(s);
    return s;
  });

  const start = performance.now();
  const randomChar = () => KEY[Math.floor(Math.random() * KEY.length)];

  function frame(now) {
    const elapsed = now - start;
    let allLocked = true;
    for (let i = 0; i < letters.length; i++) {
      const ch = letters[i];
      const span = spans[i];
      if (ch === " " || ch === ".") continue;

      if (elapsed >= lockTime[i]) {
        if (!span.classList.contains("locked")) {
          span.textContent = ch;
          span.style.transform = "";
          span.classList.add("locked");
        }
      } else {
        span.textContent = randomChar();
        span.style.transform = `translateY(${(Math.random() - 0.5) * 6}px)`;
        allLocked = false;
      }
    }
    if (!allLocked) {
      requestAnimationFrame(frame);
    } else {
      setTimeout(() => loader.classList.add("hidden"), 600);
    }
  }

  requestAnimationFrame(frame);
})();
