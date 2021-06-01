const bg = document.querySelector("#app > div.main > div.bg > img")
const notfound = document.querySelector("#app > div.main > div.obj > img.notfound")
const a = document.querySelector("#app > div.main > div.obj > img.a")
const m = document.querySelector("#app > div.main > div.obj > img.m")
const h1 = document.querySelector("#app > div.main > div.obj > img.h1")
const h2 = document.querySelector("#app > div.main > div.obj > img.h2")

const objArr = [notfound, a, m, h1, h2]

const animate = (obj, xAxis, yAxis, k) => {
    obj.style.transform = `translate3d(${xAxis * k}px,${yAxis * k}px, 0px)`;
}

document.addEventListener("mousemove", (e) => {
    const baseK = 120
    const { pageX, pageY } = e;
    let xAxis = (window.innerWidth / 2 - pageX) / baseK;
    let yAxis = (window.innerHeight / 2 - pageY) / baseK;
    bg.style.transform = `translate3d(0px,${yAxis}px, 0px)`;
    objArr.forEach((obj, idx) => animate(obj, xAxis, yAxis, (idx + 1)))
});