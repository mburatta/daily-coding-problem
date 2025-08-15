import {TreeNode} from "./tree-node";

export function buildTreeString(root: TreeNode | null, prefix: string = "", isLeft: boolean = true): string {
    if (root === null) {
        return ""; // Non aggiungere nulla se il nodo è null
    }

    let result = prefix + (isLeft ? "├── " : "└── ") + root.val + "\n";

    // Calcola il prefisso per i nodi successivi
    const childPrefix = prefix + (isLeft ? "│   " : "    ");

    // Aggiunge ricorsivamente il sottoalbero sinistro e destro solo se non sono null
    if (root.left !== null || root.right !== null) {
        result += buildTreeString(root.left, childPrefix, true);
        result += buildTreeString(root.right, childPrefix, false);
    }

    return result;
}
