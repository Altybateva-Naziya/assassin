//js/hero.js
import * as engin from './engin.js'
import * as monster from './monsters.js'
import * as boss from './boss.js'
import * as heart from './heart.js'
const hero = {
    'idle': {
        1: '/assassin/image/hero/idle/hi1.png',
        2: '/assassin/image/hero/idle/hi2.png',
        3: '/assassin/image/hero/idle/hi3.png',
        4: '/assassin/image/hero/idle/hi4.png',
        5: '/assassin/image/hero/idle/hi5.png',
        6: '/assassin/image/hero/idle/hi6.png',
        7: '/assassin/image/hero/idle/hi7.png',
        8: '/assassin/image/hero/idle/hi8.png',
        9: '/assassin/image/hero/idle/hi9.png'
    },
    
    'movie': {
        1: '/assassin/image/hero/movie/hiro10.png',
        2: '/assassin/image/hero/movie/hiro11.png',
        3: '/assassin/image/hero/movie/hiro12.png',
        4: '/assassin/image/hero/movie/hiro13.png',
        5: '/assassin/image/hero/movie/hiro14.png',
        6: '/assassin/image/hero/movie/hiro15.png',
        7: '/assassin/image/hero/movie/hiro16.png'
    },
    'attack': {
        1: '/assassin/image/hero/attack/1.png',
        2: '/assassin/image/hero/attack/2.png',
        3: '/assassin/image/hero/attack/2.png',
        4: '/assassin/image/hero/attack/4.png',
        5: '/assassin/image/hero/attack/5.png',
        6: '/assassin/image/hero/attack/6.png',
        7: '/assassin/image/hero/attack/7.png',
        8: '/assassin/image/hero/attack/8.png',
        9: '/assassin/image/hero/attack/9.png',
        10: '/assassin/image/hero/attack/10.png',
        11: '/assassin/image/hero/attack/11.png',
        12: '/assassin/image/hero/attack/12.png'

    },
     'dead': {
        1: '/assassin/image/hero/dead/hiro20.png',
        2: '/assassin/image/hero/dead/hiro21.png',
        3: '/assassin/image/hero/dead/hiro22.png',
        4: '/assassin/image/hero/dead/hiro23.png',
        5: '/assassin/image/hero/dead/hiro24.png',
        6: '/assassin/image/hero/dead/hiro25.png',
        7: '/assassin/image/hero/dead/hiro26.png',
        8: '/assassin/image/hero/dead/hiro27.png',
        9: '/assassin/image/hero/dead/hiro28.png',
        10: '/assassin/image/hero/dead/hiro29.png',
         11: '/assassin/image/hero/dead/1.png',
    },
    'movel': {
        1: '/assassin/image/hero/movel/hir10.png',
        2: '/assassin/image/hero/movel/hir11.png',
        3: '/assassin/image/hero/movel/hir12.png',
        4: '/assassin/image/hero/movel/hir13.png',
        5: '/assassin/image/hero/movel/hir14.png',
        6: '/assassin/image/hero/movel/hir15.png',
        7: '/assassin/image/hero/movel/hir16.png'
    },
    'idlel': {
        1: '/assassin/image/hero/idlel/hi1.png',
        2: '/assassin/image/hero/idlel/hi2.png',
        3: '/assassin/image/hero/idlel/hi3.png',
        4: '/assassin/image/hero/idlel/hi4.png',
        5: '/assassin/image/hero/idlel/hi5.png',
        6: '/assassin/image/hero/idlel/hi6.png',
        7: '/assassin/image/hero/idlel/hi7.png',
        8: '/assassin/image/hero/idlel/hi8.png',
        9: '/assassin/image/hero/idlel/hi9.png'
    },
    'hurt': {
        1: '/assassin/image/hero/hurt/hu1.png',
        2: '/assassin/image/hero/hurt/hu2.png',
        3: '/assassin/image/hero/hurt/hu3.png',
        4: '/assassin/image/hero/hurt/hu4.png',
        5: '/assassin/image/hero/hurt/hu5.png',
        6: '/assassin/image/hero/hurt/hu6.png'
    },
    'angriff': {
        1: '/assassin/image/hero/angriff/1.png',
        2: '/assassin/image/hero/angriff/2.png',
        3: '/assassin/image/hero/angriff/3.png',
        4: '/assassin/image/hero/angriff/4.png',
        5: '/assassin/image/hero/angriff/5.png',
        6: '/assassin/image/hero/angriff/6.png',
        7: '/assassin/image/hero/angriff/7.png',
        8: '/assassin/image/hero/angriff/8.png',
        9: '/assassin/image/hero/angriff/9.png',
        10: '/assassin/image/hero/angriff/10.png',
         11: '/assassin/image/hero/angriff/11.png',
         12: '/assassin/image/hero/angriff/12.png'
    }

}
export let  hy = false
export let x = 60
export let y = 315
export let speed = 5
export let direct = 'right'
export let type = 'idle'
export let ready = false
export let he = 6
export function setType(type1) {
    type=type1
}
export function setframe(frame1) {
    frame=frame1
}
export function setdirect(direct1) {
    direct=direct1
}
let frame = 1
export function drawImagehero(ctx) {
    if (type === 'dead' && frame=== 11){}
    else {
        frame +=1
        if (type === 'attack' && frame=== 12){
            type='idle'
            frame=1
        }
        if (type === 'angriff' && frame=== 12){
            type='idlel'
            frame=1
        }
        if (type === 'hurt' && frame=== 7){
            type='idle'
            frame=1
        }
        if (hero[type][frame]=== undefined)
            frame = 1

        move()
        if (engin.colisionShape(x, monster.x, y, monster.y, 60, 58, 60, 84)){
            he -=1
            type= 'hurt'
            frame = 1
            monster.mxy(1000, 315)
            hxy(60, 315)
            heart.setType('half')
            if (he === 0){
            document.getElementById('3').style.display = "block"
            }

        }
        else if (engin.colisionShape(x, boss.x, y, boss.y, 57, 58, 60, 80)){
            he -=1
            type= 'hurt'
            frame = 1
            boss.bxy(1000, 315)
            hxy(60, 315)
            heart.setType('half')
            if (he === 0){
            document.getElementById('3').style.display = "block"
            }
        }
    }


    ctx.drawImage(hero[type][frame], x, y);

}
function move() {
    if (type === 'movie'|| type=== 'movel'){
        if (direct === 'right')
            x += speed
        else if (direct === 'left')
            x -= speed

        else if (direct === 'up')
            y += speed
    }
}

export function preload() {
    let types = Object.keys(hero)
    types.forEach(function (type, idx) {
        let frames = Object.keys(hero[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(58, 84);
            image.onload = function () {
                hero[type][frame] = image;
                if(idx === types.length-1 && idx1 === frames.length-1)
                    ready = true

            }
            image.src = hero[type][frame];
        })
    })
}

export function hxy(x1, y1) {
    x =x1
    y =y1
    hy=true
}