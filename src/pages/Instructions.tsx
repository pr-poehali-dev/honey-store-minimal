import Navigation from "@/components/Navigation";
import PageHeader from "@/components/PageHeader";
import InstructionCard from "@/components/InstructionCard";
import ProductBenefits from "@/components/ProductBenefits";
import WarningCard from "@/components/WarningCard";
import Footer from "@/components/Footer";

const Instructions = () => {
  const honeyInstructions = [
    {
      title: "Хранение:",
      items: [
        { text: "Храните в сухом, прохладном месте при температуре до +20°C" },
        { text: "Избегайте попадания прямых солнечных лучей" },
        { text: "Плотно закрывайте крышку после использования" },
      ],
    },
    {
      title: "Употребление:",
      items: [
        { text: "Рекомендуемая дневная норма: 1-2 столовые ложки" },
        { text: "Лучше употреблять утром натощак или перед сном" },
        { text: "Не добавляйте в горячие напитки выше 40°C" },
      ],
    },
  ];

  const meadInstructions = [
    {
      title: "Хранение:",
      items: [
        { text: "Храните в холодильнике при температуре +2°C до +6°C" },
        { text: "После вскрытия употребите в течение 7 дней" },
        { text: "Защищайте от света и вибраций" },
      ],
    },
    {
      title: "Подача:",
      items: [
        { text: "Подавайте охлаждённой до +8-10°C" },
        { text: "Рекомендуемый объём: 100-150 мл за приём" },
        { text: "Сочетается с сырами, орехами и фруктами" },
      ],
    },
  ];

  const benefits = [
    {
      title: "Мёд содержит:",
      items: [
        "Антиоксиданты",
        "Витамины группы B",
        "Микроэлементы",
        "Ферменты",
      ],
    },
    {
      title: "Медовуха богата:",
      items: [
        "Пробиотиками",
        "Аминокислотами",
        "Органическими кислотами",
        "Минералами",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="instructions" />

      <PageHeader
        title="Инструкция"
        subtitle="Как правильно хранить и употреблять наши продукты"
      />

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <InstructionCard
            icon="🍯"
            title="Натуральный мёд"
            sections={honeyInstructions}
          />

          <InstructionCard
            icon="🥃"
            title="Медовуха"
            sections={meadInstructions}
          />

          <ProductBenefits benefits={benefits} />

          <WarningCard
            title="Важно:"
            message="Мёд не рекомендуется детям до 1 года. Медовуха содержит алкоголь (4-6% об.), не рекомендуется беременным, кормящим матерям и лицам до 18 лет."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructions;
