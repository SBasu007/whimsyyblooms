"use client";

import Image from "next/image";

const petals = Array.from({ length: 70 }).map((_, i) => ({
  id: i,
  left: -50 + Math.random() * 150,
  delay: Math.random() * 20,
  duration: 10 + Math.random() * 15,
  size: 12 + Math.random() * 28,
  drift: (Math.random() - 0.5) * 100,
  rotation: Math.random() * 360,
  opacity: 0.4 + Math.random() * 0.6,
  blur: Math.random() > 0.7 ? 2 : 0,
}));

export default function FloatingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={
            {
              left: `${petal.left}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              width: `${petal.size}px`,
              opacity: petal.opacity,
              filter: `blur(${petal.blur}px)`,
              "--drift": `${petal.drift}px`,
              "--rotation": `${petal.rotation}deg`,
            } as React.CSSProperties
          }
        >
          <Image
            src="/petal.png"
            alt=""
            width={petal.size}
            height={petal.size}
          />
        </div>
      ))}
    </div>
  );
}