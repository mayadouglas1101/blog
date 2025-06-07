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
    text: "aaaaaaaaaaaaaa"
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
  const container = document.getElementById("ccenter");
  const d = CYOA[id];
  const mspeech = document.createElement("DIV");
  mspeech.innerHTML = d.text;
  mspeech.className = "mspeech";
  container.appendChild(mspeech);

  for(const reply of (d.replies ?? [])) {
    const bubble = document.createElement("DIV");
    bubble.innerHTML = reply.text;
    let localText = reply.id;
    bubble.onclick = () => dialogue(localText);
    bubble.className = "bubble";
    container.appendChild(bubble);
  }
}

setTimeout(() => {
  document.getElementById("popup").className = "hidden";
  dialogue("start");
}, 1000);
