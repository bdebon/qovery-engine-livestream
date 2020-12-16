export default class Keypoints {

    constructor(observer) {
        this.observer = observer
        this.init()
    }

    init() {
        const targets = document.querySelectorAll('.q-key-points ul li');

        console.log(targets)

        targets.forEach(li => {
            console.log(li)
            this.observer.observe(li)
        })
    }

}
