export default function two_crystal_balls(breaks: boolean[]): number {
    // establishing optimal jump distances
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        // if we hit a "true", we break
        if (breaks[i]) {
            break;
        }
    }
    // Walk back to the previous jump point before we hit true so we can do a linear search
    i = i - jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
