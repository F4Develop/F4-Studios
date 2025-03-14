"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Proyectos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1118] via-[#131725] to-[#0f1118] text-white font-sans">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <Navbar />

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
          <p className="text-gray-400">© 2024 F4 Studios. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}