function AWSPage() {
  const provider = {
    id: 'aws',
    name: 'خدمات أمازون ويب (AWS)',
    description: 'ريادة عالمية في الحوسبة السحابية تدعم التحول الرقمي في المملكة العربية السعودية',
    image: '/aws.webp',
    details: 'تُعد خدمات أمازون ويب (AWS) من أبرز مزودي الخدمات السحابية عالميًا، وتلعب دورًا محوريًا في دعم رؤية المملكة 2030 من خلال استثمارات استراتيجية في البنية التحتية السحابية والذكاء الاصطناعي. في عام 2025، أعلنت AWS عن شراكة استراتيجية مع شركة "هيومن" (HUMAIN) السعودية، تهدف إلى إنشاء "منطقة الذكاء الاصطناعي" باستثمار يتجاوز 5 مليارات دولار. ستضم هذه المنطقة بنية تحتية متقدمة تشمل مراكز بيانات، وشبكات UltraCluster، وخدمات مثل Amazon SageMaker وAmazon Bedrock وAmazon Q، مما يعزز من قدرات المملكة في مجال الذكاء الاصطناعي.'
  };

  return (
    <main className="relative w-full flex items-center justify-center p-4">
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

export default AWSPage;