//js/index.js
import * as heart from './heart.js'
import * as fireball from './fireball.js'
import * as hero from './hero.js'
import * as bg from './background.js'
import * as dia from './demon.js'
import * as monster from './monsters.js'
import * as boss from './boss.js'
let listener = new window.keypress.Listener();
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
window.onload=async function () {
    preload()
    setInterval(function () {
        if (hero.ready === true && fireball.ready===true && bg.ready === true && dia.ready === true && monster.ready === true && boss.ready === true && heart.ready === true)
            document.getElementById('1').style.display = "none"
            draw()
}, 110)}
function preload() {
    document.getElementById('1').style.display = "block"
    hero.preload()
    fireball.preload()
    bg.preload()
    dia.preload()
    monster.preload()
    boss.preload()
    heart.preload()
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    bg.drawImagebg(ctx)
    hero.drawImagehero(ctx)
    fireball.drawF(ctx)
    dia.drawImageDia(ctx)
    monster.drawMonster(ctx)
    boss.drawBoss(ctx)
    heart.drawImageHeart(ctx)
}
function move() {
     ctx.clearRect(0, 0, c.width, c.height);
    hero.drawImagehiro()
}
listener.register_combo({
    "keys"              : "right",
    "on_keydown"        : function() {
        if (!['attack',  'dead'].includes(hero.type)){
            hero.setType('movie')
            hero.setdirect('right')
             document.getElementById('9').play()
        }
    },
    "on_keyup"          : function() {
        if (!['attack', 'dead'].includes(hero.type))
            hero.setType('idle')
         document.getElementById('9').pause()
    }
});
listener.register_combo({
    "keys"              : "left",
    "on_keydown"        : function() {
        if (!['attack',  'dead'].includes(hero.type))
            hero.setType('movel')
        hero.setdirect('left')
         document.getElementById('9').play()
    },
    "on_keyup"          : function() {
        if (!['attack', 'dead'].includes(hero.type))
            hero.setType('idlel')
        document.getElementById('9').pause()
    }
});
listener.register_combo({
    "keys"              : "space",
    "on_keydown"        : function() {
        if (!['attack', 'movie', 'dead'].includes(hero.type)){
            if (hero.direct === 'right'){
                hero.setType('attack')

            setTimeout(function () {
                document.getElementById('8').play()
            fireball.setxy(hero.x+40, hero.y+30)
            },500)
            }
            else if (hero.direct === 'left'){
                hero.setType('angriff')
            setTimeout(function () {
                document.getElementById('8').play()
            fireball.setxy(hero.x-40, hero.y+30)
            },500)
            }
            fireball.setdirectfireball(hero.direct)
            hero.setframe(1)

        }
    }
});