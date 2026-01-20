import React from "react";
import { Clock, Briefcase, GraduationCap, Mail, MapPin, CheckCircle2 } from "lucide-react";
import jobHeaderImg from './assets/job_header.png';
import logo from './assets/logo-sintagline.svg';

export default function JobPreview() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
                {/* Header */}
                <div className="max-w-4xl w-full mb-4">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-4 h-64 md:h-80 group">
                        {/* Image */}
                        <img
                            src={jobHeaderImg}
                            alt="Community Manager Desk"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60 flex flex-col justify-end p-8">
                            <img src={logo} alt="Logo" className="absolute top-6 left-8 h-12 w-auto opacity-90 drop-shadow-md brightness-0 invert" />
                            <p className="text-blue-200 font-bold tracking-widest uppercase mb-2 text-sm md:text-base drop-shadow-md">
                                Convocatoria abierta
                            </p>
                            <h1 className="text-white text-3xl md:text-5xl text-center md:text-left uppercase tracking-wide font-extrabold drop-shadow-lg">
                                Diseñador Gráfico y<br />Community Manager
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl w-full space-y-6">
                    {/* Principales tareas */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="flex items-center gap-3">
                                <Briefcase className="text-blue-600 w-8 h-8 flex-shrink-0" />
                                <h2 className="text-blue-900 text-2xl font-bold">Principales tareas</h2>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            <span className="font-bold">Planificación de contenidos</span> junto a referentes de las distintas áreas de la organización.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            <span className="font-bold">Producción de piezas y publicaciones</span>: diseño gráfico y redacción de textos según cada plataforma.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            <span className="font-bold">Fotografía y cobertura</span> de eventos o actividades.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            <span className="font-bold">Gestión de mailing y reporte de métricas</span>: solicitud de envíos y elaboración de estadísticas para detectar oportunidades de mejora.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Estudios */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="flex items-center gap-3">
                                <GraduationCap className="text-blue-600 w-8 h-8 flex-shrink-0" />
                                <h2 className="text-blue-900 text-2xl font-bold">Estudios</h2>
                            </div>
                            <div className="flex items-center">
                                <p className="text-gray-700 text-lg">
                                    Licenciado/a o estudiante de <span className="font-semibold">Publicidad, Marketing,<br />Comunicación o Diseño</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Conocimientos requeridos */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="md:grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-blue-600 w-8 h-8 flex-shrink-0" />
                                <h2 className="text-blue-900 text-2xl font-bold">Conocimientos requeridos</h2>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">
                                            Dominio de herramientas de diseño gráfico y/o audiovisual<br /><span className="font-semibold">(Canva, Adobe CC, Figma u otras)</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">
                                            Conocimientos de analítica digital y medición de desempeño <br /><span className="font-semibold">(KPIs, Insights, reportes)</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">
                                            Conocimientos de Google Ads <br /><span className="font-semibold">(campañas, segmentación y optimización)</span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                                        <span className="text-gray-700">
                                            Conocimientos de pauta en redes sociales <br /><span className="font-semibold">(Meta Ads, objetivos, audiencias y métricas)</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards Row */}
                    {/* Footer Row (Horario, Zona, Contact) */}
                    <div className="grid md:grid-cols-[0.9fr_0.9fr_1.2fr] gap-6">
                        {/* Horario */}
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-4">
                                <Clock className="text-white w-10 h-10 flex-shrink-0" />
                                <div className="text-white">
                                    <div className="text-sm opacity-90 mb-1">Horario</div>
                                    <div className="text-2xl">Part time</div>
                                </div>
                            </div>
                        </div>

                        {/* Zona */}
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-4">
                                <MapPin className="text-white w-10 h-10 flex-shrink-0" />
                                <div className="text-white">
                                    <div className="text-sm opacity-90 mb-1">Zona de trabajo</div>
                                    <div className="text-2xl">La Plata</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact CTA (Mini Version) */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-1">
                                <Mail className="text-white w-6 h-6 flex-shrink-0" />
                                <div className="text-white text-sm opacity-90">Enviar CV a:</div>
                            </div>
                            <a
                                href="mailto:rrhhinstitucionallp@gmail.com"
                                className="text-white text-lg font-bold hover:underline break-all leading-tight"
                            >
                                rrhhinstitucionallp@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
