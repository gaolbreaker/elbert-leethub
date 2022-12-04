class Trie {
  
  constructor() {
    this.wordCount = 0;
    this.tree = new Node();
  }
  
  // Method 1
  insert(word){
    let i = 0;
    let currNode;
    if (!this.tree[word[i]]) this.tree[word[i]] = new Node(word[i]);
    currNode = this.tree[word[i]];
    while (i < word.length - 1) {
      if (!currNode[word[i + 1]]) currNode[word[i + 1]] = new Node(word[i + 1]);
      currNode = currNode[word[i + 1]];
      i++;
    }
    currNode.end = true;
    this.wordCount++;
  }
  
  // Method 2
  search(word) {
    if (!this.wordCount) return false;
    else {
      let i = 0;
      if (!this.tree[word[i]]) return false;
      let currNode = this.tree[word[i]];
      while (i < word.length) {
        if (word[i + 1]) {
          if (!currNode[word[i + 1]]) return false;
        } else {
          if (currNode.end) return true;
        }
        currNode = currNode[word[i + 1]];
        i++;
      }
    }
    return false;
  }
  
  // Method 3
  startsWith(prefix) {
    if (!this.wordCount) return false;
    else {
      let i = 0;
      if (!this.tree[prefix[i]]) return false;
      let currNode = this.tree[prefix[i]];
      while (i < prefix.length) {
        if (prefix[i + 1]) {
          if (!currNode[prefix[i + 1]]) return false;
        } 
        currNode = currNode[prefix[i + 1]];
        i++;
      }
    }
    return true;
  }
}


class Node {
  constructor(val) {
    this.val = val;
    this.end = false;
  }
}