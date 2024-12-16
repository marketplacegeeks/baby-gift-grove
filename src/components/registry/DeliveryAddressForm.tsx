import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface DeliveryAddressFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DeliveryAddressForm = ({ open, onOpenChange }: DeliveryAddressFormProps) => {
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      name: "",
      emirate: "",
      area: "",
      phoneNumber: "",
      deliveryDate: "",
    },
  });

  const onSubmit = (data: any) => {
    toast({
      title: "Delivery Details Saved!",
      description: "Your registry has been created successfully.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#fdfcfb]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-6 text-[#333]">Delivery Details</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emirate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Emirate</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select emirate" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
                      <SelectItem value="sharjah">Sharjah</SelectItem>
                      <SelectItem value="ajman">Ajman</SelectItem>
                      <SelectItem value="rak">Ras Al Khaimah</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your area" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="Enter phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Delivery Date</FormLabel>
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
              className="w-full py-6 text-white font-medium text-lg mt-6"
              style={{ backgroundColor: '#C8A164' }}
            >
              Save Delivery Details
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryAddressForm;