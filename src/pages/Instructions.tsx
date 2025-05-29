import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Instructions = () => {
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
              <Link to="/instructions" className="text-amber-600 font-medium">
                Инструкция
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
            Инструкция
          </h1>
          <p className="text-xl text-gray-600">
            Как правильно хранить и употреблять наши продукты
          </p>
        </div>
      </section>

      {/* Instructions Content */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Honey Instructions */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat flex items-center">
                <span className="text-3xl mr-4">🍯</span>
                Натуральный мёд
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Хранение:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Храните в сухом, прохладном месте при температуре до +20°C
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Избегайте попадания прямых солнечных лучей
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Плотно закрывайте крышку после использования
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Употребление:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Рекомендуемая дневная норма: 1-2 столовые ложки
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Лучше употреблять утром натощак или перед сном
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Не добавляйте в горячие напитки выше 40°C
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Mead Instructions */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat flex items-center">
                <span className="text-3xl mr-4">🥃</span>
                Медовуха
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Хранение:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Храните в холодильнике при температуре +2°C до +6°C
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    После вскрытия употребите в течение 7 дней
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Защищайте от света и вибраций
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Подача:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Подавайте охлаждённой до +8-10°C
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Рекомендуемый объём: 100-150 мл за приём
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Сочетается с сырами, орехами и фруктами
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat flex items-center">
                <span className="text-3xl mr-4">💚</span>
                Полезные свойства
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">
                    Мёд содержит:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Антиоксиданты</li>
                    <li>• Витамины группы B</li>
                    <li>• Микроэлементы</li>
                    <li>• Ферменты</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900">
                    Медовуха богата:
                  </h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Пробиотиками</li>
                    <li>• Аминокислотами</li>
                    <li>• Органическими кислотами</li>
                    <li>• Минералами</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning */}
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <span className="text-2xl mr-4">⚠️</span>
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">Важно:</h3>
                  <p className="text-red-800">
                    Мёд не рекомендуется детям до 1 года. Медовуха содержит
                    алкоголь (4-6% об.), не рекомендуется беременным, кормящим
                    матерям и лицам до 18 лет.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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

export default Instructions;
