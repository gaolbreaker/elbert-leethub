class Trie {
  
  constructor() {
    this.wordCount = 0;
    this.tree = new Node();
  }
  
  // Method 1
  insert(word){
    let i = 0;
    
    if (!this.tree[word[i]]) this.tree[word[i]] = new Node(word[i]);
    let currNode = this.tree[word[i]];
    while (i < word.length - 1) {
      if (!currNode[word[i + 1]]) currNode[word[i + 1]] = new Node(word[i + 1]);
      currNode = currNode[word[i + 1]];
      i++;
    }
    currNode.end = true;
    this.wordCount++;
  }
  
  // Method 2
  search(word, fullMatch = true) {
    let i = 0;
    let currNode = this.tree[word[i]];
    if (!this.tree[word[i]]) return false;
    else {
      while (i < word.length - 1) {
        if (!currNode[word[i + 1]]) return false;
        currNode = currNode[word[i + 1]];
        i++;
      }
      return fullMatch ? currNode.end : true;
    }
  }
  
  // Method 3
  startsWith(prefix) {
    // this.search(prefix, false);
    let i = 0;
    let currNode = this.tree[prefix[i]];
    if (!this.tree[prefix[i]]) return false;
    else {
      while (i < prefix.length - 1) {
        if (!currNode[prefix[i + 1]]) return false;
        currNode = currNode[prefix[i + 1]];
        i++;
      }
      return true;
    }
  }
}


class Node {
  constructor(val) {
    this.val = val;
    this.end = false;
  }
}