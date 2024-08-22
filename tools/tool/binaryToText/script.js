//------------------------------------------------------------------------------------ binary to text
// Convert Button
document.getElementById('convertBtn').addEventListener('click', function() {
    const binaryInput = document.getElementById('binaryInput').value;
    const textOutput = document.getElementById('textOutput');

    let textResult = '';
    const binaryArray = binaryInput.split(' ');

    binaryArray.forEach(binaryChar => {
        if (binaryChar.length === 8) {
            textResult += String.fromCharCode(parseInt(binaryChar, 2));
        }
    });

    textOutput.textContent = textResult;
});

// Copy Button
document.getElementById('copyBtn').addEventListener('click', function() {
    const textOutput = document.getElementById('textOutput').textContent;
    const copyBtn = document.getElementById('copyBtn');

    // Create a temporary textarea to copy the text from
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = textOutput;
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
// Reset Button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('textOutput').textContent = '';
});