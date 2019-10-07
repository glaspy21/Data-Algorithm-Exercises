// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor( data, next = null ) {
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst( data ) {
        const node = new Node(data, this.head);
        this.head = node
    }

    size() {
        let counter = 0
        let node = this.head

        while ( node ) {
            node = node.next;
            counter++
        }

        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        if ( !this.head ) {
            return
        }

        let node = this.head

        while ( node.next ) {
            node = node.next
        }

        return node
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if ( this.head) {
            this.head = this.head.next
        }
    }

    removeLast() {
        if ( !this.head ) {
            return
        }

        if ( !this.head.next ) {
            this.head = null
            return
        }

        let previous = this.head
        let node = previous.next

        while ( node.next ) {
            previous = node;
            node = node.next
        }

        previous.next = null
    }

    insertLast( data ) {
        
    }
}


// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertFirst( data ) {
//         // this.head = new Node( data, this.head)
//         this.insertAt( data, 0 )
//     }

//     size() {
//         let counter = 0
//         let node = this.head
      
//         while (node) {
//             counter++
//             node = node.next
//         }
        
//         return counter
//     }

//     getFirst() {
//         // return this.head
//         return this.getAt(0)
//     }
 
//     getLast() {
//         // if ( !this.head ) {
//         //     return null
//         // }

//         // let lastNode = this.head

//         // while (lastNode.next) {
//         //     lastNode = lastNode.next
//         // }

//         // return lastNode

//         return this.getAt(this.size() - 1)
//     }

//     clear() {
//         this.head = null
//     }

//     removeFirst() {
//         this.head = this.head.next
//     }

//     removeLast() {
//         if ( !this.head ) {
//             return
//         }

//         if ( !this.head.next ) {
//             this.head = null
//             return;
//         }

//         let previous = this.head
//         let node = this.head.next
//         while (node.next) {
//             previous = node
//             node = node.next
//         }
        
//         previous.next = null
//     }

//     insertLast( data ) {
//         const lastNode = this.getLast()
//        lastNode ? lastNode.next = new Node (data) : this.head = new Node(data)
//     }

//     getAt( index ) {
//         if ( !this.head ) {
//             return null;
//         }
        
//         let node = this.head
//         let counter = 0
 
//         while ( node ) {
//            if ( counter === index ) {
//                return node
//            } 

//            node = node.next
//            counter++
//         }

//         return null    
//     }

//     removeAt( index ) {
//         if ( !this.head ) {
//             return
//         }

//         if ( index === 0 ) {
//             this.head = this.head.next
//             return
//         }

//         let previous = this.getAt( index - 1 )
//         if ( !previous || !previous.next ) {
//             return 
//         }
//         previous.next = previous.next.next
//     }

//     insertAt( data, index ) {
//         if ( !this.head ) {
//             this.head = new Node ( data )
//             return
//         }

//         if ( index === 0 ) {
//             this.head = new Node ( data, this.head )
//             return
//         }

//         const previous = this.getAt( index - 1 ) || this.getLast()
//         const node = new Node( data, previous.next )
//         previous.next = node
//     }

     
    
// }


module.exports = { Node, LinkedList };


