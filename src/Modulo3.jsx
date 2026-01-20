import React from "react";
import { Star, Mail, Instagram, ArrowRight } from "lucide-react";

export default function Modulo3() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 flex items-center justify-center p-4 font-['Montserrat']">
            {/* Card Container */}
            <div className="w-full max-w-md bg-slate-50 rounded-none md:rounded-3xl shadow-2xl overflow-hidden relative aspect-[9/16] md:aspect-[3/4] flex flex-col font-sans border-4 border-white/20">

                {/* Content Area */}
                <div className="flex-1 px-8 py-10 flex flex-col items-center">

                    {/* Title */}
                    <h1 className="text-blue-900 text-4xl font-black text-center leading-tight mb-2 tracking-tight">
                        Para sumarte a la <span className="text-blue-600">lista de espera</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-slate-500 font-medium mb-8 text-center">
                        Enviá estos datos por IG o al mail:
                    </p>

                    {/* Contact Actions */}
                    <div className="w-full space-y-3 mb-8">
                        <a href="mailto:secretariaeuforion@gmail.com" className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-400 transition-all">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Mail className="w-5 h-5" /></div>
                                <span className="font-bold text-slate-700 truncate text-sm sm:text-base">secretariaeuforion@gmail.com</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                        </a>

                        <a href="https://instagram.com/bibliotecaeuforion" target="_blank" className="group flex items-center justify-between bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-pink-400 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="bg-pink-50 p-2 rounded-lg text-pink-600"><Instagram className="w-5 h-5" /></div>
                                <span className="font-bold text-slate-700">@bibliotecaeuforion</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>

                    {/* Data Requirements List */}
                    <div className="w-full bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                        <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">Datos a enviar</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Nombre y apellido del estudiante</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Fecha de nacimiento</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Año y turno <span className="text-blue-600 font-bold">(1° Tarde)</span></span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Teléfono + mail del responsable</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-auto pt-6 text-xs text-slate-400 italic text-center">
                        Entrevistas según disponibilidad y orden de lista.
                    </div>
                </div>

                {/* Footer Bar */}
                <div className="w-full bg-slate-900 py-4 px-4 text-center relative overflow-hidden">
                    <p className="text-slate-300 text-xs font-medium">
                        <span className="font-bold text-white">Atención presencial:</span> Diag. 79 N° 371 — Lun a Vie 14 a 20 hs
                    </p>
                </div>

            </div>
        </div>
    );
}
