clicked();

function clicked() {
  fetch("https://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("random").innerHTML = "";
      i = 0;
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
    }
}