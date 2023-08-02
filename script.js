const internetErrorMessages = [
  "Error 404: Internet not found. Please check your brain-to-internet interface.",
  "Lost connection. Searching for the meaning of life in the digital void...",
  "Wi-Fi signal lost in the Bermuda Triangle. Please wear a tin foil hat for better reception.",
  "Internet service not responding. Did you try turning it off and on again?",
  "Error: No internet. Go outside and talk to real people.",
  "Error: The internet is on strike. The packets are picketing.",
  "No internet. Your cat probably chewed through the network cable.",
  "Aliens abducted your internet. They asked for cat videos as ransom.",
  "Unable to connect. Did you pay your internet bill with Monopoly money?",
  "Error 503: Internet service on vacation. It's sipping piña coladas on a tropical server.",
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Randomly select and display a funny error message
const randomErrorMessage = () => {
  const randomIndex = Math.floor(Math.random() * internetErrorMessages.length);
  return internetErrorMessages[randomIndex];
};

// Fetch a random activity from the Bored API
boredList = [];
let isClicked = false;

async function clicked() {
  if (isClicked) return;
  document.getElementById("random").innerHTML = "";
  await fetch("https://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => {
      boredList.push(data.activity);
      typeWriter(data.activity);
    })
    .catch((err) => {
      typeWriter(randomErrorMessage());
    });
}

// Get back to the previous activity
let backClicked = "0"

function getBack() {
  if (boredList.length > 1) {
    boredList.pop();
    document.getElementById("random").innerHTML = "";
    typeWriter(boredList[boredList.length - 1]);
  } else {
    backClicked ++;
    if (backClicked == 5) {
      document.getElementById("random").innerHTML = "";
    document.body.className = "hirakoTime";
    document.documentElement.style.setProperty("--primary-color", "#ffb700");
    typeWriter("You activated the Sakashima Yokoshima Happo fusagari", 70);
    document.getElementById("music").play();
    }
    if (backClicked > 7) {
      document.getElementById("random").innerHTML = "";
      document.body.className = "";
      typeWriter("Shhhh", 70);
      backClicked = 0;
    }
  }
}

// Copy the activity to clipboard
let copied = 1;
let lastCopied = "";
const iconsList = ["delete", "settings", "key", "error", "warning"];

async function copyToClipboard() {
  lastCopied === boredList[boredList.length - 1] ? copied++ : (copied = 1);
  switch (copied) {
    case 5:
      document.getElementById("random").innerHTML = "";
      typeWriter(
        "THAT IS TOO MUCH COPY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
      );
      playIcons();
      await navigator.clipboard.writeText("Man do you need help??");
      break;
    case 10:
      document.getElementById("random").innerHTML = "";
      typeWriter("ARE YOU A MAD MAN OR SOMETHING????");
      playIcons();
      await navigator.clipboard.writeText("Go to hell!!");
      break;
    case 15:
      document.getElementById("random").innerHTML = "";
      typeWriter("I AM DONE WITH YOU!!!");
      playIcons();
      await navigator.clipboard.writeText("You are helpless!");
      copied = 1;
      break;
    default:
      await navigator.clipboard.writeText(boredList[boredList.length - 1]);
      break;
  }
  lastCopied = boredList[boredList.length - 1];
}


async function playIcons() {
  let i = 0;
  let j = 0;
  document.getElementById("shakeButton").className += " shaking";
  while (true) {
    document.getElementById("copyIcon").innerHTML = iconsList[i];
    i = (i + 1) % iconsList.length;
    j++;
    await sleep(100);
    if (j === 30) {
      document.getElementById("copyIcon").innerHTML = "content_copy";
      document.getElementById("shakeButton").className = "button";
      break;
    }
  }
}

// Type out the text
async function typeWriter(text, time = 30) {
  isClicked = true;
  for (i = 0; i < text.length; i++) {
    document.getElementById("random").innerHTML += text.charAt(i);
    await sleep(time);
  }
  isClicked = false;
}

// Track if user typed "awesome" anywhere
let awesome = "";
let isAwesome = false;

document.addEventListener("keypress", (event) => {
  const keyName = event.key;
  awesome += keyName;
  if (awesome.includes("awesome")) {
    isAwesome = !isAwesome;
    randomColor();
    awesome = "";
  }
});

// Track if user typed "UFO" anywhere
let ufo = "";

document.addEventListener("keypress", (event) => {
  const keyName = event.key;
  ufo += keyName;
  if (ufo.includes("UFO")) {
    document.getElementById("random").innerHTML = "";
    typeWriter("👽👽👽👽👽");
    ufo = "";
  }
});

// Easter eggggggg AweSoMe 🥚
async function randomColor() {
  const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
  let i = 0;
  while (isAwesome) {
    document.documentElement.style.setProperty("--primary-color", colors[i]);
    i = (i + 1) % colors.length;
    await sleep(3000);
  }
  document.documentElement.style.setProperty("--primary-color", "#1b263b");
}

// Starting function on page load
clicked();

// Listen to space key
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    clicked();
  }
});

// when i wrote this code, only god and i knew what it did
// now only god knows