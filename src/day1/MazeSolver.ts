function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
): boolean {
    // base case
    // 1. Off the map
    if (
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }
    // 2. On a wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    // 3. At the end
    if (current.x === end.x && current.y === end.y) {
        return true;
    }
    // 4.We've seen it
    if (seen[current.y][current.x]) {
        return false;
    }
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
