const formul = document.getElementById("form")
const secret_number = Math.floor(Math.random() * 200)

formul.addEventListener("submit", (event) => {
    event.preventDefault()

    let num_guess = document.getElementById("guess").value ?? -1
    let info_text = document.getElementById("guess").value

    //provisional --------------------------------------
    if (num_guess < secret_number) {
        document.getElementById("info").innerText = "The number is bigger"
    }
    else if (num_guess > secret_number) {
        document.getElementById("info").innerText = "The number is smaller"
    }
    // provisional --------------------------------------

    if (num_guess < 0 || num_guess > 200) {
        document.getElementById("info").innerText = "Guess a number between 0 and 200"
    }
    else if (num_guess == secret_number) {
        document.getElementById("info").innerText = "You won!"
    }

    document.getElementById("number").innerText = num_guess
    //document.getElementById("info").innerText = ""

    
})