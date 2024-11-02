import {lowestCommonAncestor} from "./lowest-common-ancestors";
import {TreeNode} from "./models/tree-node";

describe('Lowest common ancestors', () => {

    test('Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8 Output: 6', () => {

        // Input
        const leaf7 = new TreeNode(3);
        const leaf8 = new TreeNode(5);
        const left5 = new TreeNode(4, leaf7, leaf8);

        const left4 = new TreeNode(0);
        const left2 = new TreeNode(2, left4, left5);

        const left6 = new TreeNode(7);
        const left7 = new TreeNode(9);
        const left3 = new TreeNode(8, left6, left7);

        const inputRoot: TreeNode = new TreeNode(6, left2, left3);

        expect(lowestCommonAncestor(inputRoot, left2, left3)).toStrictEqual(inputRoot);
    })

    test('Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 0, q = 5 Output: 2', () => {

        // Input
        const inputLeftLeaf5 = new TreeNode(3);
        const inputRightLeaf5 = new TreeNode(5);
        const inputLeftLeaf4 = new TreeNode(4, inputLeftLeaf5, inputRightLeaf5);

        const inputLeftLeaf3 = new TreeNode(0);
        const inputRightLeaf1 = new TreeNode(2, inputLeftLeaf3, inputLeftLeaf4);

        const inputLeftLeaf2 = new TreeNode(7);
        const inputRightLeaf2 = new TreeNode(9);
        const inputLeftLeaf1 = new TreeNode(8, inputLeftLeaf2, inputRightLeaf2);

        const inputRoot: TreeNode = new TreeNode(6, inputLeftLeaf1, inputRightLeaf1);

        expect(lowestCommonAncestor(inputRoot, inputLeftLeaf3, inputRightLeaf5  )).toStrictEqual(inputRightLeaf1);
    })

    test('Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4 Output: 2', () => {

        // Input
        const inputLeftLeaf5 = new TreeNode(3);
        const inputRightLeaf5 = new TreeNode(5);
        const inputLeftLeaf4 = new TreeNode(4, inputLeftLeaf5, inputRightLeaf5);

        const inputLeftLeaf3 = new TreeNode(0);
        const inputRightLeaf1 = new TreeNode(2, inputLeftLeaf3, inputLeftLeaf4);

        const inputLeftLeaf2 = new TreeNode(7);
        const inputRightLeaf2 = new TreeNode(9);
        const inputLeftLeaf1 = new TreeNode(8, inputLeftLeaf2, inputRightLeaf2);

        const inputRoot: TreeNode = new TreeNode(6, inputLeftLeaf1, inputRightLeaf1);

        expect(lowestCommonAncestor(inputRoot, inputRightLeaf1, inputLeftLeaf4)).toStrictEqual(inputRightLeaf1);
    })

    test('Input: root = [2,1], p = 2, q = 1 Output: 2', () => {

        // Input
        const inputLeftLeaf1 = new TreeNode(1);

        const inputRoot: TreeNode = new TreeNode(2, inputLeftLeaf1);

        expect(lowestCommonAncestor(inputRoot, new TreeNode(2), new TreeNode(1))).toStrictEqual(inputRoot);
    })

    test('Input: root = [3,1,4,null,2], p = 2, q = 4 Output: 3', () => {

        // Input
        const inputRightLeaf1 = new TreeNode(4);

        const inputRightLeaf2 = new TreeNode(2);
        const inputLeftLeaf1 = new TreeNode(1, inputRightLeaf2);

        const inputRoot: TreeNode = new TreeNode(3, inputLeftLeaf1, inputRightLeaf1);

        expect(lowestCommonAncestor(inputRoot, inputRightLeaf2, inputRightLeaf1)).toStrictEqual(inputRoot);
    })

    test('Input: root = [5,3,6,2,4,null,null,1], p = 1, q = 4 Output: 3', () => {

        // Tree
        const node7 = new TreeNode(1);

        const node6 = null
        const node5 = null
        const node4 = new TreeNode(4);
        const node3 = new TreeNode(2, node7);

        const node2 = new TreeNode(6, node5, node6);
        const node1 = new TreeNode(3, node3, node4);

        const root: TreeNode = new TreeNode(5, node1, node2);

        expect(lowestCommonAncestor(root, node7, node4)).toStrictEqual(node1);
    })

    test('Input: root = [5,3,6,2,4,null,null,1], p = 1, q = 3 Output: 3', () => {

        // Tree
        const node7 = new TreeNode(1);

        const node6 = null
        const node5 = null
        const node4 = new TreeNode(4);
        const node3 = new TreeNode(2, node7);

        const node2 = new TreeNode(6, node5, node6);
        const node1 = new TreeNode(3, node3, node4);

        const root: TreeNode = new TreeNode(5, node1, node2);

        expect(lowestCommonAncestor(root, node7, node1)).toStrictEqual(node1);
    })
})
