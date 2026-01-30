import React, { useState } from 'react'

function App() {
  const [activeService, setActiveService] = useState(null)

  const services = [
    { name: 'Airtime', icon: '📱' },
    { name: 'Data', icon: '🌐' },
    { name: 'Netflix', icon: '🎬' },
    { name: 'Cable TV', icon: '📺' }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">NairaSwap</h1>
        <p className="text-gray-500">Crypto to Services Marketplace</p>
      </header>
      
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <button 
            key={service.name}
            className={`p-4 rounded-lg shadow-md transition-all duration-300 
              ${activeService === service.name 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-800 hover:bg-blue-50'}`}
            onClick={() => setActiveService(service.name)}
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <div className="font-semibold">{service.name}</div>
          </button>
        ))}
      </div>

      {activeService && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Purchase {activeService}</h2>
          {/* Will implement detailed service purchase flow later */}
          <p className="text-gray-500">Service purchase logic coming soon</p>
        </div>
      )}
    </div>
  )
}

export default App