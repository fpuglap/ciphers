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

export const encryptMessage = (message: string, key: number): string => {
  const shift = key % alphabetLength;
  let result = '';

  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    const letterIndex = alphabet.indexOf(letter.toUpperCase());

    if (letterIndex === -1) {
      // Not a letter (space, punctuation, number, etc.) - keep as is
      result += letter;
    } else {
      const shiftedIndex = (letterIndex + shift) % alphabetLength;
      const shiftedLetter = alphabet[shiftedIndex];

      // Maintain the original case
      result += letter === letter.toLowerCase()
        ? shiftedLetter.toLowerCase()
        : shiftedLetter;
    }
  }

  return result;
};
