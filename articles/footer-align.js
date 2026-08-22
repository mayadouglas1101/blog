(() => {
  const footer = document.getElementById("site-footer");
  const border = document.getElementById("border");
  if (!footer || !border) return;

  function align() {
    const rect = border.getBoundingClientRect();
    const cs = getComputedStyle(border);
    const bl = parseFloat(cs.borderLeftWidth) || 0;
    const br = parseFloat(cs.borderRightWidth) || 0;
    footer.style.left = rect.left + bl + "px";
    footer.style.width = rect.width - bl - br + "px";
  }

  align();
  window.addEventListener("resize", align);
})();
