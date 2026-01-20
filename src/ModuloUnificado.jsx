
import React from "react";
import { Check, Mail, MapPin, ArrowRight, User, FlaskConical, Sparkles } from "lucide-react";
import logo from './assets/logo-sintagline.svg';
import imagenSecundario from './assets/imagen-secundario.jpg';

export default function ModuloUnificado() {
    return (
        <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 md:p-8 font-['Montserrat']">

            {/* Main Container - Flex Row for Layout Control */}
            <div className="relative w-fit bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] border-4 border-white">

                {/* --- LEFT PANEL: VISUAL IDENTITY --- */}
                {/* Puedes cambiar el ancho aquí: md:w-[650px] */}
                <div className="relative bg-blue-700 overflow-hidden flex flex-col p-8 md:p-12 justify-between md:w-[650px] shrink-0 items-center text-center">
                    {/* Background Image & Overlay */}
                    <img src={imagenSecundario} alt="School" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-700/60"></div>

                    {/* Content */}
                    <div className="relative z-10 w-full flex flex-col items-center">
                        <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 w-fit px-6 py-4 rounded-xl mb-8">
                            <span className="text-white/90 text-xs font-bold uppercase tracking-widest mb-2">Biblioteca-Escuela</span>
                            <img src={logo} alt="Euforión" className="h-8 md:h-10 w-auto brightness-0 invert" />
                        </div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-xl">
                            1° Año <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Turno <br />Tarde</span>
                        </h1>

                        <div className="mt-6 mb-8 inline-block bg-blue-500 text-white font-bold px-6 py-2 rounded-lg text-sm uppercase tracking-widest shadow-lg transform -rotate-2">
                            Apertura
                        </div>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <p className="text-blue-200 font-medium text-lg leading-relaxed  max-w-md mx-auto">
                            Asociación Civil con fuerte impronta barrial, <br />dentro del Casco Urbano.
                            <span className="block mt-4 text-white font-bold text-xl tracking-wide">
                                Nuestra institución, <br />próxima a cumplir 100 años.
                            </span>
                        </p>
                    </div>
                </div>

                {/* Swipe Indicator Anchor (Centered precisely at the seam) */}
                <div className="relative hidden md:block w-0 h-auto self-stretch z-30">
                    <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-white text-blue-600 rounded-full p-3 shadow-xl border-4 border-slate-50 flex items-center justify-center pointer-events-none">
                            <ArrowRight className="w-6 h-6 stroke-[2.5]" />
                        </div>
                    </div>
                </div>

                {/* --- RIGHT PANEL: INFO & ACTION --- */}
                {/* Puedes cambiar el ancho aquí: md:w-[750px] */}
                <div className="relative bg-slate-50 p-8 md:p-12 flex flex-col justify-center md:w-[750px] shrink-0" style={{ paddingLeft: "90px" }}>

                    {/* Features Section */}
                    <div className="mb-10">
                        <h2 className="text-blue-900 font-black text-3xl mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                            ¿Cómo es la propuesta?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Item 1 */}
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                                    <User className="w-5 h-5 stroke-[2.5]" />
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Cupo</span>
                                    <span className="text-slate-800 font-bold text-lg leading-tight">Exclusivo para<br />1° año T. Tarde</span>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-purple-100 text-purple-700 p-2 rounded-lg">
                                    <FlaskConical className="w-5 h-5 stroke-[2.5]" />
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Orientación</span>
                                    <span className="text-slate-800 font-bold text-lg leading-tight">Ciencias<br />Naturales</span>
                                </div>
                            </div>

                            {/* Item 3 - Full Width Highlight */}
                            <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-blue-500 p-5 rounded-2xl shadow-md text-white flex items-center gap-5 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 w-32 h-full bg-white/10 skew-x-12 -mr-8 group-hover:-mr-4 transition-all"></div>
                                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                    <Sparkles className="w-5 h-5 stroke-[2.5]" />
                                </div>
                                <div className="relative z-10">
                                    <span className="block text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Beneficio Lanzamiento</span>
                                    <span className="text-white font-bold text-lg">Abonando la matrícula 2026,<br /> la <span className="underline decoration-2 underline-offset-2">1ª cuota es bonificada</span>.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Separator */}
                    <hr className="border-slate-200 mb-8" />

                    {/* Contact Section */}
                    <div>
                        <p className="text-slate-500 font-medium mb-6">
                            Escribinos para recibir más información:
                        </p>

                        <div className="w-full">
                            {/* Email Btn */}
                            <a href="mailto:secretariaeuforion@gmail.com" className="group flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <Mail className="w-6 h-6 text-white stroke-[2.5]" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-blue-200 text-xs font-bold uppercase tracking-wider">Correo Electrónico</span>
                                    <span className="font-bold text-xl md:text-2xl break-all">secretariaeuforion@gmail.com</span>
                                </div>
                                <ArrowRight className="ml-auto w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all stroke-[2.5]" />
                            </a>
                        </div>
                    </div>

                    {/* Tiny Footer */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-slate-400 text-sm font-bold uppercase tracking-wide">
                        <MapPin className="w-4 h-4 mr-2 stroke-[2.5]" />
                        Diag. 79 N° 371 — Horario de Verano: Lun a Vie 8 a 16 hs
                    </div>

                </div>
            </div>
        </div>
    );
}
