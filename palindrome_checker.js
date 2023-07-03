function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const modifiedStr = str.replace(/[\W_]/g, '').toLowerCase();

  // Reverse the modified string
  const reversedStr = modifiedStr.split('').reverse().join('');

  // Check if the modified string is the same as the reversed string
  return modifiedStr === reversedStr;
}

palindrome("eye");
