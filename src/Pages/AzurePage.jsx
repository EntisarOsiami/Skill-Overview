import { Link } from 'react-router-dom';

function AzurePage() {
  const provider = {
    id: 'azure',
    name: 'مايكروسوفت أزور (Microsoft Azure)',
    description: 'منصة سحابية موثوقة تدعم التحول الرقمي في المملكة',
    image: '/azure.jpg',
    details: `أعلنت مايكروسوفت في ديسمبر 2024 عن اكتمال بناء ثلاث مناطق توافر (Availability Zones) في المنطقة الشرقية من المملكة، مع توقع بدء التشغيل في عام 2026. تهدف هذه البنية التحتية إلى تقديم خدمات سحابية عالية الأداء تدعم الخصوصية المحلية وتلبي احتياجات القطاعات الحكومية والخاصة، بما يتماشى مع رؤية السعودية 2030.`
  };

  return (
    <main className="relative  w-full flex items-center justify-center p-4" dir="rtl">
      <img
        src={provider.image}
        className="fixed inset-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 bg-black/50" />

      <section className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center font-arabic">
          {provider.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-center mb-8 font-arabic">
          {provider.description}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed font-arabic">
          {provider.details}
        </p>
      </section>
    </main>
  );
}

export default AzurePage;