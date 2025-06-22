const CYOA = {
  realstart: {
    text: "hi! my name's maya. this is a blog about the human factor of cybersecurity.",
    replies: [
      {text: "hiya miya", id: "start"},
      {text: "i would like to skip this dialogue", id: "end"},
    ]
  },
  start: {
    text: "now that you're acquainted, what are you interested in?",
    replies: [
      {text: "artificial intelligence", id: "ai"},
      {text: "cybersecurity (general)", id: "cyber"},
      {text: "humanitarian / mission-based efforts", id: "human"},
      {text: "i'm none of the above.", id: "newb"}
    ]
  },
  ai: {
    text: "Very cool! What's your take on it?",
    replies: [
      {text: "terrible! have you seen the terminator?", id: "terminator"},
      {text: "it's all just statistics.", id: "stats"},
      {text: "i outsource my thinking to ChatGPT.", id: "aifan"},
      {text: "it's a powerful tool with potential for abuse.", id: "powerandabuse"}
    ]
  },
  cyber: {
    text: "how come? ",
    replies: [
      {text: "i want money.", id: "money"},
      {text: "i want to be a hacker.", id: "hacker"},
      {text: "i want to protect people!", id: "protect"}
    ]
  },
  human: {
    text: "what kind?",
    replies: [
      {text: "protecting our country's assets.", id: "patriot"},
      {text: "protecting vulnerable populations.", id: "vuln"},
      {text: "combating misinformation.", id: "misinfo"},
      {text: "civil rights tech!", id: "civilrights"}
    ]
  },
  newb: {
    text: "there's a seat here for everyone! no matter what your passions are - if you're reading this in the 21st century, this applies to you. check out my blog!",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  terminator: {
    text: "i fell asleep halfway through that movie. for ai though - i guess we'll see?",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  stats: {
    text: "but isn't human behavior largely just reacting to data input? that'll be explored on my blog!",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  aifan: {
    text: "i'm a top 0.1% ChatGPT user. can we be friends?",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  powerandabuse: {
    text: "i completely agree with this take! with great power comes great responsibility - and it's in our hands.",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  money: {
    text: "doesn't hurt, right?",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  hacker: {
    text: "i hope the good kind! breaking things is fun, and it doesn't always require breaking the law.",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  protect: {
    text: "you know that roman guy that's associated with that orange-flavored dairy queen beverage? thfhkvbnhz1101@nthps.jvt. you should also check out osint",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  patriot: {
    text: "mad respect! you should start checking out osint - people like us crowdsource intelligence gathering. pretty neat, right?",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  vuln: {
    text: "you'll love this blog <3",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  misinfo: {
    text: "you know what's more important than some stakeholder's wallet? democracy! ",
    replies: [
      {text: "okay", id: "end"}
    ]
  },
  civilrights: {
    text: "tech in its purest form is profit-neutral, feminist, and has the potential to progress humanity. and to understand that, is the beginning of a movement.",
    replies: [
      {text: "okay", id: "end"}
    ]
  },


}

function dialogue(id) {
  console.log(id);

  if(id == "end") {
    const scrollingbg = document.getElementById("scrollingbg");
    var sh, sw;
    scrollingbg.height = sh = window.innerHeight;
    scrollingbg.width = sw = window.innerWidth;
    var sctx = scrollingbg.getContext("2d");

    sctx.fillStyle = "#ff3cac";
    sctx.textBaseline = "hanging";
    sctx.font = '32px "Playfair Display"';

    function render() {
      requestAnimationFrame(render);
      sctx.fillStyle = "#111";
      sctx.fillRect(0, 0, sw, sh);

      const m = sctx.measureText("PROTECT PEOPLE NOT PROFITS \u2665\uFE0E ");
      for(var r = 0; r < Math.ceil(sh / 32); r++) {
        const rand = s => (Math.sin(s) * 10000 + 10000) % 1;
        const roff = (Date.now() * (0.1 + 0.2 * rand(r))) % m.width - m.width;
        if(Math.floor(mouseY / 32) == r) {
          sctx.fillStyle = "#ff3cac";
          sctx.fillRect(0, r * 32, sw, 32);
          sctx.fillStyle = "#111";
        } else {
          sctx.fillStyle = "#ff3cac";
        }
        // sctx.fillStyle = Math.floor(mouseY / 32) == r ? "#ff3cac" : "#222";
        // sctx.fillStyle = Math.floor(mouseY / 32) == r ? "#fff" : "#ff3cac";
        for(var c = 0; c <= Math.ceil(sw / m.width); c++) {
          sctx.fillText("PROTECT PEOPLE NOT PROFITS \u2665\uFE0E ", c * m.width + roff, r * 32);
        }
      }
    }
    render();

    var mouseY = 0;

    window.onmousemove = e => {
      mouseY = e.clientY + document.getElementById("landing").scrollTop;
    }

    setTimeout(() => {
      document.getElementById("intro").className = "hidden";
    }, 400);
    return;
  }

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
  dialogue("realstart");
}, 1000);
