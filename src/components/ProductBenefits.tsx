import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BenefitGroup {
  title: string;
  items: string[];
}

interface ProductBenefitsProps {
  benefits: BenefitGroup[];
}

const ProductBenefits = ({ benefits }: ProductBenefitsProps) => {
  return (
    <Card className="border-green-200 bg-green-50">
      <CardHeader>
        <CardTitle className="text-2xl font-montserrat flex items-center">
          <span className="text-3xl mr-4">💚</span>
          Полезные свойства
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((group, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2 text-gray-900">
                {group.title}
              </h4>
              <ul className="space-y-1 text-gray-700">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductBenefits;
