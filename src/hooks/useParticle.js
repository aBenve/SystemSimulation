import React from "react";


export default function useParticle({posX, posY, velX, velY, bg="#000000", r=10}) {

    // data
    let x = 0;
    let y = 0;
    let vx = 0;
    let vy = 0;

    if(posX) x=posX
    if(posY) y=posY
    if(velX) vx=velX
    if(velY) vy=velY


    // functions 
    function show(p5){
        p5.fill(bg)
        p5.ellipse(x, y, r)
    }


    function update(p5){
        if(x > 500 || x < 0 ){
            vx = -vx
        }
        if(y > 500 || y < 0)
            vy = -vy


        x += vx
        y += vy
    }

    return {show, update}

}