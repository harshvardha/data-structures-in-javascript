class Queue {
    constructor() {
        this.collection = []
    }

    add(element) {
        this.collection.push(element)
    }

    poll() {
        if (this.size() > 0)
            return this.collection.shift()
    }

    peek() {
        if (this.size() > 0)
            return this.collection[0]
    }

    size() {
        return this.collection.length
    }

    isEmpty() {
        return this.collection.length === 0
    }
}

let queue = new Queue()
for (let i = 1; i <= 10; i++) {
    queue.add(i)
}

console.log(queue.size())
console.log(queue.peek())
console.log(queue.poll())
console.log(queue.size())
console.log(queue.isEmpty())