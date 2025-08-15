import {invertTree} from "./invert-binary-tree";
import {TreeNode} from "./models/tree-node";
import {arrayToBinaryTree} from "./models/array-to-binary-tree.fn";

describe( 'Invert tree Node', () => {

    it( 'Input: root = [4,2,7,1,3,6,9], Output: [4,7,2,9,6,3,1]', () => {

        const root = arrayToBinaryTree([4,2,7,1,3,6,9]);
        const result = arrayToBinaryTree([4,7,2,9,6,3,1])

        expect(invertTree(root)).toStrictEqual(result);
    })

    it( 'Input: root = [2,1,3], Output: [2,3,1]', () => {

        const inputLeftLeaf1 = new TreeNode(1);
        const inputRightLeaf1 = new TreeNode(3);
        const inputRoot: TreeNode = new TreeNode(2,inputLeftLeaf1, inputRightLeaf1);

        const resultLeftLeaf1 = new TreeNode(3);
        const resultRightLeaf1 = new TreeNode(1);
        const resultRoot: TreeNode = new TreeNode(2, resultLeftLeaf1, resultRightLeaf1);
        expect(invertTree(inputRoot)).toStrictEqual(resultRoot);
    })
    it( 'Input: root = null, Output: null', () => {

        expect(invertTree(null)).toStrictEqual(null);
    })
})
