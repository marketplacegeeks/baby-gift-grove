import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

interface ShukranLoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue: () => void;
}

const ShukranLoginDialog = ({ open, onOpenChange, onContinue }: ShukranLoginDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#fdfcfb]">
        <DialogHeader className="text-center space-y-6">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/7a4a5135-a397-4df3-8ad9-796640f53907.png" 
              alt="Shukran Logo" 
              className="h-24 object-contain"
            />
          </div>
          <DialogTitle className="text-3xl font-normal text-[#333]">
            Welcome to Shukran
          </DialogTitle>
          <p className="text-lg text-[#666] leading-relaxed max-w-sm mx-auto">
            The Middle East's largest and most successful retail and hospitality loyalty programme.
          </p>
        </DialogHeader>
        <div className="mt-8 space-y-4">
          <div className="flex items-center border rounded-md p-3">
            <img src="https://flagcdn.com/ae.svg" alt="UAE Flag" className="h-5 w-7 mr-2" />
            <span className="text-gray-600 mr-2">+971</span>
            <input 
              type="tel" 
              placeholder="Mobile" 
              className="flex-1 outline-none bg-transparent text-gray-800"
            />
          </div>
          <Button 
            onClick={onContinue}
            className="w-full py-6 text-white font-medium text-lg"
            style={{ backgroundColor: '#C8A164' }}
          >
            Login & Save with Shukran
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShukranLoginDialog;