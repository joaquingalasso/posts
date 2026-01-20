import React from "react";
import { Check, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ModuloUnificadoInfo() {
    return (
        <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 md:p-8 font-['Montserrat']">
            {/* Main Container - Single Slide Style */}
            <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[600px] border-4 border-white flex flex-col">

                {/* SLIDE 2: INFO & ACTION */}
                <div className="relative bg-slate-50 flex-grow p-8 md:p-12 flex flex-col justify-center">

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
                                    <Check className="w-5 h-5 stroke-[3]" />
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Cupo</span>
                                    <span className="text-slate-800 font-bold text-lg leading-tight">Exclusivo para<br />1° año</span>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="bg-purple-100 text-purple-700 p-2 rounded-lg">
                                    <Check className="w-5 h-5 stroke-[3]" />
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
                                    <Check className="w-5 h-5 stroke-[3]" />
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
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-left">
                                    <span className="block text-blue-200 text-xs font-bold uppercase tracking-wider">Correo Electrónico</span>
                                    <span className="font-bold text-xl md:text-2xl break-all">secretariaeuforion@gmail.com</span>
                                </div>
                                <ArrowRight className="ml-auto w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* Tiny Footer */}
                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-slate-400 text-xs font-semibold uppercase tracking-wide">
                        <MapPin className="w-4 h-4 mr-2" />
                        Diag. 79 N° 371 — Lun a Vie 14 a 20 hs
                    </div>

                </div>
            </div>
        </div>
    );
}
