var deleteNode = function(node) {
  // replace the current node to be deleted's value with the value of the next node
  node.val = next.next.val
  // replace the next value as the value next to the next node
  node.next = node.next.next
};
