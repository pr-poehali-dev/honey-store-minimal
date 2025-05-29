import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      price: 1000,
      title: "Дегустационный набор",
      description: "Идеально для первого знакомства с нашими продуктами",
      features: ["300мл медовухи", "200г мёда", "Подарочная упаковка"],
      popular: false,
    },
    {
      price: 2500,
      title: "Семейный набор",
      description: "Оптимальный выбор для регулярного употребления",
      features: ["750мл медовухи", "500г мёда", "Рецепты использования"],
      popular: true,
    },
    {
      price: 5000,
      title: "Премиум коллекция",
      description: "Полная коллекция наших лучших продуктов",
      features: [
        "1.5л медовухи",
        "1кг мёда",
        "Эксклюзивная упаковка",
        "Сертификат качества",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl font-bold text-amber-600 font-montserrat"
            >
              МедоДом
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Главная
              </Link>
              <Link to="/products" className="text-amber-600 font-medium">
                Товары
              </Link>
              <Link
                to="/instructions"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Инструкция
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
            Наши товары
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий набор натуральных продуктов пчеловодства
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:shadow-xl ${
                  product.popular ? "ring-2 ring-amber-600 scale-105" : ""
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">
                    {index === 0 ? "🍯" : index === 1 ? "🥃" : "👑"}
                  </div>
                  <CardTitle className="text-2xl font-montserrat">
                    {product.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-amber-600 mt-4">
                    {product.price.toLocaleString()}₽
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-center">
                    {product.description}
                  </p>
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full py-6 rounded-full transition-all duration-300 ${
                      product.popular
                        ? "bg-amber-600 hover:bg-amber-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Не знаете, что выбрать?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ознакомьтесь с подробными инструкциями по использованию наших
            продуктов
          </p>
          <Link to="/instructions">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full">
              Читать инструкцию
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 text-amber-400 font-montserrat">
            МедоДом
          </div>
          <p className="text-gray-400">
            Натуральные продукты пчеловодства с 2020 года
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
