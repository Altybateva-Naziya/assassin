import *as dia from  './demon.js'
import * as engin from './engin.js'
import * as fireball from './fireball.js'
const boss = {
    'a1': {
        1: '/assassin/image/boss/go/at1.png',
        2: '/assassin/image/boss/go/at2.png',
        3: '/assassin/image/boss/go/at3.png',
        4: '/assassin/image/boss/go/at4.png'
    },
    'dieing': {
        1: '/assassin/image/boss/dieing/1.png',
        2: '/assassin/image/boss/dieing/2.png',
        3: '/assassin/image/boss/dieing/3.png',
        4: '/assassin/image/boss/dieing/4.png',
        },
    
    'running': {
        1: '/assassin/image/boss/running/b5.png',
        2: '/assassin/image/boss/running/b4.png',
        3: '/assassin/image/boss/running/b3.png',
        4: '/assassin/image/boss/running/b2.png',
        5: '/assassin/image/boss/running/b1.png',
        6: '/assassin/image/boss/running/b.png'
        }
}

export let  by = false
export let x = 1000
export let y = 315
export let speed = 20
export let ready = false
export let type = 'running'
export let level = false
export let frame = 1
export let lu = 3
export function setType(type1) {
    type=type1
}
export function mframe(frame1) {
    frame=frame1
}
export function setLevel(level1) {
    level=level1
}
export function drawBoss(ctx) {
    console.log(level)
    if (level === true) {
        frame += 1
        if (type === 'running' && frame === 6) {
            frame = 1
        }
        if (type === 'dieing' && frame === 4) {
            frame = 0
        }
        if (boss[type][frame] === undefined)
            frame = 1
        x -= speed
        if (x < 0)
            x = 1000
        ctx.drawImage(boss[type][frame], x, y);
        if (engin.colisionShape(x, fireball.x, y, fireball.y, 60, 57, 60, 80)) {
            lu-=1
            x = 1000
            fireball.setxy(10000000000000000000000000000000000000000000000000000000000000, 100000000000000000000000000000000000000000000000000000)
            if  (lu === 0) {
                document.getElementById('4').style.display = "block"
            }
        }
        else if (engin.colisionShape(x, dia.x, y, dia.y, 60, 30, 60, 30)) {
            x = 5000
            dia.sxy(10000000, 100000000)
            document.getElementById('1').style.display = "block"
        }
    }

}
export function preload() {
    let types = Object.keys(boss)
    types.forEach(function (type, idx) {
        let frames = Object.keys(boss[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(57, 80);
            image.onload = function () {
                boss[type][frame] = image;
                if (idx === types.length - 1 && idx1 === frames.length - 1)
                    ready = true

            }
            image.src = boss[type][frame];
        })
    })
}

export function bxy(x1, y1) {
    x =x1
    y =y1
    by=true
}