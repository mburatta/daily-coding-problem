import {TreeNode} from "../models/tree-node";

export function isBalanced(root: TreeNode | null): boolean {

    return calculateDepth(root) != -1;
}

function calculateDepth(root: TreeNode | null): number {

    if(!root) {
        return 0
    }

    const leftDepth = calculateDepth(root.left);
    if (leftDepth === -1) return -1;

    const rightDepth = calculateDepth(root.right);
    if (rightDepth === -1) return -1;

    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    return Math.max(leftDepth, rightDepth) + 1;

}
