import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Aurora = () => {
    const radialColors = [ "#78007cff", "#00286dff", "#137400ff", "#006e81ff"];
    const color = useMotionValue(radialColors[0]);
    const backgroundImage = useMotionTemplate`  
          radial-gradient(200% 200% at 50% 50%, #000a1bff, ${color})`;
    useEffect(() => {
        animate(color, radialColors, {
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
        });
    }, [color, radialColors]);
    return (
        <motion.section
            style={{
                backgroundImage,
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                overflow: "hidden",
            }}
        >
            <div className="stars-bg">
                <Canvas>
                    <Stars radius={70} count={1500} factor={3} saturation={0.12} speed={0.5} fade={true}/>
                </Canvas>
            </div>
        </motion.section>
    );
}