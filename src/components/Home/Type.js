import React from 'react'
import Typewriter from "typewriter-effect";
export default function Type() {
    return (
        <Typewriter
            options={{
                strings: ['FRONTEND DEVELOPER', 'FULLSTACK DEVELOPER'], 
                autoStart: true,
                loop: true,
            }}
        />
    )
}
