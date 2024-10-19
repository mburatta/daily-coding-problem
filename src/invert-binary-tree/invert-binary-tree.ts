import {TreeNode} from "./models/tree-node";

export function invertTree(root: TreeNode | null): TreeNode | null {

    if(!root) {
        return null;
    }

    if(!root.left && !root.right) {
        return root;
    } else {

        const orderedRightLeaf = invertTree(root.right)
        const orderedLeftLeaf = invertTree(root.left)

        root.left = orderedRightLeaf;
        root.right = orderedLeftLeaf;
        return root;
    }
};
