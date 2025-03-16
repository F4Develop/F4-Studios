"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D1F] via-[#1A1A2F] to-[#0D0D1F] text-white font-sans relative overflow-hidden">
      {/* Background Overlays */}
      <div className="fixed inset-0">
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-br from-violet-900/20 to-transparent"></div>
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tl from-purple-900/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] rounded-full bg-gradient-to-r from-fuchsia-900/10 via-violet-900/10 to-purple-900/10 blur-3xl"></div>
      </div>

      {/* Wave Effect */}
      <div className="fixed inset-0">
        <svg className="absolute w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: 'rgb(167, 139, 250)', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path d="M-100,160 C300,300 400,100 800,200 C1200,300 1300,100 1700,200 L1700,00 L-100,0 Z" fill="url(#wave-grad)" />
          <path d="M-100,100 C250,200 350,0 750,100 C1150,200 1250,0 1650,100 L1650,00 L-100,0 Z" fill="url(#wave-grad)" opacity="0.5" />
        </svg>
      </div>

      {/* Light Effects */}
      <div className="fixed inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] sm:w-[800px] sm:h-[600px] bg-purple-500/10 rounded-full filter blur-[120px] transform rotate-12"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] sm:w-[800px] sm:h-[600px] bg-violet-500/10 rounded-full filter blur-[120px] transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[100px] sm:w-[1000px] sm:h-[200px] bg-fuchsia-500/10 rounded-full filter blur-[150px] rotate-45"></div>
      </div>

      {/* Subtle Sparkles */}
      <div className="fixed inset-0">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-violet-400 rounded-full filter blur-sm"></div>
        <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-fuchsia-400 rounded-full filter blur-sm"></div>
        <div className="absolute bottom-[40%] left-[30%] w-1 h-1 bg-purple-400 rounded-full filter blur-sm"></div>
        <div className="absolute top-[60%] right-[40%] w-1 h-1 bg-violet-400 rounded-full filter blur-sm"></div>
      </div>

      {/* Improved Gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/30 via-transparent to-purple-900/30 opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-900/30 via-transparent to-violet-900/30 opacity-40"></div>
      </div>

      {/* Contrast Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0D0D1F]/70 via-transparent to-[#0D0D1F]/70"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 2 }}
            className="relative h-full"
          >
            <Image
              src="/studio-banner.jpg"
              alt="F4 Studios Banner"
              layout="fill"
              objectFit="cover"
              priority
              className="filter brightness-40 contrast-125 saturate-50 blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1F] via-transparent to-[#0A0A1F] opacity-90"></div>
          </motion.div>
        </div>

        <div className="relative z-20 max-w-[1150px] mx-auto px-6 sm:px-8 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Left Column: Logo and Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 lg:pr-4 text-center lg:text-left"
          >
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0 lg:ml-30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/30 to-fuchsia-600/30 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-violet-500/20 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                <Image
                  src="/2.png"
                  alt="F4 Studios Logo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 blur-3xl rounded-full"
              />
            </motion.div>

            <motion.h1
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-white/90 inline-block"
              >
                Alt+F4
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500 inline-block"
              >
                Studios
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Right Column: Tagline, Description, and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 lg:pl-4 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.p
                  className="text-xl sm:text-2xl lg:text-3xl font-medium italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-300 mb-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  "Priorizando los Sueños y Diversion de los Jugadores"
                </motion.p>
                <p className="text-base sm:text-lg text-gray-400/90 leading-relaxed">
                  Creamos juegos y herramientas digitales que transforman ideas y sueños en realidad,
                  manteniendo siempre una calidad agradable y disfrutable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="/contacto"
                  className="group relative px-6 py-3 bg-gradient-to-r from-violet-700 to-purple-600 rounded-full text-base font-medium
                  overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] min-w-[160px]
                  border border-violet-400/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-400 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 blur-xl"></div>
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                  <div className="relative flex items-center justify-center">
                    <span className="mr-2 text-sm">Inicia tu Proyecto</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.a>
                <motion.a
                  href="/proyectos"
                  className="group relative px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-base font-medium
                  hover:bg-white/10 transition-all duration-300 border border-white/20
                  hover:border-violet-400/40 flex items-center justify-center min-w-[140px] text-xs
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-violet-500/5 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300"></div>
                  <span className="text-sm">Explora Trabajos</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-violet-400 text-2xl cursor-pointer hover:text-violet-300 transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            ↓
          </motion.div>
        </motion.div>

        {/* Decorative Circles */}
        <motion.div
          className="absolute top-1/3 right-[5%] w-24 h-24 sm:w-48 sm:h-48 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 left-[5%] w-36 h-36 sm:w-72 sm:h-72 bg-fuchsia-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </section>

      {/* Current Projects */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-[1150px] mx-auto px-6 sm:px-8 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Proyectos</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400/90 max-w-3xl mx-auto mb-6 sm:mb-8">
              Actualmente estamos trabajando en emocionantes proyectos que pronto compartiremos con ustedes.
              ¡Mantente atento a nuestras próximas actualizaciones!
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-md text-center"
            >
              <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-violet-500/10
                hover:bg-white/[0.05] transition-all duration-500 transform hover:-translate-y-1
                hover:border-violet-500/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
              >
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-xl
                    group-hover:from-violet-600/30 group-hover:to-fuchsia-600/30 transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center w-full h-full">
                    <Image
                      src="https://img.icons8.com/nolan/64/project.png"
                      alt="Nuevos Proyectos"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-violet-400">Próximamente</h3>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 text-white/90">Nuevos Proyectos</h4>
                <p className="text-fuchsia-400/90 mb-4 font-medium">En Desarrollo</p>
                <p className="text-gray-400/90 text-sm">
                  Estamos trabajando arduamente en crear experiencias únicas y emocionantes.
                  Pronto podrás descubrir nuestros proyectos en desarrollo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-[1150px] mx-auto px-6 sm:px-8 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Desarrollo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Juegos</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center text-center">
            {[
              {
                icon: "https://img.icons8.com/nolan/64/multiple-devices.png",
                title: "Multiplataforma",
                description: "Desarrollamos para PC, consolas y dispositivos móviles, asegurando una experiencia consistente en todas las plataformas."
              },
              {
                icon: "https://img.icons8.com/nolan/64/puzzle.png",
                title: "Multigénero",
                description: "Desde RPGs hasta shooters, creamos experiencias únicas en diversos géneros adaptados a tu visión."
              },
              {
                icon: "https://img.icons8.com/nolan/64/copyright.png",
                title: "Juegos Originales",
                description: "Creamos propiedades intelectuales únicas con historias cautivadoras y mecánicas innovadoras."
              },
              {
                icon: "https://img.icons8.com/nolan/64/five-nights-at-freddys.png",
                title: "Fangames",
                description: "Desarrollamos juegos basados en franquicias populares, respetando y honrando el material original."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-violet-500/10
                  hover:bg-white/[0.05] transition-all duration-500 h-full transform hover:-translate-y-1
                  hover:border-violet-500/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                >
                  <div className="text-gray-300 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500
                    group-hover:text-violet-400">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white/90">{service.title}</h3>
                  <p className="text-gray-400/90 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-[1150px] mx-auto px-6 sm:px-8 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Desarrollo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Software</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center text-center">
            {[
              {
                icon: "https://img.icons8.com/nolan/64/workstation.png",
                title: "Software para Computadoras",
                description: "Aplicaciones de escritorio optimizadas y eficientes para mejorar tu productividad."
              },
              {
                icon: "https://img.icons8.com/nolan/64/laptop-settings.png",
                title: "Herramientas de Desarrollo",
                description: "Soluciones especializadas para desarrolladores que optimizan el flujo de trabajo."
              },
              {
                icon: "https://img.icons8.com/nolan/64/games-folder.png",
                title: "Herramientas Gamer",
                description: "Utilidades diseñadas específicamente para mejorar tu experiencia gaming."
              }
            ].map((software, index) => (
              <motion.div
                key={software.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-violet-500/10
                  hover:bg-white/[0.05] transition-all duration-500 h-full transform hover:-translate-y-1
                  hover:border-violet-500/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                >
                  <div className="text-gray-300 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500
                    group-hover:text-violet-400">
                    <Image
                      src={software.icon}
                      alt={software.title}
                      width={48}
                      height={48}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white/90">{software.title}</h3>
                  <p className="text-gray-400/90 text-sm leading-relaxed">
                    {software.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 sm:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-[1150px] mx-auto px-6 sm:px-8 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Tecnologías</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center text-center">
            {[
              {
                icon: "/icons/Unity.svg",
                name: "Unity",
                desc: "Motor de Desarrollo 3D",
                color: "violet"
              },
              {
                icon: "/icons/Blender.svg",
                name: "Blender",
                desc: "Modelado y Animación 3D",
                color: "purple"
              },
              {
                icon: "/icons/GameMakerStudios.svg",
                name: "GameMaker Studios",
                desc: "Desarrollo 2D Avanzado",
                color: "fuchsia"
              },
              {
                icon: "/icons/RpgPaperMaker.svg",
                name: "RPG Paper Maker",
                desc: "Creación de RPGs 2.5D",
                color: "pink"
              },
              {
                icon: "/icons/Ren'Py.svg",
                name: "Ren'Py",
                desc: "Novelas Visuales",
                color: "rose"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10
                  hover:bg-white/[0.05] transition-all duration-500 transform hover:-translate-y-2
                  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-xl opacity-0
                  group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay rounded-xl"></div>
                <div className="relative z-10">
                  <div className="text-gray-300 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500
                    group-hover:text-violet-400 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white/90">{tech.name}</h3>
                  <p className="text-gray-400/90 text-sm">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-[1150px] mx-auto px-6 sm:px-8 lg:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Apoya Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Trabajo</span>
            </h2>
            <p className="text-lg text-gray-400/90 max-w-3xl mx-auto">
              Tu apoyo nos ayuda a seguir creando contenido innovador y herramientas útiles para la comunidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center text-center">
            {[
              {
                platform: "Patreon",
                icon: "/icons/Patreon.svg",
                description: "Conviértete en patrocinador y obtén acceso exclusivo a contenido, herramientas beta y más.",
                buttonText: "Apóyanos en Patreon",
                buttonColor: "from-[#FF424D] to-[#F96854]",
                link: "https://www.patreon.com/F4Studios"
              },
              {
                platform: "PayPal",
                icon: "/icons/Paypal.svg",
                description: "Realiza una donación única o recurrente para apoyar nuestros proyectos y desarrollo.",
                buttonText: "Donar con PayPal",
                buttonColor: "from-[#003087] to-[#009cde]",
                link: "https://paypal.me/F4studiosOfficial?country.x=VE&locale.x=es_XC"
              }
            ].map((option, index) => (
              <motion.div
                key={option.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-violet-500/10 
                    hover:bg-white/[0.05] transition-all duration-500 h-full
                    hover:border-violet-500/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
                >
                  <div className="text-gray-300 mb-4 group-hover:scale-110 transition-transform duration-500 
                    group-hover:text-violet-400">
                    <Image
                      src={option.icon}
                      alt={option.platform}
                      width={48}
                      height={48}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white/90">{option.platform}</h3>
                  <p className="text-gray-400/90 mb-4 sm:mb-6">{option.description}</p>
                  <motion.a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${option.buttonColor} rounded-full text-white font-medium 
                      transition-all duration-300 hover:shadow-lg text-sm sm:text-base`}
                  >
                    {option.buttonText}
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer mejorado */}
      <footer className="relative py-16 px-6 sm:px-8 lg:px-12 border-t border-violet-500/20 bg-gradient-to-b from-[#0A0A1F] to-[#0A0A2F]">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-transparent to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(138,43,226,0.1),transparent_50%)]"></div>
        <div className="max-w-[1400px] mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border border-violet-500/20">
                  <Image
                    src="/2.png"
                    alt="F4 Studios Logo"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="text-gray-400/90 text-sm">
                Moldeando ideas en experiencias y proyectos digitales extraordinarias.
              </p>
            </div>
            
            <div>
              <h3 className="text-white/90 font-bold mb-6">Servicios</h3>
              <ul className="space-y-4">
                {[
                  { name: "Desarrollo de Juegos", href: "/juegos" },
                  { name: "Software Empresarial", href: "/software" },
                  { name: "Proyectos", href: "/proyectos" }
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400/90 hover:text-violet-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white/90 font-bold mb-6">Contacto</h3>
              <ul className="space-y-4 text-gray-400/90">
                <li>F4Studios.Official@Gmail.com</li>
                <li>Venezuela, Caracas</li>
              </ul>
            </div>
 
            <div>
              <h3 className="text-white/90 font-bold mb-6">Síguenos</h3>
              <div className="flex space-x-4">
                {[
                  { icon: "facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { icon: "twitter", path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                  { icon: "instagram", path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.06-4.859.06-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.824-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" }
                ].map((social) => (
                  <a
                    key={social.icon} 
                    href="#"
                    className="text-gray-400/90 hover:text-violet-400 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-violet-500/10 text-center">
            <p className="text-gray-400/90">
              © 2025 Alt+F4 Studios. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}