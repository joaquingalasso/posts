import React from "react";
import { Copy, Mail, MapPin, Calendar, Clock, DollarSign, BookOpen } from "lucide-react";
import buffetHeaderImg from './assets/imagen-buffet.webp';
import logo from './assets/logo-sintagline.svg';

export default function Licitacion() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl w-full mb-4">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-4 h-64 md:h-80 group">
                        {/* Image */}
                        <img
                            src={buffetHeaderImg}
                            alt="School Buffet"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60 flex flex-col justify-end p-8">
                            <img src={logo} alt="Logo" className="absolute top-6 left-8 h-12 w-auto opacity-90 drop-shadow-md brightness-0 invert" />
                            <p className="text-blue-200 font-bold tracking-widest uppercase mb-2 text-sm md:text-base drop-shadow-md">
                                Llamado a Licitación
                            </p>
                            <h1 className="text-white text-3xl md:text-5xl text-center md:text-left uppercase tracking-wide font-extrabold drop-shadow-lg">
                                Buffet Institucional<br />Año 2026/2029
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl w-full space-y-6">

                    {/* Detalles Generales */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="flex items-center gap-3">
                                <BookOpen className="text-blue-600 w-8 h-8 flex-shrink-0" />
                                <h2 className="text-blue-900 text-2xl font-bold">Convocatoria</h2>
                            </div>
                            <div>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    La <span className="font-bold text-blue-900">BIBLIOTECA ESCUELA EUFORIÓN</span> convoca a Licitación para la concesión del
                                    <span className="font-bold text-blue-600"> BUFFET INSTITUCIONAL</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Canon */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="flex items-center gap-3">
                                <DollarSign className="text-green-600 w-8 h-8 flex-shrink-0" />
                                <h2 className="text-blue-900 text-2xl font-bold">Valor del Canon</h2>
                            </div>
                            <div className="flex items-center">
                                <span className="text-4xl font-extrabold text-gray-800 tracking-tight">$350.000</span>
                            </div>
                        </div>
                    </div>

                    {/* Pliegos Section */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="flex items-center gap-3">
                                <Copy className="text-blue-600 w-8 h-8 flex-shrink-0" />
                                <h2 className="text-blue-900 text-2xl font-bold">Pliegos</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-700 font-medium">Solicitud vía correo electrónico:</p>
                                        <a href="mailto:direccioninstitucional@euforion.org.ar" className="text-blue-600 hover:underline font-semibold break-all">
                                            direccioninstitucional@euforion.org.ar
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-gray-700 font-medium">Recepción en sobre cerrado:</p>
                                        <p className="text-gray-600">Administración de Euforión, <span className="font-semibold text-gray-800">Diagonal 79 N° 371</span>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards Row (Fechas) */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Horario Entrega */}
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl text-white">
                            <div className="flex items-center gap-4 mb-4">
                                <Clock className="text-white/90 w-10 h-10 flex-shrink-0" />
                                <div>
                                    <div className="text-sm opacity-90 uppercase tracking-widest font-semibold">Entrega de Pliegos</div>
                                    <div className="text-2xl font-bold">8 a 16 hs</div>
                                </div>
                            </div>
                            <p className="opacity-90 border-t border-white/20 pt-3 mt-2">
                                Hasta el <span className="font-bold text-white">13 de febrero</span> inclusive.
                            </p>
                        </div>

                        {/* Apertura Sobres */}
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl text-white">
                            <div className="flex items-center gap-4 mb-4">
                                <Calendar className="text-white/90 w-10 h-10 flex-shrink-0" />
                                <div>
                                    <div className="text-sm opacity-90 uppercase tracking-widest font-semibold">Apertura de Sobres</div>
                                    <div className="text-2xl font-bold">16 de Febrero</div>
                                </div>
                            </div>
                            <p className="opacity-90 border-t border-white/20 pt-3 mt-2">
                                A las <span className="font-bold text-white">14:00 hs</span>.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
