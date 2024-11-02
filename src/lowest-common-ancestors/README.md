## 235. Lowest Common Ancestor of a Binary Search Tree


Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): "The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q as descendants (where we allow __a node to be a descendant of itself__).



__Example 1:__  

![Ex1](./assets/binarysearchtree_improved.png)  

&nbsp;&nbsp;&nbsp; __Input:__ root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8  
&nbsp;&nbsp;&nbsp; __Output:__ 6  
&nbsp;&nbsp;&nbsp; __Explanation:__ The LCA of nodes 2 and 8 is 6.  


__Example 2:__

![Ex2](./assets/binarysearchtree_improved_ex2.png)

&nbsp;&nbsp;&nbsp; __Input:__ root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4  
&nbsp;&nbsp;&nbsp; __Output:__ 2  
&nbsp;&nbsp;&nbsp; __Explanation:__ The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.


__Example 3:__

&nbsp;&nbsp;&nbsp; __Input:__ root = [2,1], p = 2, q = 1  
&nbsp;&nbsp;&nbsp; __Output:__ 2


__Constraints:__

- The number of nodes in the tree is in the range `[2, 10ˆ5]`.
- `109 <= Node.val <= 10ˆ9`
- All `Node.val` are unique.
- `p != q`
- `p` and `q` will exist in the BST.

