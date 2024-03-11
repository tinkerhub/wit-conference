const LETTERS = {
    'W': [
        "1   1",
        "1 1 1",
        "11111",
    ],
    'M': [
        "11111",
        "1 1 1",
        "1   1",
    ],
    'C': [
        "111",
        "1   ",
        "111",
    ],
};

const IMAGES = [
    {url: 'img/cubes/ada.webp', name: 'Ada Lovelace'},
    {url: 'img/cubes/susan.webp', name: 'Susan Wojcicki'},
]

const text = ["Women", "Maker", "Celebration"];

export const LETTER_MAP = ["W", "M", "C"].map((letter, index) => {
    const pattern = LETTERS[letter];
    const count = pattern.reduce((acc: number, row: string) => acc + row.split('').filter(cell => cell === '1').length, 0);

    const images = [];
    for (let i = 0; i < count; i++) {
        images.push(IMAGES[IMAGES.length * Math.random() | 0]);
    }

    return {
        pattern,
        images,
        text: text[index]
    }
});
