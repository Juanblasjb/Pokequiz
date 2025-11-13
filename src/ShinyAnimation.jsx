import React from 'react';
import './ShinyAnimation.css';

// Componente para un único brillo (sparkle)
const Sparkle = ({ style }) => (
  // El 'wrapper' se encarga de la posición y de llamar a la animación
  <div className="sparkle-wrapper" style={style}>
    {/* Este SVG dibuja la forma exacta de la estrella y su resplandor */}
    <svg width="30" height="30" viewBox="0 0 50 50" className="sparkle-svg">
      <path 
        d="M25,0 L30.5,19.5 L50,25 L30.5,30.5 L25,50 L19.5,30.5 L0,25 L19.5,19.5 Z" 
        fill="#00BFFF" // Color base azul del resplandor
      />
      <path 
        d="M25,5 L28.5,21.5 L45,25 L28.5,28.5 L25,45 L21.5,28.5 L5,25 L21.5,21.5 Z" 
        fill="#7DF9FF" // Cian eléctrico más brillante
      />
      <path 
        d="M25,10 L27,23 L40,25 L27,27 L25,40 L23,27 L10,25 L23,23 Z" 
        fill="#FFFFFF" // Núcleo blanco
      />
    </svg>
  </div>
);

// Componente principal que crea y posiciona todos los brillos
const ShinyAnimation = () => {
  // Posiciones y retrasos ajustados para imitar la coreografía de la imagen
  const sparkles = [
    { top: '55%', left: '10%', animationDelay: '0s', transform: 'scale(0.8)' },
    { top: '20%', left: '25%', animationDelay: '0.1s', transform: 'scale(1.1)' },
    { top: '15%', left: '50%', animationDelay: '0.2s', transform: 'scale(0.9)' },
    { top: '25%', left: '80%', animationDelay: '0.3s', transform: 'scale(1.2)' },
    { top: '60%', left: '90%', animationDelay: '0.4s', transform: 'scale(0.8)' },
    { top: '85%', left: '75%', animationDelay: '0.5s', transform: 'scale(1.1)' },
    { top: '80%', left: '30%', animationDelay: '0.65s', transform: 'scale(1.0)' },
    { top: '90%', left: '50%', animationDelay: '0.8s', transform: 'scale(0.9)' },
  ];

  return (
    <div className="sparkle-container">
      {sparkles.map((style, index) => (
        <Sparkle key={index} style={style} />
      ))}
    </div>
  );
};

export default ShinyAnimation;