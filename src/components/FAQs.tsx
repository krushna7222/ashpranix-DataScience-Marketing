import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Card } from "@/components/ui/card";

const FAQs = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-muted/40 -mt-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-3 bg-primary/10 px-6 py-2 rounded-full mb-5">
            <HelpCircle className="w-6 h-6 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Help & Support
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our courses and learning programs.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`p-5 md:p-6 border transition-all duration-300 rounded-xl ${
                expandedId === index
                  ? "border-indigo-600/40 shadow-md bg-background"
                  : "border-border hover:border-indigo-600/20 hover:shadow-sm"
              }`}
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === index ? null : index)
                }
                className="w-full text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground flex-1 leading-snug">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                      expandedId === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedId === index && (
                <div className="mt-4 pt-4 border-t border-border animate-accordion-down">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
