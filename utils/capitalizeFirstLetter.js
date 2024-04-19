

const capitalizeFirstLetter = (word) => {
    const newFirstChar = word[0].toUpperCase();
    const newWord = newFirstChar + word.substring(1, word.length);
    return newWord;
}

export default capitalizeFirstLetter;