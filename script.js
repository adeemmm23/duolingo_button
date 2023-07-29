// random words list
randomWords = ['Hello', 'World', 'JavaScript', 'HTML', 'CSS', 'Web', 'Programming', 'Computer', 'Science', 'Engineer', 'Software', 'Developer']

// function to be called when button is clicked
clicked = function(){
    // generate random number
    randomNum = Math.floor(Math.random() * 12)
    // append random word to random id
    random = document.getElementById('random').innerHTML = randomWords[randomNum]
}
