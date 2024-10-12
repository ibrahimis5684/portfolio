// Convert Button
document.getElementById('convertBtn').addEventListener('click', function() {
    const binaryInput1 = document.getElementById('binaryInput1').value;
    const binaryInput2 = document.getElementById('binaryInput2').value;
    const binaryOutput = document.getElementById('binaryOutput');

    let binaryResult = '';

    // Function to convert binary string to decimal number
    function binaryToDecimal(binaryStr) {
        return parseInt(binaryStr, 2);
    }

    // Adding the two binary inputs
    const sum = binaryToDecimal(binaryInput1) + binaryToDecimal(binaryInput2);
    
    // Convert the sum back to binary
    binaryResult = sum.toString(2);

    // Display the result in the binary output
    binaryOutput.textContent = binaryResult;
});

// Copy Button
document.getElementById('copyBtnBinary').addEventListener('click', function() {
    const binaryOutput = document.getElementById('binaryOutput').textContent;
    const copyBtn = document.getElementById('copyBtnBinary');

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

// Reset Button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('binaryInput1').value = '';
    document.getElementById('binaryInput2').value = '';
    document.getElementById('binaryOutput').textContent = '';
});
