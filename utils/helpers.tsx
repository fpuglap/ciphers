const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLength = alphabet.length;

export const decryptMessage = (message: string, key: number): string => {
  const shift = key % alphabetLength; // Calculate the shift amount

  let phrase = '';

  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const letterIndex = alphabet.indexOf(letter.toUpperCase()); // Find the index of the letter in the alphabet

    if (letterIndex === -1) {
      phrase += letter; // If it's not a letter, add it to the phrase as is
    } else {
      const shiftedIndex =
        (letterIndex - shift + alphabetLength) % alphabetLength; // Calculate the new index of the letter

      const shiftedLetter = alphabet[shiftedIndex];

      phrase +=
        letter === letter.toLowerCase()
          ? shiftedLetter.toLowerCase()
          : shiftedLetter; // Maintain the case of the original letter
    }
  }

  return phrase;
};

export const encryptMessage = (message: string, key: number) => {
  key = key % alphabetLength; // Ensure key is within the range of the alphabet

  const upperCaseStr = message.toUpperCase();
  const alphabetArray = alphabet.split('');
  let newStr = '';

  for (let i = 0; i < upperCaseStr.length; i++) {
    let currentLetter = upperCaseStr[i];

    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }

    let currentIndex = alphabetArray.indexOf(currentLetter); // Get current letter index in alphabet
    let newIndex = currentIndex + key; // Calculate new index based on the shift

    if (newIndex > alphabetLength - 1) newIndex = newIndex - alphabetLength; // Handle wrapping around to the start of the alphabet

    if (newIndex < 0) newIndex = alphabetLength + newIndex; // Handle wrapping around to the end of the alphabet

    if (message[i] === message[i].toUpperCase()) {
      newStr += alphabetArray[newIndex];
    } else {
      newStr += alphabetArray[newIndex].toLowerCase();
    }
  }

  return newStr;
};
