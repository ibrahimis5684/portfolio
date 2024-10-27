document.getElementById("convertBtn").addEventListener("click", function() {
    // Get the values from both input fields
    let hex1 = document.getElementById("hexInput1").value;
    let hex2 = document.getElementById("hexInput2").value;

    // Define a mapping for hex to binary
    const hexToBinary = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011',
        '4': '0100', '5': '0101', '6': '0110', '7': '0111',
        '8': '1000', '9': '1001', 'a': '1010', 'b': '1011',
        'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111'
    };

    // Function to convert hex to binary
    function convertHexToBinary(hex) {
        // Split hex into integer and fractional parts
        let [intPart, fracPart] = hex.split('.');
        let intBinary = intPart.split('').map(char => hexToBinary[char]).join('');
        let fracBinary = fracPart ? fracPart.split('').map(char => hexToBinary[char]).join('') : '';

        return {
            intBinary,
            fracBinary
        };
    }

    // Convert both inputs to binary
    let { intBinary: bin1Int, fracBinary: bin1Frac } = convertHexToBinary(hex1);
    let { intBinary: bin2Int, fracBinary: bin2Frac } = convertHexToBinary(hex2);

    // Add leading zeros if necessary for binary length
    const maxIntLength = Math.max(bin1Int.length, bin2Int.length);
    bin1Int = bin1Int.padStart(maxIntLength, '0');
    bin2Int = bin2Int.padStart(maxIntLength, '0');

    // Calculate the binary sum of the integer parts
    let binarySumInt = (parseInt(bin1Int, 2) + parseInt(bin2Int, 2)).toString(2);

    // Handle fractional parts
    let binarySumFrac = '';
    if (bin1Frac || bin2Frac) {
        // Concatenate fractional binaries (keeping the addition simple)
        let sumFrac = (parseInt(bin1Frac, 2) || 0) + (parseInt(bin2Frac, 2) || 0);
        binarySumFrac = sumFrac.toString(2);
    }

    // Combine integer and fractional binary parts
    let finalBinarySum = binarySumInt + (binarySumFrac ? '.' + binarySumFrac : '');

    // Convert the binary sum to hex
    let hexSumInt = parseInt(binarySumInt, 2).toString(16).toUpperCase();
    let hexSumFrac = binarySumFrac ? parseInt(binarySumFrac, 2).toString(16).toUpperCase() : '';

    // Display the results
    let finalHexSum = hexSumFrac ? `${hexSumInt}.${hexSumFrac}` : hexSumInt;
    document.getElementById("binaryOutput").textContent = finalBinarySum;
    document.getElementById("hexOutput").textContent = finalHexSum;
});

// Reset button functionality
document.getElementById("resetBtn").addEventListener("click", function() {
    // Clear the input fields
    document.getElementById("hexInput1").value = '';
    document.getElementById("hexInput2").value = '';
    
    // Clear the output fields
    document.getElementById("binaryOutput").textContent = '';
    document.getElementById("hexOutput").textContent = '';
});

// Restrict input to valid hex characters (0-9, a-f) and a period
document.getElementById("hexInput1").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9a-fA-F.]/g, ''); // Only allow 0-9, a-f, .
});
document.getElementById("hexInput2").addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9a-fA-F.]/g, ''); // Only allow 0-9, a-f, .
});
