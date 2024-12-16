import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Card } from "../ui/card";
import { useState } from "react";
import ExpectedBabyForm from "./ExpectedBabyForm";

interface GenderSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GenderSelectionDialog = ({ open, onOpenChange }: GenderSelectionDialogProps) => {
  const [showExpectedBabyForm, setShowExpectedBabyForm] = useState(false);

  const handleGenderSelect = () => {
    onOpenChange(false);
    setShowExpectedBabyForm(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-6">Tell Us About Your Baby</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={handleGenderSelect}
            >
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
            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={handleGenderSelect}
            >
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
            <Card 
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={handleGenderSelect}
            >
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

      <ExpectedBabyForm 
        open={showExpectedBabyForm} 
        onOpenChange={setShowExpectedBabyForm}
      />
    </>
  );
};

export default GenderSelectionDialog;