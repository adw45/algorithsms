// determine if a value is in a binary search tree
// function binarySearchTree(treeHead, value)

function searchIterative(head, value) {
    let node = head;
    while (node) {
        if (node.value === value) {
            return true;
        }
        if (value < node.value) {
            node = node.left;
        }
        else if (value > node.value) {
            node = node.right
        }
    }
    return false;
}

function searchRecursive(head, value) {
    if (head.value === value) {
        return true;
    }
    if (value < head.value && head.left) {
        return binarySearchTreeRecursive(head.left, value);
    }
    if (value > head.value && head.right) {
        return binarySearchTreeRecursive(head.right, value);
    }
    return false;
}

module.exports = {
    recursive: searchRecursive,
    iterative: searchIterative
}
