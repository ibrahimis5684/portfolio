//------------------------------------------------------------------------------------ text to binary
// Convert Button
document.getElementById('convertBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const binaryOutput = document.getElementById('binaryOutput');
    
    let binaryResult = '';
    for (let i = 0; i < textInput.length; i++) {
        let binaryChar = textInput[i].charCodeAt(0).toString(2);
        binaryResult += binaryChar.padStart(8, '0') + ' ';
    }
    
    binaryOutput.textContent = binaryResult.trim();
});

// Copy Button
document.getElementById('copyBtn').addEventListener('click', function() {
    const binaryOutput = document.getElementById('binaryOutput').textContent;
    const copyBtn = document.getElementById('copyBtn');
    
    // Create a temporary textarea to copy the text from
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = binaryOutput;
    document.body.appendChild(tempTextarea);
    
    // Select the text and copy it to the clipboard
    tempTextarea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
    
    // Change the button text and appearance to indicate copied
    copyBtn.innerHTML = 'Copied!';
    copyBtn.classList.add('copied');

    // Revert the button text after 1.5 seconds
    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-duotone fa-solid fa-clone"></i> Copy';
        copyBtn.classList.remove('copied');
    }, 1500);

});
// Reset Button for Text Input
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('textInput').value = '';
    document.getElementById('binaryOutput').textContent = '';
});

// Reset Button for Binary Output
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('binaryOutput').textContent = '';
});