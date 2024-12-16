import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "../ui/use-toast";

interface BirthdayRegistryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BirthdayRegistryForm = ({ open, onOpenChange }: BirthdayRegistryFormProps) => {
  const { toast } = useToast();
  
  const form = useForm({
    defaultValues: {
      babyName: "",
      birthdate: "",
      age: "",
    },
  });

  const onSubmit = (data: any) => {
    toast({
      title: "Registry Created!",
      description: `Birthday registry created for ${data.babyName}`,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-2">Baby's Birthday Registry</DialogTitle>
          <DialogDescription className="text-center">
            Please fill in your baby's details to create a birthday registry
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="babyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Baby's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter baby's name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth Date</FormLabel>
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
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="Enter age in months"
                      {...field}
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
  );
};

export default BirthdayRegistryForm;