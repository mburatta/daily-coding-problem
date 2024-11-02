import {TreeNode} from "./models/tree-node";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    const sons = [p?.val, q?.val]

    if(root?.right === null && root.left === null){

        if(sons.includes(root?.val)){
            return root;
        } else {
            return null;
        }

    }else {

        let imTheOne = null
        if(sons.includes(root?.val)) {
            imTheOne = true;
        }

        let left = null;
        if(root?.left) {
            left = lowestCommonAncestor(root.left, p, q)
        }

        let right = null;
        if(root?.right) {
            right = lowestCommonAncestor(root.right, p, q)
        }

        if(imTheOne || (left && right)) {
            return root;
        }

        if(right) {
            return right;
        }

        if (left) {
            return left
        }

        return null;
    }
}