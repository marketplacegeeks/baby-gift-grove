import { Card, CardContent } from "./ui/card";

const steps = [
  {
    number: "1",
    title: "Create Your Registry",
    description: "Sign up and start adding your favorite items",
  },
  {
    number: "2",
    title: "Share With Loved Ones",
    description: "Share your registry link with friends and family",
  },
  {
    number: "3",
    title: "Manage Your Gifts",
    description: "Track gifts and send thank you notes easily",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-registry-blue/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-white/80 backdrop-blur">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-registry-purple text-white flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;