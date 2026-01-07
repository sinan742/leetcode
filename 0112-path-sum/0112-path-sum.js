/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }

    // If leaf node
    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }

    // Subtract current node value
    targetSum -= root.val;

    // Check left or right subtree
    return hasPathSum(root.left, targetSum) ||
           hasPathSum(root.right, targetSum);
};