
const bg = {
    'day': {
        1: '/assassin/image/background/03.png'
    },

    'night': {
        1: '/assassin/image/background/05.png'
    }
}
export let type = 'day'
export let ready = false
export let x =0
export let y = 0
export function drawImagebg(ctx) {
    ctx.drawImage(bg[type][1], x, y);

}
export function setTypebg(type1) {
    type=type1
}
export function preload() {
    let types = Object.keys(bg)
    types.forEach(function (type, idx) {
        let frames = Object.keys(bg[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(1124, 512);
            image.onload = function () {
                bg[type][frame] = image;
                if(idx === types.length-1 && idx1 === frames.length-1)
                    ready = true

            }
            image.src = bg[type][frame];
        })
    })
}
   setInterval(function () {
              if (type === 'day')
                  type = 'night'
                else if (type === 'night')
                   type = 'day'

            },10000)