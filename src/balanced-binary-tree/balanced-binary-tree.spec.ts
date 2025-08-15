import {isBalanced} from "./balanced-binary-tree";
import {buildTreeString} from "../invert-binary-tree/models/print-binary-tree.fn";
import {arrayToBinaryTree} from "../invert-binary-tree/models/array-to-binary-tree.fn";

describe( 'Balance binary tree', () => {

    it('Input: root = [3,9,20,null,null,15,7], Output: true', () => {

        const root = arrayToBinaryTree([3,9,20,null,null,15,7]);
        console.log(`Input: root = [3,9,20,null,null,15,7]\nOutput: true\n${buildTreeString(root)}`)
        expect(isBalanced(root)).toEqual(true);
    })

    it('Input: [1,2,2,3,3,null,null,4,4], Output: false', () => {
         const root =   arrayToBinaryTree([1,2,2,3,3,null,null,4,4]);
        console.log(`Input: root = [1,2,2,3,3,null,null,4,4]\nOutput: false\n${buildTreeString(root)}`)
         expect(isBalanced(root)).toEqual(false)
    })

    it('Input: root = [1,null,2,null,3], Output: false', () => {

        const root = arrayToBinaryTree([1,null,2,null,3]);
        console.log(`Input: root = [1,null,2,null,3]\nOutput: false\n${buildTreeString(root)}`)
        expect(isBalanced(root)).toEqual(false);
    })

    it('Input: root = [1,2,2,3,null,null,3,4,null,null,4], Output: false', () => {

        const root = arrayToBinaryTree([1,2,2,3,null,null,3,4,null,null,4]);
        console.log(`Input: root = [1,2,2,3,null,null,3,4,null,null,4]\nOutput: false\n${buildTreeString(root)}`)
        expect(isBalanced(root)).toEqual(false);
    })
})
