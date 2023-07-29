let i = 0;
clicked();

async function clicked() {
  if (i != 0) {
    return;
  }
  await fetch("https://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("random").innerHTML = "";
      console.log(data);
      typeWriter(data.activity);
    })
    .catch((err) => console.log(err));
}

function typeWriter(text) {
  if (i < text.length) {
    document.getElementById("random").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50, text);
  } else {
    i = 0;
  }
}
