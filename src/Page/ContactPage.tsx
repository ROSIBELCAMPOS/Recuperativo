import { useState } from 'react';
import Input from '../Components/Input';
import Textarea from '../Components/TextArea';
import Button from '../Components/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar los datos a una API, un servicio de email, etc.
    console.log('Datos del formulario:', formData);
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Contáctanos</h1>
      <p className="text-center text-gray-700 mb-8">
        ¿Tienes alguna pregunta sobre nuestros cursos o necesitas más información? ¡No dudes en escribirnos!
      </p>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <Input
          label="Nombre completo"
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Correo electrónico"
          id="email"
          name="email"
          type="email"
          placeholder="tu@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          label="Tu mensaje"
          id="message"
          name="message"
          placeholder="Escribe aquí tu consulta..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full mt-4">
          Enviar Mensaje
        </Button>
      </form>
    </div>
  );
};

export default ContactPage;