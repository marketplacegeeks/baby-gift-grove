import { useState } from "react";
import RegistryTypeDialog from "./registry/RegistryTypeDialog";
import GenderSelectionDialog from "./registry/GenderSelectionDialog";
import BirthdayRegistryForm from "./registry/BirthdayRegistryForm";

const Hero = () => {
  const [showGenderDialog, setShowGenderDialog] = useState(false);
  const [showBirthdayForm, setShowBirthdayForm] = useState(false);

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
          
          <RegistryTypeDialog 
            onExpectingBabyClick={() => setShowGenderDialog(true)}
            onBirthdayClick={() => setShowBirthdayForm(true)}
          />

          <GenderSelectionDialog 
            open={showGenderDialog}
            onOpenChange={setShowGenderDialog}
          />

          <BirthdayRegistryForm
            open={showBirthdayForm}
            onOpenChange={setShowBirthdayForm}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;