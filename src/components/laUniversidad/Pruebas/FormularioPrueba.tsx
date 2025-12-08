"use client";

import { useState } from "react";
import { FormularioProps } from "@/src/types";

export default function FormularioPrueba({
  id,
  title,
  description,
  email,
  tipoFormulario,
  campo = [],
  link = [],
}: Readonly<FormularioProps>) {
  
  // Dynamic form state
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Handle dynamic input changes
  const handleChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  // Form Submit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  // Normalizar claves para Strapi (Nombre -> nombre)
  const normalizedData = Object.fromEntries(
    Object.entries(formData).map(([key, value]) => [
      key.trim().charAt(0).toLowerCase() + key.trim().slice(1),
      value
    ])
  );

  // Armado del POST dinámico
  const postData = {
    data: {
      title: tipoFormulario,
      [tipoFormulario]: normalizedData
    }
  };

  console.log("POST que se enviará:", postData);

  try {
    const response = await fetch("http://localhost:1337/api/sub-pruebas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess(true);
      setFormData({});
    } else {
      console.error("Error Strapi:", data);
      setError("Error al enviar datos.");
    }
  } catch (err) {
    console.error(err);
    setError("No se pudo conectar al servidor.");
  }

  setIsSubmitting(false);
};

  return (
    <div className="px-8 mt-10" key={id}>
      <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-600 text-center">
          {description}
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* Dynamic Inputs */}
          {campo?.map((item, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {item.nameField}
              </label>

              <input
                type="text"
                required
                value={formData[item.nameField] || ""}
                onChange={(e) => handleChange(item.nameField, e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600 text-black"
                placeholder={item.placeHolder}
              />
            </div>
          ))}

          {/* Email input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>

            <input
              type="email"
              required
              value={formData["Email"] || ""}
              onChange={(e) => handleChange("Email", e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:border-green-600 text-black"
              placeholder={email}
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm">{error}</div>}

          {/* Success Message */}
          {success && <div className="text-green-500 text-sm">¡Gracias por enviar!</div>}

          {/* Dynamic Submit Buttons */}
          {link?.map((item, index) => (
            <button
              key={index}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition"
            >
              {isSubmitting ? "Enviando..." : item.label}
            </button>
          ))}

        </form>
      </div>
    </div>
  );
}
