import {TreeNode} from "./tree-node";

export function arrayToBinaryTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]!);
    const queue: (TreeNode | null)[] = [root];
    let i = 1;

    while (i < arr.length) {
        const current = queue.shift();

        if (current !== null) {
            // Creazione del nodo di sinistra, se possibile e se non nullo
            if (i < arr.length && arr[i] !== null) {
                current.left = new TreeNode(arr[i]!);
                queue.push(current.left);
            }
            i++;

            // Creazione del nodo di destra, se possibile e se non nullo
            if (i < arr.length && arr[i] !== null) {
                current.right = new TreeNode(arr[i]!);
                queue.push(current.right);
            }
            i++;
        }
    }

    return root;
}
