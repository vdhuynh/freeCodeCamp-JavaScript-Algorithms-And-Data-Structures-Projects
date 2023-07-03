function rot13(str) {
  // Helper function to decode a single character
  function decodeChar(char) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {  // Check if the character is an uppercase letter
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    }
    return char;
  }

  // Split the string into an array of characters, decode each character, and join them back into a string
  return str.split('').map(decodeChar).join('');
}

rot13("SERR PBQR PNZC");
