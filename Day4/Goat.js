var toGoatLatin = function(sentence) {
    let arr = sentence.split(' ');
    let vowel = "aeiouAEIOU";

    return arr.map((word, index) => {
        let letter = 'a'.repeat(index + 1);
        if (vowel.includes(word[0])) {
            return word + 'ma' + letter;
        } else {
            return word.slice(1) + word[0] + 'ma' + letter;
        }
    }).join(' ');
};
