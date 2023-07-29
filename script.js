clicked = function(){
    fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        document.getElementById('random').innerHTML = data.activity;
    })
    .catch(err => console.log(err))
}