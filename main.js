/*
 * String Search
 *
 * Find the letter in a given string.
 */

function search(word, letter) {
    let counter = 0;

    for (let step = 0; step < word.length; step++) {
        if (word[step] === letter) {
            counter += 1;
        }
    }

    return counter;
}

console.log(search("hello", "l"));
console.log(search("mississippi", "i"));