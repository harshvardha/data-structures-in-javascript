class Set {
    constructor() {
        this.collection = []
    }

    add(element) {
        if (!this.has(element))
            this.collection.push(element)
    }

    has(element) {
        if (this.collection.includes(element))
            return true
        else
            return false
    }

    values() {
        return this.collection
    }

    remove(element) {
        if (this.has(element))
            delete this.collection[this.collection.indexOf(element)]
    }

    size() {
        return this.collection.length
    }

    union(otherSet) {
        let unionSet = new Set()
        this.collection.forEach(element => {
            unionSet.add(element)
        })
        otherSet.forEach(element => {
            unionSet.add(element)
        })
        return unionSet
    }

    intersection(otherSet) {
        let intersectionSet = new Set()
        this.collection.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element)
            }
        })
        return intersectionSet
    }

    difference(otherSet) {
        let differenceSet = new Set()
        this.collection.forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element)
            }
        })
        return differenceSet
    }

    isSubset(otherSet) {
        this.collection.forEach(element => {
            if (!otherSet.has(element))
                return false
        })
        return true
    }
}

let set1 = new Set()
let set2 = new Set()
for (let i = 1; i <= 10; i++) {
    set1.add(i)
}
for (let i = 5; i <= 10; i++) {
    set2.add(i)
}
console.log(set1.intersection(set2))
console.log(set1.difference(set2))
console.log(set2.isSubset(set1))