class Stack {
    constructor() {
        this.stack = []
    }

    push(val) {
        if (val !== null)
            this.stack.push(val)
    }

    pop() {
        if (this.stack.length !== 0)
            this.stack.pop()
    }

    peek() {
        if (this.stack.length !== 0)
            return this.stack[this.stack.length - 1]
    }

    size() {
        return this.stack.length
    }
}

let stack = new Stack()
for (let i = 1; i <= 10; i++) {
    stack.push(i)
}
console.log(stack.peek())
console.log(stack.size())
stack.pop()
console.log(stack.peek())
console.log(stack.size())