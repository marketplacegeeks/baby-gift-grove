import { Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Easy to Create & Share",
    description: "Set up your registry in minutes and share it with friends and family instantly",
  },
  {
    title: "Exclusive Benefits",
    description: "Enjoy special discounts and complete your registry after your event",
  },
  {
    title: "Expert Guidance",
    description: "Get personalized recommendations and support from our registry specialists",
  },
];

const Features = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-registry-purple/10 flex items-center justify-center mb-4 mx-auto">
                  <Check className="h-6 w-6 text-registry-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;