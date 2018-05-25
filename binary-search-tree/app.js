// determine if a value is in a binary search tree
// function binarySearchTree(treeHead, value)

let treeHead = {
    value: 5,
    left: {
        value: 2,
        left: {
            value: 1
        },
        right: {
            value: 4
        } 
    },
    right: {
        value: 11,
        left: {
            value: 8,
            left: {
                value: 6,
                right: {
                    value: 7
                } 
            }
        },
        right: {
            value: 16 
        }
    }
};

function binarySearchTreeIterative(head, value) {
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

function binarySearchTreeRecursive(head, value) {
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

for (let i = 0; i < 17; i++) {
    console.log(i, ':');
    console.log(binarySearchTreeRecursive(treeHead, i));
    console.log(binarySearchTreeIterative(treeHead, i));
}
