function Alibaba() {
  const provider = {
    id: 'alibaba',
    name: 'علي بابا كلاود (Alibaba Cloud)',
    description: 'خدمات سحابية صينية المنشأ مع تواجد محلي في المملكة',
    image: '/alibaba.webp',
    details: `أطلقت علي بابا كلاود أول مركز بيانات لها في الرياض عام 2022، بالتعاون مع شركة الاتصالات السعودية (STC). في عام 2023، اختارت علي بابا كلاود حي الملك عبدالله المالي (KAFD) كموقع رئيسي لعملياتها في المملكة، مما يعكس التزامها بدعم التحول الرقمي في السعودية من خلال تقديم خدمات سحابية متقدمة وحلول ذكاء اصطناعي.`
  };

  return (
    <main className="relative w-full flex items-center justify-center p-4" dir="rtl">
      <img
        src={provider.image}
        className="fixed inset-0 w-full h-full object-cover"
      />
      <div className="fixed inset-0 bg-black/50" />

      <section className="relative bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 max-w-3xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center font-['Cairo']">
          {provider.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-center mb-8 font-['Cairo']">
          {provider.description}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed font-['Cairo']">
          {provider.details}
        </p>
      </section>
    </main>
  );
}

export default Alibaba;