//js/demon.js\
const dia = {
    '1': {
        1: '/assassin/image/diamond/dio.png'
    }
}

export let vi = false
export let ready = false
export let x = 17
export let y = 350
export  let type = '1'
export let frame = 1
export function drawImageDia(ctx) {
    ctx.drawImage(dia[type][frame], x, y);
}
export function preload() {
    let types = Object.keys(dia)
    types.forEach(function (type, idx) {
        let frames = Object.keys(dia[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(30, 30);
            image.onload = function () {
                dia[type][frame] = image;
                if(idx === types.length-1 && idx1 === frames.length-1)
                    ready = true

            }
            image.src = dia[type][frame];
        })
    })
}
export function sxy(x1, y1) {
    x =x1
    y =y1
    vi=true
}