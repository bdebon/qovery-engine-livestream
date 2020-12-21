export default class Partners {

    constructor(observer) {
        this.observer = observer
        this.init()
    }

    init() {
        const targets = document.querySelectorAll('.q-partners');

        targets.forEach(li => {
            this.observer.observe(li)
        })
    }

}
