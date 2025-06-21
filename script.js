const CYOA = {
  realstart: {
    text: "hi! my name's maya. this is a blog about the human factor of cybersecurity.",
    replies: [
      {text: "hiya miya", id: "start"},
      {text: "i would like to skip this dialogue", id: "skip"},
    ]
  },
  skip: {
    // go to landing
  },
  start: {
    text: "now that you're acquainted, what are you interested in?",
    replies: [
      {text: "artificial intelligence", id: "ai"},
      {text: "cybersecurity (general)", id: "cyber"},
      {text: "humanitarian/mission-based efforts", id: "human"},
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
      {text: "okay", id: "skip"}
    ]
  },
  terminator: {
    text: "i fell asleep halfway through that movie. for ai though - i guess we'll see?",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  stats: {
    text: "but isn't human behavior largely just reacting to data input? that'll be explored on my blog!",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  aifan: {
    text: "i'm a top 0.1% ChatGPT user. can we be friends?",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  powerandabuse: {
    text: "i completely agree with this take! with great power comes great responsibility - and it's in our hands.",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  money: {
    text: "doesn't hurt, right?", 
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  hacker: {
    text: "i hope the good kind! breaking things is fun, and it doesn't always require breaking the law.",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  protect: {
    text: "you know that roman guy that's associated with that orange-flavored dairy queen beverage? thfhkvbnhz1101@nthps.jvt. you should also check out osint",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  patriot: {
    text: "mad respect! you should start checking out osint - people like us crowdsource intelligence gathering. pretty neat, right?",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  vuln: {
    text: "you'll love this blog <3",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  misinfo: {
    text: "you know what's more important than some stakeholder's wallet? democracy! ",
    replies: [
      {text: "okay", id: "skip"}
    ]
  },
  civilrights: {
    text: "tech in its purest form is profit-neutral, feminist, and has the potential to progress humanity. and to understand that, is the beginning of a movement.",
    replies: [
      {text: "okay", id: "skip"}
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
  dialogue("realstart");
}, 1000);
