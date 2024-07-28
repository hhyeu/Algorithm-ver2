'use strict'

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}
class Solution {
    inorder(root) {

        if (root === null)
            return "$"
    
        let left = this.inorder(root.left);
    
        let right = this.inorder(root.right);
    
        return left + "," + root.data + "," + right 
        
    }
    
    preorder(root) {
    
        if (root === null)
            return "$"
        
        let left = this.preorder(root.left);
        
        let right = this.preorder(root.right);
        
        return root.data + "," + left + "," + right 
        
    }
    
    isSubtree(root, rootSub) {
        return  this.inorder(root).includes(this.inorder(rootSub)) &&
                this.preorder(root).includes(this.preorder(rootSub))
    }
}



