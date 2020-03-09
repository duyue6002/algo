var DLinkNode = function() {
  this.key = 0;
  this.value = 0;
  this.previous = null;
  this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cache = {};
  this.head = new DLinkNode();
  this.tail = new DLinkNode();
  this.head.next = this.tail;
  this.tail.previous = this.head;
};

LRUCache.prototype.add = function(node) {
  node.next = this.head.next;
  node.previous = this.head;
  this.head.next.previous = node;
  this.head.next = node;
};

LRUCache.prototype.remove = function(node) {
  node.previous.next = node.next;
  node.next.previous = node.previous;
};

LRUCache.prototype.pop = function() {
  let prev = this.tail.previous;
  this.remove(prev);
  return prev;
};

LRUCache.prototype.moveToHead = function(node) {
  this.remove(node);
  this.add(node);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let node = this.cache[key];
  if (node) {
    this.moveToHead(node);
    return node.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.cache[key];
  if (!node) {
    node = new DLinkNode();
    node.key = key;
    node.value = value;
    // add to the last
    this.add(node);
    this.cache[key] = node;
    this.size++;
    if (this.size > this.capacity) {
      let last = this.pop();
      this.cache[last.key] = null;
      this.size--;
    }
  } else {
    // update value
    node.value = value;
    this.moveToHead(node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2);
cache.put(2, 1);
cache.put(1, 1);
cache.put(2, 3);
cache.put(4, 1);
cache.get(1); // returns 1
cache.get(2); // returns 3

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4
