import {invertTree} from "./invert-binary-tree";
import {TreeNode} from "./models/tree-node";

describe( 'Invert tree Node', () => {

    it( 'Input: root = [4,2,7,1,3,6,9], Output: [4,7,2,9,6,3,1]', () => {

        // Input
        const inputLeftLeaf2 = new TreeNode(1);
        const inputRightLeaf2 = new TreeNode(3);
        const inputLeftLeaf1 = new TreeNode(2, inputLeftLeaf2, inputRightLeaf2);

        const inputLeftLeaf3 = new TreeNode(6);
        const inputRightLeaf3 = new TreeNode(9);
        const inputRightLeaf1 = new TreeNode(7, inputLeftLeaf3, inputRightLeaf3);

        const inputRoot: TreeNode = new TreeNode(2,inputLeftLeaf1, inputRightLeaf1);

        // Result
        const resultLeftLeaf2 = new TreeNode(9);
        const resultRightLeaf2 = new TreeNode(6);
        const resultLeftLeaf1 = new TreeNode(7, resultLeftLeaf2, resultRightLeaf2);

        const resultLeftLeaf3 = new TreeNode(3);
        const resultRightLeaf3 = new TreeNode(1);
        const resultRightLeaf1 = new TreeNode(2, resultLeftLeaf3, resultRightLeaf3);

        const resultRoot: TreeNode = new TreeNode(2, resultLeftLeaf1, resultRightLeaf1);

        expect(invertTree(inputRoot)).toStrictEqual(resultRoot);
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
