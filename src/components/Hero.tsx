import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Card } from "./ui/card";
import { useState } from "react";

const Hero = () => {
  const [showGenderDialog, setShowGenderDialog] = useState(false);

  return (
    <div className="relative bg-registry-light-purple/20 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <img 
            src="https://lmg.a.bigcontent.io/v1/static/website_images_logos_babyshop_ae_en_logo-babyshop?fmt=auto" 
            alt="Babyshop Logo" 
            className="h-12 mx-auto mb-12"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Create Your Perfect
            <span className="text-registry-purple block">Baby Registry</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your parenting journey with a registry that makes gift-giving easy and delightful for everyone.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-registry-purple hover:bg-registry-purple/90 text-white px-8 py-6 text-lg rounded-full"
              >
                Create Your Registry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center mb-6">Choose Your Registry Type</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card 
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => setShowGenderDialog(true)}
                >
                  <div className="text-center">
                    <div className="h-24 w-24 mx-auto mb-4 bg-registry-light-purple/20 rounded-full flex items-center justify-center group-hover:bg-registry-light-purple/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-registry-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <path d="M12 6v12"/>
                        <path d="M6 12h12"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">I'm Expecting a Baby</h3>
                    <p className="text-gray-600">Create a registry for your upcoming bundle of joy</p>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="text-center">
                    <div className="h-24 w-24 mx-auto mb-4 bg-registry-light-purple/20 rounded-full flex items-center justify-center group-hover:bg-registry-light-purple/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-registry-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Baby's Birthday</h3>
                    <p className="text-gray-600">Create a registry for your little one's special day</p>
                  </div>
                </Card>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showGenderDialog} onOpenChange={setShowGenderDialog}>
            <DialogContent className="sm:max-w-[800px]">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center mb-6">Tell Us About Your Baby</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="text-center">
                    <div className="h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full">
                      <img 
                        src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2940&auto=format&fit=crop"
                        alt="Baby Boy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">A Baby Boy</h3>
                    <p className="text-gray-600">Is Coming Our Way</p>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="text-center">
                    <div className="h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full">
                      <img 
                        src="https://images.unsplash.com/photo-1602407069119-e0c6f1602e31?q=80&w=1974&auto=format&fit=crop"
                        alt="Baby Girl"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">A Baby Girl</h3>
                    <p className="text-gray-600">Is Coming Our Way</p>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="text-center">
                    <div className="h-40 w-40 mx-auto mb-4 overflow-hidden rounded-full bg-registry-light-purple/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-registry-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <path d="M9 12h6"/>
                        <path d="M12 9v6"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">It's a Surprise!</h3>
                    <p className="text-gray-600">We're keeping it a mystery</p>
                  </div>
                </Card>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Hero;