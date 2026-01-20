
import React from "react";
import { Check, Mail, MapPin, ArrowRight, User, FlaskConical, Sparkles } from "lucide-react";

export default function Modulo2() {
    return (
        <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 font-['Montserrat']">
            {/* Module Container - Aspect Ratio 4:5 */}
            <div className="w-full max-w-[650px] aspect-[4/5] relative bg-slate-50 p-8 flex flex-col justify-between shadow-2xl rounded-none md:rounded-[2rem] border-4 border-white">

                {/* Header Section */}
                <div>
                    <h2 className="text-blue-900 font-black text-3xl mb-8 flex items-center gap-3">
                        <span className="w-10 h-1.5 bg-blue-600 rounded-full"></span>
                        ¿Cómo es la propuesta?
                    </h2>

                    <div className="space-y-4">
                        {/* Item 1 */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                                <User className="w-5 h-5 stroke-[2.5]" />
                            </div>
                            <div>
                                <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Cupo</span>
                                <span className="text-slate-800 font-bold text-lg leading-tight">Exclusivo para<br />1° año</span>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-purple-100 text-purple-700 p-2 rounded-lg">
                                <FlaskConical className="w-5 h-5 stroke-[2.5]" />
                            </div>
                            <div>
                                <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Orientación</span>
                                <span className="text-slate-800 font-bold text-lg leading-tight">Ciencias<br />Naturales</span>
                            </div>
                        </div>

                        {/* Item 3 - Highlight */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-5 rounded-xl shadow-md text-white flex items-center gap-4 relative overflow-hidden group">
                            <div className="absolute right-0 top-0 w-32 h-full bg-white/10 skew-x-12 -mr-8 group-hover:-mr-4 transition-all"></div>
                            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                <Sparkles className="w-5 h-5 stroke-[2.5]" />
                            </div>
                            <div className="relative z-10">
                                <span className="block text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Beneficio Lanzamiento</span>
                                <span className="text-white font-bold text-lg leading-snug block">Abonando la matrícula 2026,<br /> la <span className="underline decoration-2 underline-offset-2">1ª cuota es bonificada</span>.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section (Contact) */}
                <div>
                    <hr className="border-slate-200 mb-6" />

                    <p className="text-slate-500 font-medium mb-4 text-sm">
                        Escribinos para recibir más información:
                    </p>

                    <a href="mailto:secretariaeuforion@gmail.com" className="group flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-2 rounded-lg">
                                <Mail className="w-5 h-5 text-white stroke-[2.5]" />
                            </div>
                            <div className="text-left w-full overflow-hidden">
                                <span className="block text-blue-200 text-[10px] font-bold uppercase tracking-wider mb-0.5">Correo Electrónico</span>
                                <span className="font-bold text-base md:text-lg truncate block">secretariaeuforion@gmail.com</span>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2 stroke-[2.5]" />
                    </a>

                    <div className="flex items-center justify-center text-slate-400 text-sm font-bold uppercase tracking-wide">
                        <MapPin className="w-4 h-4 mr-2 stroke-[2.5]" />
                        Diag. 79 N° 371 — Lun a Vie 8 a 16 hs
                    </div>
                </div>

            </div>
        </div>
    );
}
