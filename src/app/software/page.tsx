"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Software() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1118] via-[#131725] to-[#0f1118] text-white font-sans">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <Navbar />

      <main className="pt-20">
        {/* Encabezado */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Desarrollo de <span className="text-blue-400">Software</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Creamos soluciones de software innovadoras y eficientes, adaptadas a las necesidades
                específicas de nuestros clientes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mensaje de No hay software */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl text-gray-300 italic"
            >
              "No hay software disponible en este momento. ¡Estén atentos!"
            </motion.div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center mb-16"
            >
              Tecnologías que <span className="text-blue-400">Utilizamos</span>
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <TechnologyItem name="React" icon="⚛️" />
              <TechnologyItem name="Node.js" icon="🚀" />
              <TechnologyItem name="Python" icon="🐍" />
              <TechnologyItem name="Docker" icon="🐳" />
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

interface TechnologyItemProps {
  name: string;
  icon: string;
}

function TechnologyItem({ name, icon }: TechnologyItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="font-medium">{name}</div>
    </motion.div>
  );
}