"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Proyectos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D1F] via-[#1A1A2F] to-[#0D0D1F] text-white font-sans relative overflow-hidden">
      {/* Formas orgánicas de fondo */}
      <div className="fixed inset-0">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-900/20 to-transparent"></div>
        <div className="absolute bottom-0 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-purple-900/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-r from-fuchsia-900/10 via-violet-900/10 to-purple-900/10 blur-3xl"></div>
      </div>

      {/* Ondas suaves */}
      <div className="fixed inset-0">
        <svg className="absolute w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: 'rgb(167, 139, 250)', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path d="M-100,160 C300,300 400,100 800,200 C1200,300 1300,100 1700,200 L1700,00 L-100,0 Z"
            fill="url(#wave-grad)" />
          <path d="M-100,100 C250,200 350,0 750,100 C1150,200 1250,0 1650,100 L1650,00 L-100,0 Z"
            fill="url(#wave-grad)" opacity="0.5" />
        </svg>
      </div>

      {/* Efectos de luz difuminados */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-purple-500/10 rounded-full filter blur-[120px] transform rotate-12"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-violet-500/10 rounded-full filter blur-[120px] transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[200px] bg-fuchsia-500/10 rounded-full filter blur-[150px] rotate-45"></div>
      </div>

      {/* Destellos sutiles */}
      <div className="fixed inset-0">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-violet-400 rounded-full filter blur-sm"></div>
        <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-fuchsia-400 rounded-full filter blur-sm"></div>
        <div className="absolute bottom-[40%] left-[30%] w-1 h-1 bg-purple-400 rounded-full filter blur-sm"></div>
        <div className="absolute top-[60%] right-[40%] w-1 h-1 bg-violet-400 rounded-full filter blur-sm"></div>
      </div>

      {/* Gradientes mejorados */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/30 via-transparent to-purple-900/30 opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-900/30 via-transparent to-violet-900/30 opacity-40"></div>
      </div>

      {/* Overlay para mejorar contraste */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0D0D1F]/70 via-transparent to-[#0D0D1F]/70"></div>


      <main className="pt-20">
        {/* Encabezado */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-yellow-900/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Nuestros <span className="text-yellow-400">Proyectos</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubre los proyectos en los que estamos trabajando y cómo puedes colaborar con
                nosotros.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Proyecto en Desarrollo */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-8"
            >
              Proyecto en Desarrollo
            </motion.h2>
            <div className="bg-black/20 rounded-xl p-8">
              <motion.h3 className="text-2xl font-semibold mb-4">Nombre del Proyecto</motion.h3>
              <motion.p className="text-gray-300 mb-6">
                Descripción del proyecto en desarrollo. Aquí puedes agregar detalles sobre el
                proyecto, su estado actual y los objetivos que se persiguen.
              </motion.p>
              <motion.div className="flex justify-center">
                <a
                  href="#"
                  className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
                >
                  Más Información
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Solicitudes */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-8"
            >
              Envía tu Solicitud
            </motion.h2>
            <motion.p className="text-gray-300 text-center mb-8">
              ¿Tienes una idea para un juego, software o traducción? ¡Envíanos tu propuesta!
            </motion.p>
            <div className="flex justify-center">
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Formulario de Solicitud
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1118]/80 backdrop-blur-sm py-6 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 F4 Studios. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}