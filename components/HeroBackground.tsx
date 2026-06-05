import React from 'react';

type BeamDirection = "beam-h" | "beam-h-rev" | "beam-v" | "beam-v-rev";

interface BeamConfig {
    direction: BeamDirection;
    position: number;
    duration: number;
    delay: number;
}

const BEAMS: BeamConfig[] = [
    { direction: "beam-h",     position: 120,  duration: 7,    delay: 0   },
    { direction: "beam-h-rev", position: 300,  duration: 12,   delay: 2   },
    { direction: "beam-h",     position: 480,  duration: 9,    delay: 1   },
    { direction: "beam-h-rev", position: 600,  duration: 15,   delay: 3.5 },
    { direction: "beam-v",     position: 180,  duration: 10,   delay: 0.5 },
    { direction: "beam-v-rev", position: 800,  duration: 8,    delay: 2.5 },
    { direction: "beam-v",     position: 960,  duration: 11,   delay: 1.5 },
    { direction: "beam-v-rev", position: 1320, duration: 13,   delay: 0   },
];

function getBeamStyle(beam: BeamConfig): React.CSSProperties {
    const isHorizontal = beam.direction.startsWith("beam-h");
    return {
        [isHorizontal ? "top" : "left"]: `${beam.position}px`,
        animationDuration: `${beam.duration}s`,
        animationDelay: `${beam.delay}s`,
    };
}

export default function HeroBackground() {
    return (
        <div className="grid-background">
            {BEAMS.map((beam, index) => (
                <div
                    key={index}
                    className={`beam ${beam.direction}`}
                    style={getBeamStyle(beam)}
                />
            ))}
        </div>
    );
}
