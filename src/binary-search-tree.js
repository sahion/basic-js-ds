const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  node = new Node();
  checkLeft(branch){
    if (branch.left){
      return branch.left;
    }
    return branch;
  }

  checkRight(branch){
    if (branch.right){
      return branch.right;
    }
    return branch;
  }
  findPlace(branch, data, parentBranch=branch,position){

    if (typeof this.node.data === 'undefined'){
      return [branch,'first'];
    }
    else if (branch.data>data){
      let leftBranch = this.checkLeft(branch);
      if (leftBranch == branch){
        return [branch,'left']
      }
      return this.findPlace(leftBranch,data,branch,'left');
    } else if (branch.data<data){
      let rightBranch = this.checkRight(branch);
      if (rightBranch == branch){
        return [branch,'right']
      }
      this.parentBranch = branch;
      return this.findPlace(rightBranch,data,branch,'right');
    } else {
      return [branch,'exist',parentBranch,position];
    }
  }

  root() {
    return (this.node.data) ? this.node : null;
  }

  add(data) {
    if (!data){return null};
    let result = this.findPlace(this.node,data);
    switch (result[1]){

      case 'first':
        result[0].data = data;
        break;

      case 'left':
        result[0].left = new Node(data);
        break;

      case 'right':
        result[0].right = new Node(data);
        break;

      case 'exist':
        return 'such element already exist';
        break;
    }
  }

  has(data) {
    let result = this.findPlace(this.node, data);
    return (result[1]=='exist') ? true : false;
  }

  find(data) {
    let result = this.findPlace(this.node, data);
    return (result[1]=='exist') ? result[0] : null;
  }

  remove(data) {
    let node =  this.findPlace(this.node,data);
    if (node[1]!='exist') return null;



    if (node[0].left && node[0].right){
      debugger;
      let maxNode = node[0].left;
      while (this.checkRight(maxNode)!= maxNode){
        maxNode = maxNode.right; 
      }
      this.remove(maxNode.data);
      node[0].data = maxNode.data;


    } else if (node[0].left){


      switch (node[3]){

        case ('left'):
          node[2].left = node[0].left;
          break;

        case ('right'):
          node[2].right = node[0].left;
          break;
        }


    } else if (node[0].right){
      
      switch (node[3]){

        case ('left'):
          node[2].left = node[0].right;
          break;

        case ('right'):
          node[2].right = node[0].right;
          break;
        }


    } else {
      switch (node[3]){

        case ('left'):
          node[2].left = null;
          break;

        case ('right'):
          node[2].right = null;
          break;
      }  
    }
    
    
  }

  min() {
    let minNode = this.node;
    while (this.checkLeft(minNode)!= minNode){
      minNode = minNode.left; 
    }
    return minNode.data;
  }

  max() {
    let maxNode = this.node;
    while (this.checkRight(maxNode)!= maxNode){
      maxNode = maxNode.right; 
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};