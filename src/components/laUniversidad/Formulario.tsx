'use client'
import { useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre || !email) {
      setError("Please fill in both fields.");
      return;
    }
    
    setIsSubmitting(true);
    setError(null); // Reset error message

    try {
      const response = await fetch('http://localhost:1337/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Nombre: nombre,
            Email: email,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setNombre(''); // Clear fields on success
        setEmail('');
      } else {
        setError('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setError('Error connecting to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="px-8 mt-10">
        <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Suscribite a nuestro boletín
          </h2>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600 text-black"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600 text-black"
                placeholder="tu@email.com"
              />
            </div>

            {/* Error or Success Message */}
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            {success && (
              <div className="text-green-500 text-sm">¡Gracias por suscribirte!</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition"
            >
              {isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario;
