import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import React from 'react'

export default function Particle() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <Particles 
      id="tsparticles"  
      init={particlesInit} 
      loaded={particlesLoaded} 
      options={{
      
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                
                resize: true,
            },
            modes: {
                push: {
                    quantity: 2,
                },
                
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffff",
                distance: 0,
                enable: true,
                opacity: .5,
                width: 1,
            },
            collisions: {
                enable:true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }}
    />
  )
}
