import React from "react";
import { Clock, MapPin, Mail, School, BookOpen, CheckCircle2, Instagram, ArrowRight, Star, Sparkles, ChevronRight } from "lucide-react";
import jobHeaderImg from './assets/job_header.png';
import logo from './assets/logo-sintagline.svg';

export default function SecundarioTarde() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
            {/* --- HERO SECTION --- */}
            <header className="relative h-[85vh] md:h-[75vh] min-h-[600px] flex items-end justify-center overflow-hidden">
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={jobHeaderImg}
                        alt="Background"
                        className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000 scale-105"
                    />
                    {/* Modern Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-6xl px-6 pb-20 md:pb-24">
                    {/* Logo & Tag */}
                    <div className="mb-8 animate-fade-in-up delay-100 flex flex-col md:flex-row md:items-center gap-4">
                        <img src={logo} alt="Euforión Logo" className="h-16 w-auto brightness-0 invert opacity-90" />
                        <span className="hidden md:block h-8 w-px bg-white/30"></span>
                        <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-blue-200 text-xs font-bold tracking-widest uppercase">
                            Ciclo Lectivo 2026
                        </span>
                    </div>

                    {/* Main Title */}
                    <div className="space-y-4 animate-fade-in-up delay-200">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                            SECUNDARIO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                                TURNO TARDE
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-300 max-w-2xl font-light">
                            Una nueva propuesta educativa pensada para vos, con la calidez y trayectoria de siempre.
                        </p>
                    </div>

                    {/* Quick Info Bar */}
                    <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-300">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 text-white">
                            <Clock className="w-5 h-5 text-blue-400" />
                            <span className="font-medium">13:00 a 18:00 hs</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 text-white">
                            <MapPin className="w-5 h-5 text-blue-400" />
                            <span className="font-medium">La Plata, Centro</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- CARDS SECTION --- */}
            <main className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 space-y-8 pb-24">

                {/* 1. KEY INFO CARD (Placa 1) */}
                <div className="bg-white rounded-3xl p-1 shadow-2xl transition hover:-translate-y-1 duration-300">
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-[22px] p-8 md:p-12 border border-blue-100 relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Sparkles className="w-48 h-48 text-blue-900" />
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                    <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Apertura Exclusiva</h3>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                                    Solo 1° Año
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                                    Iniciamos este nuevo turno dedicados exclusivamente a los ingresantes, garantizando una atención personalizada y un ambiente cuidado.
                                </p>
                            </div>

                            {/* Visual Seal */}
                            <div className="flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full animate-pulse"></div>
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center text-center w-full md:w-56 transform rotate-2 transition hover:rotate-0 duration-300">
                                    <span className="text-5xl font-black text-blue-600 mb-1">2026</span>
                                    <span className="text-slate-500 font-medium uppercase text-xs tracking-widest">Inscripciones</span>
                                    <div className="mt-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Abiertas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. DETAILS GRID (Placa 2) */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Orientación */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl hover:border-purple-200 transition duration-300 group">
                        <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <BookOpen className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Orientación en <br /><span className="text-purple-600">Ciencias Naturales</span></h3>
                        <p className="text-slate-500 leading-relaxed">
                            Una propuesta académica rigurosa y actualizada, fomentando el pensamiento científico, la curiosidad y el respeto por el medio ambiente.
                        </p>
                    </div>

                    {/* Beneficio Económico */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 hover:shadow-2xl hover:border-green-200 transition duration-300 group">
                        <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <Star className="w-7 h-7 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Beneficio <br /><span className="text-green-600">Especial Lanzamiento</span></h3>
                        <p className="text-slate-500 leading-relaxed">
                            Abonando la matrícula 2026 para el Turno Tarde, la <span className="font-bold text-slate-700 bg-green-50 px-1 rounded">1ª cuota queda 100% bonificada</span>.
                        </p>
                    </div>
                </div>

                {/* 3. CTA SECTION (Placa 3) */}
                <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl overflow-hidden">
                    <div className="relative bg-[#0f172a] rounded-[22px] px-8 py-16 md:p-16 text-center overflow-hidden">
                        {/* Abstract blobs */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -mr-20 -mb-20"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                ¿Querés reservar tu lugar?
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
                                Estamos armando la lista de espera. Si te interesa la propuesta, escribinos ahora.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                {/* Button: Email */}
                                <a
                                    href="mailto:secretariaeuforion@gmail.com"
                                    className="group relative flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-transform active:scale-95 hover:bg-blue-50"
                                >
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <span>Enviar Correo</span>
                                    <div className="absolute -inset-1 rounded-xl bg-white opacity-20 blur group-hover:opacity-40 transition"></div>
                                </a>

                                {/* Button: Instagram */}
                                <a
                                    href="https://instagram.com/bibliotecaeuforion"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all active:scale-95"
                                >
                                    <Instagram className="w-5 h-5 text-pink-400" />
                                    <span>Escribinos al MD</span>
                                </a>
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Diag. 79 N° 371
                                </div>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Atención: Lun a Vie 14 a 20 hs
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
