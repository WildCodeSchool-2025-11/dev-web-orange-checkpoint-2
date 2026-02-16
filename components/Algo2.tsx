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
 * Return n first Fibbonacci numbers.
 * 
 * @param size number of numbers
 * @returns give the Fibbonacci sequence.
 */

function getFibonacciSequance(size: number): number[] {
    if (size <= 0) {
        return [];
    }

    const sequence: number[] = [0, 1];
    if (size === 1) {
        return [0];
    }
    while (sequence.length < size) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    }
    return sequence.slice(0, size);
}

export default getFibonacciSequance;