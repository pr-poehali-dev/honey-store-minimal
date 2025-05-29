import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InstructionItem {
  text: string;
}

interface InstructionSection {
  title: string;
  items: InstructionItem[];
}

interface InstructionCardProps {
  icon: string;
  title: string;
  sections: InstructionSection[];
  borderColor?: string;
  bgColor?: string;
}

const InstructionCard = ({
  icon,
  title,
  sections,
  borderColor = "border-amber-200",
  bgColor = "bg-white",
}: InstructionCardProps) => {
  return (
    <Card className={`${borderColor} ${bgColor}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-montserrat flex items-center">
          <span className="text-3xl mr-4">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              {section.title}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default InstructionCard;
