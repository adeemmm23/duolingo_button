let i = 0;

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

// Randomly select and display a funny error message
const randomErrorMessage = () => {
  const randomIndex = Math.floor(Math.random() * internetErrorMessages.length);
  return internetErrorMessages[randomIndex];
};



async function clicked() {
  if (i != 0) {
    return;
  }
  document.getElementById("random").innerHTML = "‎";
  await fetch("https://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      typeWriter(data.activity);
    })
    .catch((err) => {
      console.log(err)
      typeWriter(randomErrorMessage())
    });
    
}

function typeWriter(text) {
  if (i < text.length) {
    document.getElementById("random").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30, text);
  } else {
    i = 0;
  }
}

// Starting function on page load
clicked();

// Listen to space key
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    clicked();
  }
}
);

// Track if user typed "awesome" anywhere
let awesome = "";

document.addEventListener("keypress", (event) => {
  const keyName = event.key;
  awesome += keyName;
  if (awesome.includes("awesome")) {
    randomColor();
    awesome = "";
  }
});

function getRandomColor() {
  const colors = ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomColor() {
  document.documentElement.style.setProperty('--primary-color', getRandomColor());
  setTimeout(randomColor, 1000);
}