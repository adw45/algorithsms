function addRecursive(node, newValue) {
    if (newValue > node.value) {
        if (node.right) {
            addRecursive(node.right, newValue);
        }
        else {
            node.right = {value: newValue}
        }
    }
    else if (newValue < node.value) {
        if (node.left) {
            addRecursive(node.left, newValue);
        }
        else {
            node.left = {value: newValue}
        }
    }
    return node;
}

function addIterative(head, newValue) {
    let node = head,
        valueAdded = false;
    while(!valueAdded) {
        if (newValue > node.value) {
            if (node.right) {
                node = node.right 
            }
            else {
                node.right = {value: newValue}
                valueAdded = true;
            }
        }
        else if (newValue < node.value) {
            if (node.left) {
                node = node.left 
            }
            else {
                node.left = {value: newValue}
                valueAdded = true;
            }
        }
    }
    return head;
}

module.exports = {
    recursive: addRecursive,
    iterative: addIterative
}
