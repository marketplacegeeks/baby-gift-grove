import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "When should I create my baby registry?",
    answer: "We recommend creating your registry early in your pregnancy, ideally between 12 and 14 weeks. This gives you plenty of time to research products and add items gradually.",
  },
  {
    question: "How long will my registry stay active?",
    answer: "Your registry will remain active for 365 days after your event date. You'll also receive completion discounts on remaining items.",
  },
  {
    question: "Can I return registry gifts?,"
    answer: "Yes, most registry gifts can be returned within 365 days for store credit or exchange.",
  },
];

const FAQ = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;