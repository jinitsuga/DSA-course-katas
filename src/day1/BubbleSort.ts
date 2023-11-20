export default function bubble_sort(arr: number[]): void {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapElements(arr, j);
            }
        }
    }
}

function swapElements(arr: number[], j: number) {
    const elem = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = elem;
}
