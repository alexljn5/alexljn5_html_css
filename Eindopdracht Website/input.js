function checkInput() {
    const inputField = document.getElementById('userInput');
    const correctWord = 'pingas';
    const userInput = inputField.value;

    if (userInput === correctWord) {
        // Redirect to the desired URL 
        window.location.href = 'youdidit.html';
    }
} 