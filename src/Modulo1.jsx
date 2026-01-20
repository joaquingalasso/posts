
import React from "react";
import logo from './assets/logo-sintagline.svg';
import imagenSecundario from './assets/imagen-secundario.jpg';

export default function Modulo1() {
    return (
        <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 font-['Montserrat']">
            {/* Module Container - Aspect Ratio 4:5 */}
            {/* Increased max-width and reduced padding as requested */}
            <div className="w-full max-w-[650px] aspect-[4/5] relative bg-blue-700 overflow-hidden flex flex-col p-8 justify-between shadow-2xl rounded-none md:rounded-[2rem] border-4 border-white text-white">

                {/* Background Image & Overlay */}
                <div className="absolute inset-0">
                    <img src={imagenSecundario} alt="School" className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale-0" />
                    {/* Reduced gradient opacity to show more of the image ("capa del degradado") */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-700/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col items-center text-center mt-8">
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl mb-8 transform hover:scale-105 transition-transform duration-500">
                        <span className="text-white/90 text-xs font-bold uppercase tracking-[0.2em] mb-3">Biblioteca-Escuela</span>
                        <img src={logo} alt="Euforión" className="h-12 w-auto brightness-0 invert" />
                    </div>

                    <h1 className="text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-2xl mb-4">
                        1° Año
                    </h1>
                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white tracking-tight uppercase mb-8">
                        Turno Tarde
                    </h2>

                    <div className="inline-block bg-blue-500 text-white font-bold px-8 py-2 rounded-full text-base uppercase tracking-widest shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                        Inauguración
                    </div>
                </div>

                <div className="relative z-10 mb-8 text-center">
                    <p className="text-blue-100 font-medium text-lg leading-relaxed max-w-xs mx-auto">
                        Asociación Civil con fuerte impronta barrial, en el corazón del Casco Urbano.
                        <span className="text-white font-bold mt-4 block text-xl">
                            Nuestra institución, próxima a cumplir 100 años.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
