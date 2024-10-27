    // Function to convert hex to binary without extra spaces
    function hexToBinary(hex) {
        return hex.split('').map(function(hexDigit) {
            switch(hexDigit.toLowerCase()) {
                case '0': return '0000';
                case '1': return '0001';
                case '2': return '0010';
                case '3': return '0011';
                case '4': return '0100';
                case '5': return '0101';
                case '6': return '0110';
                case '7': return '0111';
                case '8': return '1000';
                case '9': return '1001';
                case 'a': return '1010';
                case 'b': return '1011';
                case 'c': return '1100';
                case 'd': return '1101';
                case 'e': return '1110';
                case 'f': return '1111';
                case '.': return '.';
                default: return ''; // Invalid character
            }
        }).join(''); // Remove spaces between binary digits
    }

    // Event listener for convert button
    document.getElementById('convertBtn').addEventListener('click', function() {
        const hexInput = document.getElementById('hexInput').value.trim();
        const binaryOutput = hexToBinary(hexInput);
        document.getElementById('binaryOutput').innerText = binaryOutput;
    });

    // Event listener for reset button
    document.getElementById('resetBtn').addEventListener('click', function() {
        document.getElementById('hexInput').value = '';
        document.getElementById('binaryOutput').innerText = '';
    });

    // Event listener for copy button
    document.getElementById('copyBtn').addEventListener('click', function() {
        const binaryOutput = document.getElementById('binaryOutput').innerText;
        navigator.clipboard.writeText(binaryOutput).then(function() {
            console.log('Binary output copied to clipboard');
        }, function(err) {
            console.error('Error copying binary output: ', err);
        });
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

// Reset Button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('hexInput').value = '';
    document.getElementById('binaryOutput').textContent = '';
});

// Color Picker Hex Input
document.getElementById('hexToBinary').addEventListener('input', function() {
    // Get the selected color's hex value
    const hexColor = this.value;

    // Set the hex value to the textarea
    document.getElementById('hexInput').value = hexColor;
});
