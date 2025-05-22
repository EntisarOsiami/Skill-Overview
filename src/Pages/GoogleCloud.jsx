import React from 'react';

function GoogleCloud() {
  const provider = {
    id: 'gcp',
    name: 'منصة جوجل السحابية (Google Cloud Platform)',
    description: 'حلول سحابية متقدمة مع تركيز على الذكاء الاصطناعي في المملكة',
    image: '/google.jpg',
    details: `أطلقت جوجل كلاود أول منطقة سحابية لها في الدمام، المملكة العربية السعودية، في عام 2023، بالتعاون مع شركة أرامكو. في أكتوبر 2024، أعلنت جوجل كلاود وصندوق الاستثمارات العامة عن شراكة لتطوير مركز عالمي للذكاء الاصطناعي في الدمام، يهدف إلى تدريب الملايين من الطلاب والمهنيين السعوديين على تقنيات الذكاء الاصطناعي، وتعزيز التطبيقات المحلية للغة العربية.`
  };

  return (
    <main className="relative  w-full flex items-center justify-center p-4">
      <img
        src={provider.image}
        className="fixed inset-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 bg-black/50" />

      <section className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center">
          {provider.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-center mb-8">
          {provider.description}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          {provider.details}
        </p>
      </section>
    </main>
  );
}

export default GoogleCloud;