// here you put all the js you want.
import Keypoints from "./js/keypoints";
import Partners from "./js/partners";

var options = {
    rootMargin: '0px',
    threshold: 0.2
}

function callback(entries) {
    entries.filter(el => {
        if(el.isIntersecting) {
            el.target.classList.add('visible');
        }
    })
}


let observer = new IntersectionObserver(callback, options);

const keypoints = new Keypoints(observer);
const partners = new Partners(observer);
