import {floodFill} from "./flood-fill";

describe('Flood fill', () => {

    it('Input: image = [[0,0,0],[0,0,0]], sr = 1, sc = 0, color = 2; Output: [[2,2,2],[2,2,2]]', () => {

        const image = [[0,0,0],[0,0,0]];
        const sr = 1;
        const sc = 0;
        const color = 2;

        expect(floodFill(image,sr,sc,color)).toStrictEqual([[2,2,2],[2,2,2]])
    })

    it('Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2; Output: [[2,2,2],[2,2,0],[2,0,1]]', () => {

        const image = [[1,1,1],[1,1,0],[1,0,1]];
        const sr = 1;
        const sc = 1;
        const color = 2;

        expect(floodFill(image,sr,sc,color)).toStrictEqual([[2,2,2],[2,2,0],[2,0,1]])
    })

    it('Input: image = [[0,0,0],[0,0,0]], sr = 1, sc = 0, color = 0; Output: [[0,0,0],[0,0,0]]', () => {

        const image = [[0,0,0],[0,0,0]];
        const sr = 0;
        const sc = 0;
        const color = 0;

        expect(floodFill(image,sr,sc,color)).toStrictEqual([[0,0,0],[0,0,0]])
    })
})