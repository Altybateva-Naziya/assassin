
const fireball = {
    'hit': {
        1: '/assassin/image/bullet/fireball/hit/fireball.png',
        2: '/assassin/image/bullet/fireball/hit/fireball2.png',
        3: '/assassin/image/bullet/fireball/hit/fireball3.png',
        4: '/assassin/image/bullet/fireball/hit/fireball4.png',
        5: '/assassin/image/bullet/fireball/hit/fireball5.png'
        },
    'not': {
        1: '/assassin/image/bullet/fireball/not/fireball.png',
        2: '/assassin/image/bullet/fireball/not/fireball2.png',
        3: '/assassin/image/bullet/fireball/not/fireball3.png',
        4: '/assassin/image/bullet/fireball/not/fireball4.png',
        5: '/assassin/image/bullet/fireball/not/fireball5.png',
        6: '/assassin/image/bullet/fireball/not/fireball-4.png',
        7: '/assassin/image/bullet/fireball/not/fireball-3.png',
        8: '/assassin/image/bullet/fireball/not/fireball-2.png',
        9: '/assassin/image/bullet/fireball/not/fireball-1.png'
    }
}
export let visible = false
export let x =0
export let y = 0
export let speed = 20
export let ready = false
export let direct = 'right'
export let type = 'hit'
let frame = 1
export function setType(type1) {
    type=type1
}
export function sframe(frame1) {
    frame=frame1
}

export function setdirectfireball(direct1) {
    direct=direct1
}
export function drawF(ctx) {
    if (visible=== true) {
        frame += 1
        if (type === 'hit' && frame === 6) {
            frame = 1
        }
        if (direct === 'right')
            x += speed
        else if (direct === 'left')
            x -= speed
        else if (direct === 'up')
            y += speed
        ctx.drawImage(fireball[type][frame], x, y);
    }
}
export function preload() {
    let types = Object.keys(fireball)
    types.forEach(function (type, idx) {
        let frames = Object.keys(fireball[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(58, 84);
            image.onload = function () {
                fireball[type][frame] = image;
                if (idx === types.length - 1 && idx1 === frames.length - 1)
                    ready = true

            }
            image.src = fireball[type][frame];
        })
    })
}
export function setxy(x1, y1) {
    x =x1
    y =y1
    visible=true
}