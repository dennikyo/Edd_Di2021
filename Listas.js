function LinkedList() {
    this.Node = null;
    this.count = 0;
    this.head = null;
};

LinkedList.prototype.append = function (value) {
    // create new node
    var node = this.createNode(value);
    console.log(value);
    if (this.head == null) {
        this.Node = node;
        this.Node.next = null;
        this.head = this.Node;
    } else {
        var ptr = this.Node;
        while (ptr.next != null) {
            ptr = ptr.next;
        }
        ptr.next = node;
    }
    this.count++;
};

LinkedList.prototype.getSize = function () {
    console.log(this);
};

LinkedList.prototype.close = function () {
    var ptr = this.head;
    while (ptr.next != null) {
        ptr = ptr.next;
    }
    ptr.next = this.head;
};

LinkedList.prototype.createNode = function (value) {
    var node = {};
    node.value = value;
    node.next = null;
    return node;
};

var li = new LinkedList();
li.append(1);
li.append(2);
li.append(3);
li.append(4);
li.close();
li.getSize();