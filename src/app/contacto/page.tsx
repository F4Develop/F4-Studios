"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1118] via-[#131725] to-[#0f1118] text-white font-sans">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <Navbar />

      <main className="pt-20">
        {/* Encabezado */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-green-900/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="text-green-400">Contacto</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ponte en contacto con nosotros para cualquier consulta o propuesta.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formulario de Contacto */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-black/20 rounded-xl p-8">
            <motion.h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</motion.h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-gray-300 text-sm font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700"
                  placeholder="Tu email"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-gray-300 text-sm font-bold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Información de Contacto Adicional */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 className="text-3xl font-bold mb-8">Información Adicional</motion.h2>
            <motion.p className="text-gray-300">
              Puedes contactarnos también a través de:
              <br />
              Email: contacto@f4studios.com
            </motion.p>
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