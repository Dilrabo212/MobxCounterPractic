import { makeAutoObservable } from 'mobx'

class Store {
    counter = 0

    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.counter++
    }
    dicriment() {
        this.counter--
    }
}

const countStore = new Store()

export default countStore
