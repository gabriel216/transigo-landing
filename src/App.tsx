import { useState } from 'react'
import './App.css'

function App() {
  const [fromLocation, setFromLocation] = useState('')
  const [toLocation, setToLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se implementaría la lógica de búsqueda
    console.log('Buscando rutas desde:', fromLocation, 'hasta:', toLocation)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary-100 to-primary-300 py-3 md:py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 md:px-5 flex justify-between items-center">
          <div className="flex flex-col">
            <img src="/transigo-logo.png" alt="logo" className="w-auto h-5 md:h-6" />
            <span className="text-xs md:text-sm opacity-90 text-gray-600 hidden sm:block">¿Cuándo llega tu bus?</span>
          </div>
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <a href="#features" className="text-gray-600 no-underline font-medium transition-colors duration-300 px-3 lg:px-4 py-2 rounded-lg hover:text-primary-600 text-sm lg:text-base">Características</a>
            <a href="#how-it-works" className="text-gray-600 no-underline font-medium transition-colors duration-300 px-3 lg:px-4 py-2 rounded-lg hover:text-primary-600 text-sm lg:text-base">Cómo funciona</a>
            <a href="#contact" className="text-gray-600 no-underline font-medium transition-colors duration-300 px-3 lg:px-4 py-2 rounded-lg hover:text-primary-600 text-sm lg:text-base">Contacto</a>
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-primary-200 transition-colors duration-300">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-400 to-primary-600 text-white py-12 md:py-16 min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">¿Cuándo llega tu bus?</h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0">Descubre en tiempo real cuándo llega tu próximo bus. No más esperas innecesarias, solo información precisa de llegadas.</p>
            
            {/* Search Form */}
            {/* <form className="bg-white p-8 rounded-2xl shadow-2xl text-gray-800" onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col">
                  <label htmlFor="from" className="font-semibold mb-2 text-gray-600">Desde</label>
                  <input
                    type="text"
                    id="from"
                    placeholder="Ubicación de origen"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="p-4 border-2 border-gray-200 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-primary-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="to" className="font-semibold mb-2 text-gray-600">Hasta</label>
                  <input
                    type="text"
                    id="to"
                    placeholder="Destino"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="p-4 border-2 border-gray-200 rounded-lg text-base transition-colors duration-300 focus:outline-none focus:border-primary-400"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-primary-400 to-primary-600 text-white border-none py-4 px-8 rounded-lg text-lg font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <span>Buscar rutas</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form> */}
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-64 sm:w-80 h-36 sm:h-48">
              <div className="text-4xl sm:text-6xl absolute left-0 top-1/2 transform -translate-y-1/2 animate-move-bus">🚌</div>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-sm transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                <div className="text-xl sm:text-2xl opacity-50 transition-opacity duration-300 animate-pulse-slow">📍</div>
                <div className="text-xl sm:text-2xl opacity-50 transition-opacity duration-300">📍</div>
                <div className="text-xl sm:text-2xl opacity-50 transition-opacity duration-300">📍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-5">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-800 px-4">Siempre sabrás cuándo llega tu bus</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 animate-countdown">⏱️</div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Llegadas en tiempo real</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Ve exactamente cuándo llega tu próximo bus con información actualizada al instante.</p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 animate-pulse-slow">⏳</div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Conteo regresivo preciso</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Sabe exactamente cuántos minutos faltan para que llegue tu bus con conteo regresivo en tiempo real.</p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">⏰</div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Sin esperas innecesarias</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Llega justo a tiempo a la parada. No más esperas largas ni llegar muy temprano.</p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary-200">
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">🚌</div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Todas las líneas</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Ve las llegadas de todas las líneas de bus en tu parada. Elige la que llegue primero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-6xl mx-auto px-4 md:px-5">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-800 px-4">¿Cómo saber cuándo llega tu bus?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mx-auto mb-4 md:mb-6">1</div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Selecciona tu parada</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed px-2">Elige la parada donde estás esperando y hacia dónde quieres ir.</p>
            </div>
            <div className="text-center relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mx-auto mb-4 md:mb-6">2</div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Ve cuándo llegan</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed px-2">Recibe la hora exacta de llegada de cada bus con conteo regresivo en tiempo real.</p>
            </div>
            <div className="text-center relative">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-bold mx-auto mb-4 md:mb-6">3</div>
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-800">Llega a tiempo</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed px-2">Llega justo cuando el bus está por llegar. No más esperas largas en la parada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary-400 to-primary-600 text-white text-center">
        <div className="max-w-6xl mx-auto px-4 md:px-5">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">¿Listo para saber cuándo llega tu bus?</h3>
          <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-90 px-4">Descarga la aplicación y nunca más esperes sin saber cuándo llegará tu próximo bus.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-primary-400 border-none py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto">
              <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-1.013-2.07-1.185-.273-.156-.465-.39-.465-.68 0-.39.317-.707.707-.707.175 0 .33.064.45.178.195.186.4.334.6.334.2 0 .405-.148.6-.334.12-.114.275-.178.45-.178.39 0 .707.317.707.707 0 .29-.192.524-.465.68-.312.172-1.773 1.036-2.07 1.185-.297.149-.465.39-.465.68 0 .39.317.707.707.707.175 0 .33-.064.45-.178.195-.186.4-.334.6-.334.2 0 .405.148.6.334.12.114.275.178.45.178.39 0 .707-.317.707-.707 0-.29-.168-.531-.465-.68z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Descargar para Android</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="text-center sm:text-left">
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">TransiGO</h4>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">Siempre sabrás cuándo llega tu bus con información en tiempo real.</p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm md:text-base text-gray-300 no-underline transition-colors duration-300 hover:text-primary-400">Características</a></li>
                <li><a href="#how-it-works" className="text-sm md:text-base text-gray-300 no-underline transition-colors duration-300 hover:text-primary-400">Cómo funciona</a></li>
                <li><a href="#contact" className="text-sm md:text-base text-gray-300 no-underline transition-colors duration-300 hover:text-primary-400">Contacto</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
              <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Contacto</h4>
              <p className="text-sm md:text-base text-gray-300">info@transigo.com</p>
              <p className="text-sm md:text-base text-gray-300">+58 (412) 973-52-78</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center text-gray-300">
            <p className="text-sm md:text-base">&copy; 2025 TransiGO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
