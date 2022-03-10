import React, {useEffect} from 'react'
import Sketch from 'react-p5'
import useParticle from '../../hooks/useParticle'
import "./index.css"


export default function MySketch({width=500, height=500}) {
    let particles = []
    let particleA = useParticle({posX:100, posY:100, velX:0.1, velY:0.4})
    let particleB = useParticle({posX:0, posY:100, velX:0.2, velY:1})


    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(width, height).parent(canvasParentRef)

    }

    const draw = p5 => {
        particles.push(particleA)
        particles.push(particleB)
        p5.background(250,250,250)

        /*


        particles.forEach(p => {
            p.show(p5)
            p.update(p5)
        })

        */
    }

    return (
        <>
            <Sketch setup={setup} draw={draw}/>
        </>
    )

}