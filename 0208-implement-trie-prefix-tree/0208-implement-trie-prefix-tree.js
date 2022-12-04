function Node(val) {
  this.val = val; 
  this.end = false;
}

// should start with empty

/*

a -> p -> p -> l -> e -> null
  \         \
    x        null
      \
        e
*/


class Trie {
  constructor() {
    this.wordCount = 0;
    this.tree = new Node();
  }
  
  insert(word){
    // Case of the first insertion:
    if (this.wordCount === 0) {
      let i = 0;
      this.tree[word[i]] = new Node(word[i]);
      let currNode = this.tree[word[i]];
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
    if (this.wordCount > 0) {
      // null -> 0 -> 1 -> 2
      let i = 0;
      if (this.tree[word[i]] == undefined) {
        this.tree[word[i]] = new Node(word[i]);
      }
      let currNode = this.tree[word[i]];
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
    
    
    // Console.log output
    this.wordCount++;
    // console.log(JSON.stringify(this.tree));

  }
  
  search(word) {
    if (this.wordCount === 0) return false;
    else {
      let i = 0;
      if (this.tree[word[i]] === undefined) return false;
      let currNode = this.tree[word[i]];
      while (i < word.length) {
        // console.log(`i: ${i} word[i]: ${word[i]} currNode: ${currNode.val}`)
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
        // console.log(`i: ${i} word[i]: ${word[i]} currNode: ${currNode.val}`)
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


// var Trie = function() {
    
// };

// /** 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
    
// };

// /** 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
    
// };

// /** 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
    
// };

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */