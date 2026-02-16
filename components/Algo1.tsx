/*
    Made by Stacy
  ______                       _                    _          _             
 / _____) _                   ( )                  | |        (_)  _         
( (____ _| |_ _____  ____ _   |/ ___    _ _ _ _____| |__   ___ _ _| |_ _____ 
 \____ (_   _|____ |/ ___) | | |/___)  | | | | ___ |  _ \ /___) (_   _) ___ |
 _____) )| |_/ ___ ( (___| |_| |___ |  | | | | ____| |_) )___ | | | |_| ____|
(______/  \__)_____|\____)\__  (___/    \___/|_____)____/(___/|_|  \__)_____)
                         (____/                                              
                                             
    Date: 2026/02/16
*/

/**
 * 
 * Return number of occurence of a letter.
 * @param text string were we seek
 * @param letter the letter we seek a number of occurence
 * @return number of 'letter' in a 'text' string
 * I think this will do the trick. I haven't understand the thing avout all "one letter parametters."
 */

export function countLetters(text: string, letter: string): number{
return [...text].reduce((acc, char) => (char === letter ? acc + 1 : acc), 0);
}

if (process.env.NODE_ENV === 'development') {
    const examples: Array<[string, string]> = [
        ['', 'a'],
        ['a', 'a'],
        ['aaaaabbbaa', 'a'],
        ['bbacbaaa', 'c'],
        ['bbcc', 'a'],
    ];

    examples.forEach(([txt, lett]) => {
        console.log(`countLetters("${txt}", "${lett}") = ${countLetters(txt, lett)}`);
    });
}