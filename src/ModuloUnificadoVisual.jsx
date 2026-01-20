import React from "react";
import logo from './assets/logo-sintagline.svg';
import buffetHeader from './assets/buffet_header.png';

export default function ModuloUnificadoVisual() {
    return (
        <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 md:p-8 font-['Montserrat']">
            {/* Main Container - Single Slide Style */}
            <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[600px] border-4 border-white flex flex-col">

                {/* SLIDE 1: VISUAL IDENTITY */}
                <div className="relative bg-blue-700 flex-grow flex flex-col p-8 md:p-12 justify-between">
                    {/* Background Image & Overlay */}
                    <img src={buffetHeader} alt="School" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/60 to-blue-700/90"></div>

                    {/* Content */}
                    <div className="relative z-10 w-full flex flex-col items-start h-full justify-center">
                        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 w-fit px-6 py-4 rounded-xl mb-8">
                            <span className="text-white/90 text-xs font-bold uppercase tracking-widest mb-2">Biblioteca-Escuela</span>
                            <img src={logo} alt="Euforión" className="h-8 md:h-10 w-auto brightness-0 invert" />
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-xl mb-8">
                            1° Año <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Turno Tarde</span>
                        </h1>

                        <div className="inline-block bg-blue-500 text-white font-bold px-6 py-2 rounded-lg text-sm uppercase tracking-widest shadow-lg transform -rotate-2 mb-12">
                            Inauguración
                        </div>

                        <div className="relative z-10 max-w-lg">
                            <p className="text-blue-200 font-medium text-lg leading-relaxed">
                                Institución educativa con trayectoria, en el corazón de El Mondongo. <br />Próximos a cumplir 100 años.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
