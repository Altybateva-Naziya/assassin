//js/heart.js
const heart = {
    'normal': {
        1: '/assassin/image/heart/heart.png'
    },
    'half': {
         1: '/assassin/image/heart/heart1.png'
    },
    'all': {
         1: '/assassin/image/heart/heart2.png'
    }
}
export let ready = false
export let x = 20
export let y = 20
export  let type = 'normal'
export let frame = 1
export function setType(type1) {
    type=type1
}
export function setframe(frame1) {
    frame=frame1
}
export function drawImageHeart(ctx) {
    ctx.drawImage(heart[type][frame], x, y);

}
export function preload() {
    let types = Object.keys(heart)
    types.forEach(function (type, idx) {
        let frames = Object.keys(heart[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(20, 20);
            image.onload = function () {
                heart[type][frame] = image;
                if(idx === types.length-1 && idx1 === frames.length-1)
                    ready = true

            }
            image.src = heart[type][frame];
        })
    })
}