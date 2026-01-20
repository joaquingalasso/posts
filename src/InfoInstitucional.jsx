import React from "react";
import { FileText, Database, PlusCircle, Settings, List, Book } from "lucide-react";

export default function InfoInstitucional() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 py-12 px-4">
            <div className="max-w-4xl mx-auto space-y-8">

                <div className="text-center text-white mb-8">
                    <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide drop-shadow-lg mb-2">
                        Documentación y Desglose
                    </h1>
                    <p className="text-blue-200">Información institucional consolidada</p>
                </div>

                {/* Section A: Brief */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-6 border-b pb-4">
                        <FileText className="text-blue-600 w-8 h-8" />
                        <h2 className="text-2xl font-bold text-blue-900">A) Brief / Pedido Original</h2>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p className="italic bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                            Actuar como encargado de marketing + comunicación de una institución educativa argentina, con sensibilidad social y foco en resultados.
                        </p>
                        <h3 className="font-bold text-lg text-gray-900 mt-4">Objetivo Principal</h3>
                        <p>Generar consultas calificadas y convertirlas en entrevistas/inscripciones para Secundario Turno Tarde (13–18 hs).</p>

                        <h3 className="font-bold text-lg text-gray-900 mt-4">Target</h3>
                        <p>Madres/padres/tutores de "clase media hacia abajo" (familias laburantes, con horarios complejos, que valoran contención, cercanía, costos previsibles, y una escuela de barrio pero seria).</p>

                        <h3 className="font-bold text-lg text-gray-900 mt-4">Reglas y Tono</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Español rioplatense. Cálido, directo, sin "chamuyo marketinero".</li>
                            <li>No estigmatizar ni hablar de pobreza: hablar de familias laburantes, horarios, organización, cercanía, cuidar el bolsillo.</li>
                            <li>No inventar datos (cuotas, descuentos, etc.). Usar placeholders si falta info.</li>
                            <li>Coherencia con institución de 98 años: tradición + actualización.</li>
                            <li>Siempre cerrar con CTA claro.</li>
                        </ul>
                    </div>
                </div>

                {/* Section B: Previous Data */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-6 border-b pb-4">
                        <Database className="text-purple-600 w-8 h-8" />
                        <h2 className="text-2xl font-bold text-purple-900">B) Datos Publicados (Piezas Previas)</h2>
                    </div>
                    <div className="space-y-4 text-gray-700">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Pieza Gráfica</h4>
                            <p>"CICLO LECTIVO 2026" | "¡ÚLTIMOS CUPOS!"</p>
                            <p>Cupos limitados para una propuesta educativa privada, laica y mixta, con doble turno de jornada simple en Euforión.</p>
                            <p className="mt-2 text-sm text-gray-600">Contacto: Diag. 79 N° 371 | Lun a Vie 14-20 hs | secretariaeuforion@gmail.com</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-sm uppercase text-gray-500 mb-2">Texto del Post (IG)</h4>
                            <p className="mb-2">📣 ¡INSCRIPCIONES 2026 | ÚLTIMOS CUPOS</p>
                            <p><span className="font-bold">Nivel Primario:</span> Turno mañana (7.45-12.45) y tarde (13-18). Incluye 4hs curriculares + 1h talleres.</p>
                            <p><span className="font-bold">Nivel Secundario:</span> Ciclo Superior Orientado en Comunicación (observación, análisis, producción).</p>
                        </div>
                    </div>
                </div>

                {/* Section C: New Data */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-400">
                    <div className="flex items-center gap-3 mb-4">
                        <PlusCircle className="text-green-600 w-8 h-8" />
                        <h2 className="text-2xl font-bold text-green-900">C) Nuevo Dato</h2>
                    </div>
                    <p className="text-xl font-medium text-green-800">
                        “El turno tarde contaría con una orientación en <span className="font-bold underline">CIENCIAS NATURALES</span>.”
                    </p>
                </div>

                {/* Section D: Secondary Specs */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-6 border-b pb-4">
                        <Settings className="text-gray-600 w-8 h-8" />
                        <h2 className="text-2xl font-bold text-gray-900">D) Especificación del Secundario</h2>
                    </div>
                    <div className="space-y-4 text-gray-700">
                        <ul className="list-none space-y-3">
                            <li className="font-medium">1.º a 6.º año, orientación en Comunicación.</li>
                            <li>
                                <span className="font-bold">Turno MAÑANA:</span> 7:15 a ~14:00 (varía según curso/día)
                            </li>
                            <li>
                                <span className="font-bold">Turno TARDE:</span> Sólo 1.° año
                            </li>
                        </ul>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
                            <p className="font-bold text-blue-900">👉 En el turno TARDE también se abona matrícula, pero la primera cuota queda bonificada.</p>
                        </div>
                    </div>
                </div>

                {/* Section E: Waiting List */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-6 border-b pb-4">
                        <List className="text-orange-600 w-8 h-8" />
                        <h2 className="text-2xl font-bold text-orange-900">E) Lista de Espera: Datos requeridos</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Apellido y nombre del/la estudiante</li>
                            <li>Fecha de nacimiento</li>
                            <li>Nivel (Inicial / Primario / Secundario)</li>
                            <li>Sala/Grado/Año y turno de interés</li>
                            <li>Escuela actual (si corresponde)</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Responsable a cargo</li>
                            <li>Teléfono de contacto</li>
                            <li>Mail de contacto</li>
                            <li>Motivo del cambio</li>
                            <li>¿Tiene hermano/familiar/referencia en Euforión?</li>
                        </ul>
                    </div>
                    <p className="mt-6 text-sm text-gray-500 italic">
                        "Las entrevistas se coordinan según disponibilidad y orden de lista de espera."
                    </p>
                </div>

                {/* Section F: Educational Proposal */}
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-3 mb-6 border-b pb-4">
                        <Book className="text-indigo-600 w-8 h-8" />
                        <h2 className="text-2xl font-bold text-indigo-900">F) Propuesta Educativa (Histórica)</h2>
                    </div>
                    <div className="prose max-w-none text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {`La Biblioteca Euforión ha sido fundada el día 3 de Agosto de 1927 por un grupo de alumnos del Colegio Nacional, liderados por Nicodema Scenna con el objetivo promover la cultura y la instrucción del barrio.

                        Su padrino, el escritor Ezequiel Martínez Estrada, sugiere el nombre de Euforión: "Euforion es el producto de una nueva civilización; es renovación constante que tiende hacia la perfección del ser humano..."

                        A partir de Abril de 1937, comenzó a funcionar el actual Jardín de Infantes Euforión.
                        
                        A principios de Marzo de 2010 abre sus puertas la Escuela Primaria Euforión.

                        A principios de Marzo de 2016, se da apertura a la ESCUELA SECUNDARIA EUFORION que busca suscitar una cultura apropiada, que asuma una función social incluyente, eduque para el trabajo y promueva valores en y para la libertad.

                        La meta como Institución Educativa está orientada hacia el hombre del mañana:
                        - Formación integral.
                        - Adquisición de valores en y para la libertad.
                        - Respeto a las personas.
                        - Sistema flexible, abierto, integrador, actualizado y dinámico.`}
                    </div>
                </div>

            </div>
        </div>
    );
}
