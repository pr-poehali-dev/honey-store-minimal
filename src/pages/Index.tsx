import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
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
              <Link
                to="/products"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
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

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 font-montserrat leading-tight">
            Натуральный
            <br />
            <span className="text-amber-600">мёд</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Премиальная медовуха и отборный мёд от пасечников с многолетним
            опытом. Только натуральные ингредиенты, проверенное качество.
          </p>
          <Link to="/products">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
              Посмотреть товары
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                Три размера.
                <br />
                Одно качество.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Выберите подходящий объём медовухи или мёда. От небольшой
                дегустации до запасов на всю семью — у нас есть всё, что нужно.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">1000₽ — для знакомства</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    2500₽ — оптимальный выбор
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    5000₽ — семейная упаковка
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">🍯</div>
                <p className="text-amber-800 font-medium">Натуральный мёд</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-montserrat">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-6">🌿</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                100% натурально
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Никаких искусственных добавок. Только чистый мёд от наших пчёл.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-6">📦</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Быстрая доставка
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Доставляем свежий продукт по всей России в кратчайшие сроки.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-6">⭐</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Проверенное качество
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Все наши продукты проходят строгий контроль качества.
              </p>
            </div>
          </div>
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

export default Index;
