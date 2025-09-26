const DOT_SIZE = 6;

const GREY = "#111";
const ACCENT = "#ff3cac";

const imgs = document.getElementsByClassName("filter");
for(const img of imgs) {
  img.style.opacity = 0;
  img.onload = () => {
    img.style.opacity = "";
    const sc = document.createElement("CANVAS");
    sc.width = Math.round(img.width * window.devicePixelRatio / DOT_SIZE);
    sc.height = Math.round(img.height * window.devicePixelRatio / DOT_SIZE);
    const sctx = sc.getContext("2d");
    sctx.imageSmoothingQuality = "high";
    sctx.drawImage(img, 0, 0, sc.width, sc.height);
    const data = sctx.getImageData(0, 0, sc.width, sc.height);

    const lc = document.createElement("CANVAS");
    lc.width = sc.width * DOT_SIZE;
    lc.height = sc.height * DOT_SIZE;
    const lctx = lc.getContext("2d");

    lctx.fillStyle = GREY;
    lctx.fillRect(0, 0, lc.width, lc.height);

    lctx.fillStyle = ACCENT;
    for(let y = 0; y < sc.height; y++) {
      for(let x = 0; x < sc.width; x++) {
        const i = 4 * (x + y * sc.width);
        let value = (data.data[i] + data.data[i + 1] + data.data[i + 2]) / 3 / 255;
        value = value;
        if(value > 0) {
          lctx.beginPath();
          lctx.arc(
            (x + .5) * DOT_SIZE,
            (y + .5) * DOT_SIZE,
            value * DOT_SIZE / Math.sqrt(2),
            0, Math.PI * 2
          );
          lctx.fill();
        }
      }
    }

    lc.id = img.id;
    lc.className = img.className;
    lc.style.setProperty("--cwidth", lc.width / window.devicePixelRatio + "px");
    img.replaceWith(lc);
  }
  if(img.complete) img.onload();
}
