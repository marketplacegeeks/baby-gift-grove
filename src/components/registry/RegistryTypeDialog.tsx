import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Card } from "../ui/card";

interface RegistryTypeDialogProps {
  onExpectingBabyClick: () => void;
  onBirthdayClick: () => void;
}

const RegistryTypeDialog = ({ onExpectingBabyClick, onBirthdayClick }: RegistryTypeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-registry-purple hover:bg-registry-purple/90 text-white px-8 py-6 text-lg rounded-full">
          Create Your Registry
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-6">Choose Your Registry Type</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card 
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={onExpectingBabyClick}
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
          <Card 
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={onBirthdayClick}
          >
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
  );
};

export default RegistryTypeDialog;