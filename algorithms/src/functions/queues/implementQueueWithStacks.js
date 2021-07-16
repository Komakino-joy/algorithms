//^ Implement the class Queue using stacks. The queue methods you need to implement are enqueue, dequeue, peek, and empty.

//* Enqueue: add to end of queue
//* Dequeue: remove queue from start of queue
//* Peek: View next item in queue
//* Empty: Boolean, queue empty or not

class QueueWithStacks {
    constructor(){
        this.in = [];
        this.out= [];
    };

    // Time: O(n)
    enqueue(val) {
        this.in.push(val);
    };

    // Time: O(n)
    dequeue() {
        if(this.out.length === 0) {
            while(this.in.length){
                this.out.push(this.in.pop());
            }
        }
        return this.out.pop();
    };

    // Time: O(n)
    peek() {
        if(this.out.length === 0) {
            while(this.in.length){
                this.out.push(this.in.pop());
            }
        }
        return this.out[this.out.length - 1];
    }

    // Time: O(1)
    empty() {
        return this.in.length === 0 && this.out.length === 0;
    }
}