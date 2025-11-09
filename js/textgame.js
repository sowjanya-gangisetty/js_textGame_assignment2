

const animals = ["lion", "zebra", "tiger", "panda", "monkey", "giraffe", "elephant"];
const fruits = ["apple", "banana", "cherry", "grape", "mango", "orange", "peach"];
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "black"];


const categoryNames = ["animals", "fruits", "colors"];
const categoryLists = [animals, fruits, colors];


const randomIndex = Math.floor(Math.random() * categoryLists.length);
const randomCategory = categoryNames[randomIndex]; // Pick a random category and word
const wordsFromSelectedCategory = categoryLists[randomIndex];
const secretWord = wordsFromSelectedCategory[Math.floor(Math.random() * wordsFromSelectedCategory.length)];

const MAX_TRIES = 10;

alert(`Welcome to the Mystery Word Guessing Game!
The computer has secretly chosen a word from one of these categories:
😺 Animals, 🍎 Fruits, or 🫟 Colors

Your choosen category for this round is: "${randomCategory.toUpperCase()}"

Rules:
- Guess one letter at a time.
- You have 🎲 ${MAX_TRIES} tries. Each wrong guess reduces your chance.
- Enter a single letter (a-z) each time.

Good luck! `);


let guessedLetters = [];
let remainingTries = MAX_TRIES;
let gameOver = false;
let userCancelled = false;


while (!gameOver) {
    // displaying the  word
    let displayWord = "";
    for (let i = 0; i < secretWord.length; i++) {
        const letter = secretWord[i];
        if (guessedLetters.includes(letter)) {
            displayWord += letter;
        } else {
            displayWord += "_ ";
        }
    }
    console.log(`displayword ${displayWord}`)

    let guess = prompt(
        `Category: ${randomCategory}
        Word: ${displayWord}
        Guessed letters: ${guessedLetters.join(", ")}
        🎲 Tries left: ${remainingTries}

        Enter a letter:`);

    if (guess === null) {
        alert(` 😐 Game canceled. See you next time! `);
        userCancelled = true;
        break;
    }

    guess = guess.toLowerCase();
    console.log(guess)


    if (guess.length !== 1 || !guess.match(/^[a-z]$/)) {
        alert(`Please enter only one valid letter (a-z).`);
        continue;
    }

    if (guessedLetters.includes(guess)) {
        alert(`You already guessed that letter.`);
        continue;
    }

    guessedLetters.push(guess);
    console.log(`guessedLetters : ${guessedLetters}`)

    // Checking if the guessed word is in the secret word list
    if (secretWord.indexOf(guess) !== -1) {
        alert(`👍 Correct guess!`);
    } else {
        remainingTries--;
        alert("👎 Wrong guess!");
    }
    console.log(secretWord.indexOf(guess))

    let allFound = true;
    for (let i = 0; i < secretWord.length; i++) {
        if (!guessedLetters.includes(secretWord[i])) {
            allFound = false;
            break;
        }
    }

    if (allFound) {
        alert(`🎉🥳🎊 You GUESSED it! The secret word is "${secretWord.toUpperCase()}". 
                Thanks for playing! `);
        gameOver = true;
    }

    if (remainingTries <= 0) {
        alert(`🥺 You LOST! The secret word is "${secretWord.toUpperCase()}" `);
        gameOver = true;
    }
}




