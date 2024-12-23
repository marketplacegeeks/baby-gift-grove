import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import ShukranLoginDialog from "./ShukranLoginDialog";
import DeliveryAddressForm from "./DeliveryAddressForm";

interface ExpectedBabyFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ExpectedBabyForm = ({ open, onOpenChange }: ExpectedBabyFormProps) => {
  const { toast } = useToast();
  const [showShukranLogin, setShowShukranLogin] = useState(false);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  
  const form = useForm({
    defaultValues: {
      dueDate: "",
    },
  });

  const onSubmit = (data: any) => {
    onOpenChange(false);
    setShowShukranLogin(true);
  };

  const handleShukranContinue = () => {
    setShowShukranLogin(false);
    setShowDeliveryForm(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-2">Expected Baby Registry</DialogTitle>
            <DialogDescription className="text-center">
              Please let us know when your little angel is arriving
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>When is the angel arriving?</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        placeholder="DD/MM/YYYY" 
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value.length <= 10) {
                            field.onChange(value.replace(/[^0-9/]/g, ''));
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-registry-purple hover:bg-registry-purple/90 text-white"
              >
                Create Registry
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <ShukranLoginDialog 
        open={showShukranLogin}
        onOpenChange={setShowShukranLogin}
        onContinue={handleShukranContinue}
      />

      <DeliveryAddressForm
        open={showDeliveryForm}
        onOpenChange={setShowDeliveryForm}
      />
    </>
  );
};

export default ExpectedBabyForm;