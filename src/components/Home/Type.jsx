import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Effective Problem Solver",
              "Digital Marketer",
              "DevOps Engineer"
              /*"Passionate Blockchain Enthusiast",
              "Committed Open Source Contributor",
              "Effective Problem Solver"*/
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type