import React from 'react';

export default function HeroBackground() {
    return (
        <div className="grid-background">
            {/* Horizontal Beams */}
            <div className="beam beam-h" style={{ top: '120px', animationDuration: '7s', animationDelay: '0s' }}></div>
            <div className="beam beam-h-rev" style={{ top: '300px', animationDuration: '12s', animationDelay: '2s' }}></div>
            <div className="beam beam-h" style={{ top: '480px', animationDuration: '9s', animationDelay: '1s' }}></div>
            <div className="beam beam-h-rev" style={{ top: '600px', animationDuration: '15s', animationDelay: '3.5s' }}></div>

            {/* Vertical Beams */}
            <div className="beam beam-v" style={{ left: '180px', animationDuration: '10s', animationDelay: '0.5s' }}></div>
            <div className="beam beam-v-rev" style={{ left: '600px', animationDuration: '8s', animationDelay: '2.5s' }}></div>
            <div className="beam beam-v" style={{ left: '960px', animationDuration: '11s', animationDelay: '1.5s' }}></div>
            <div className="beam beam-v-rev" style={{ left: '1320px', animationDuration: '13s', animationDelay: '0s' }}></div>
        </div>
    );
}