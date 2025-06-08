const CYOA = {
  start: {
    text: "hi im maya (allegedly)",
    replies: [
      {text: "no", id: "2"},
      {text: "help", id: "helproute"},
      {text: "yes", id: "awesome"}
    ]
  },
  2: {
    text: "aaaaaaaaaaaaaa",
    replies: [
      {text: "no", id: "start"},
    ]
  },
  helproute: {
    text: "im calling 911",
    replies: [
      {text: "ok", id: "start"},
      {text: "yes", id: "awesome"}
    ]
  },
  awesome: {
    text: "hell yeah",
    replies: [
      {text: "yes", id: "awesome"}
    ]
  },
}

function dialogue(id) {
  console.log(id);
  const replyContainer = document.getElementById("replies");

  for(const reply of replyContainer.children) {
    if(reply.className == "bubble") {
      reply.className = "bubble hide";
    }
    reply.onclick = undefined;
  }

  setTimeout(() => {
    const container = document.getElementById("mtexts");
    const d = CYOA[id];
    const mspeech = document.createElement("DIV");
    mspeech.innerHTML = d.text;
    mspeech.className = "mspeech offscreen";
    container.appendChild(mspeech);

    requestAnimationFrame(() => {
      mspeech.className = "mspeech";
    });

    replyContainer.style.transition = "none";
    replyContainer.className = "hide";
    replyContainer.offsetHeight;
    replyContainer.style.transition = "";


    replyContainer.innerHTML = "";
    for(const reply of (d.replies ?? [])) {
      const bubble = document.createElement("DIV");
      bubble.innerHTML = reply.text;
      let localText = reply.id;
      bubble.onclick = () => {
        bubble.className = "bubble clicked";
        dialogue(localText);
        setTimeout(() => {
          bubble.className = "bubble clicked hide";
        }, 400);
      };
      bubble.ontouchstart = bubble.onclick;

      bubble.className = "bubble";
      replyContainer.appendChild(bubble);
    }

    setTimeout(() => {
      replyContainer.className = "";
    }, 400);
  }, 800);
}

setTimeout(() => {
  document.getElementById("popup").className = "hidden";
  dialogue("start");
}, 1000);
