import { Card, CardContent } from "@/components/ui/card";

interface WarningCardProps {
  title: string;
  message: string;
}

const WarningCard = ({ title, message }: WarningCardProps) => {
  return (
    <Card className="border-red-200 bg-red-50">
      <CardContent className="pt-6">
        <div className="flex items-start">
          <span className="text-2xl mr-4">⚠️</span>
          <div>
            <h3 className="font-semibold text-red-900 mb-2">{title}</h3>
            <p className="text-red-800">{message}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WarningCard;
