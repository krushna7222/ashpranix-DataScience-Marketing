import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import img from "../assets/Enquiry.png";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    course: "Data Science",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enquiryTime = new Date().toLocaleString();

    const payload = {
      ...formData,
      enquiryTime,
    };

    try {
      const response = await fetch("https://formspree.io/f/mblwgqkg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description:
            "✅ Your enquiry has been submitted successfully. We'll contact you soon!",
        });

        setFormData({
          name: "",
          mobile: "",
          email: "",
          city: "",
          course: "Full Stack Development",
        });

        onClose();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // <Dialog open={isOpen} onOpenChange={onClose}>.
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="pointer-events-auto sm:max-w-4xl rounded-2xl border border-border shadow-xl p-0 overflow-hidden z-[9999]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT IMAGE (Hidden on mobile) */}
          <div className="hidden md:block relative">
            <img
              src={img}
              alt="Course Promo"
              className="w-full h-full object-cover"
            />

            {/* Removed black overlay → using light transparent gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/0 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">Unlock Your Future</h2>
              <p className="text-sm opacity-90">
                Learn industry-ready skills with expert guidance.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 md:p-8 bg-background">
            <DialogHeader className="space-y-1">
              <DialogTitle className="text-2xl font-semibold text-foreground">
                Enquiry Form
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Fill in your details and we’ll get back to you soon.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-5 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Student Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  placeholder="Enter 10-digit mobile number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  placeholder="Enter your city"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary h-11 text-base font-medium rounded-lg hover:bg-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
