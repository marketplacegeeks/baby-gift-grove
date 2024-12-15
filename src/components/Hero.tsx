import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative bg-registry-light-purple/20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Your Perfect
            <span className="text-registry-purple block">Baby Registry</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your parenting journey with a registry that makes gift-giving easy and delightful for everyone.
          </p>
          <Button 
            size="lg"
            className="bg-registry-purple hover:bg-registry-purple/90 text-white px-8 py-6 text-lg rounded-full"
          >
            Create Your Registry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;