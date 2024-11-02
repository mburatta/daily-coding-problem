export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {

    if(image[sr][sc] !== color) {

        const startingColor = image[sr][sc]

        image[sr][sc] = color

        const left = {
            sr: sr-1,
            sc: sc
        }
        const right = {
            sr: sr + 1,
            sc: sc
        }
        const top = {
            sr: sr,
            sc: sc + 1
        }
        const bottom = {
            sr: sr,
            sc: sc - 1
        }

        if(left.sr >= 0 && image[left.sr][left.sc] === startingColor) {
            image = floodFill(image, left.sr, left.sc, color)
        }
        if(right.sr < image.length && image[right.sr][right.sc] === startingColor) {
            image = floodFill(image, right.sr, right.sc, color)
        }
        if(top.sc <  image[0].length && image[top.sr][top.sc] === startingColor) {
            image = floodFill(image, top.sr, top.sc, color)
        }
        if(bottom.sc >=0 && image[bottom.sr][bottom.sc] === startingColor) {
            image = floodFill(image, bottom.sr, bottom.sc, color)
        }

    }

    return image
}