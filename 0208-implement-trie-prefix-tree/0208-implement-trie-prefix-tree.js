class Trie {
  
  constructor() {
    this.wordCount = 0;
    this.tree = new Node();
  }
  
  insert(word){
    let i = 0;
    let currNode;
    // Case of the first insertion:
    if (this.wordCount === 0) {
      this.tree[word[i]] = new Node(word[i]);
      currNode = this.tree[word[i]];
      while (i < word.length) {
        if (word[i + 1]) {
          currNode[word[i + 1]] = new Node(word[i + 1]);
        } else {
          currNode.end = true;
        }
        currNode = currNode[word[i + 1]];
        i++;
      }
    }
    // Case of subsequent insertions:
    else if (this.wordCount > 0) {
      if (this.tree[word[i]] == undefined) {
        this.tree[word[i]] = new Node(word[i]);
      }
      currNode = this.tree[word[i]];
      while (i < word.length) {
        if (word[i + 1]) {
          if (currNode[word[i + 1]] === undefined) {
            currNode[word[i + 1]] = new Node(word[i + 1]);
          }
        } else {
          currNode.end = true;
        }
        currNode = currNode[word[i + 1]];
        i++;
      }
    }
    this.wordCount++;
  }
  
  search(word) {
    if (this.wordCount === 0) return false;
    else {
      let i = 0;
      if (this.tree[word[i]] === undefined) return false;
      let currNode = this.tree[word[i]];
      while (i < word.length) {
        if (word[i + 1]) {
          if (currNode[word[i + 1]] === undefined) return false;
        } else {
          if (currNode.end === true) return true;
        }
        currNode = currNode[word[i + 1]];
        i++;
      }
    }
    return false;
  }
  
  startsWith(prefix) {
    const word = prefix;
    if (this.wordCount === 0) return false;
    else {
      let i = 0;
      if (this.tree[word[i]] === undefined) return false;
      let currNode = this.tree[word[i]];
      while (i < word.length) {
        if (word[i + 1]) {
          if (currNode[word[i + 1]] === undefined) return false;
        } 
        currNode = currNode[word[i + 1]];
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