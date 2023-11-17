export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const middle = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[middle];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = middle;
        } else {
            lo = middle + 1; // no queremos mirar el punto medio, por eso el plus 1
        }
    } while (lo < hi);
    return false;
}
