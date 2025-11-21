import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SyllabusFormModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "Data Science",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
            "✅ Your Syllabus Download successfully. We'll contact you soon!",
        });

        // RESET FORM
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          course: "Full Stack Development",
        });

        // AUTO DOWNLOAD PDF
        const pdfUrl = "/syllabus/broucher.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "FullStack-Syllabus.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => onClose(), 500);
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // <Dialog open={isOpen} onOpenChange={onClose}>
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="pointer-events-auto sm:max-w-4xl rounded-2xl border p-0 overflow-hidden z-[9999]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* ⭐ LEFT IMAGE (Desktop only) */}
          <div className="hidden md:block relative">
            <img
              src="syllabusformimg.png"
              alt="Full Stack Development Syllabus"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">
                Full Stack Development
              </h2>
              <p className="text-sm opacity-95">Download Detailed Syllabus</p>
            </div>
          </div>

          {/* ⭐ RIGHT SIDE FORM */}
          <div className="p-6 md:p-8 bg-background">
            <DialogHeader className="space-y-1 mb-2">
              <DialogTitle className="text-2xl font-semibold">
                Download Syllabus
              </DialogTitle>
              <DialogDescription>
                Fill this quick form to download the syllabus instantly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Input loop */}
              {["name", "email", "phone", "city"].map((field) => (
                <input
                  key={field}
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
                  placeholder={`Enter ${field}`}
                  value={formData[field as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              ))}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700"
              >
                {isSubmitting ? "Submitting..." : "Submit & Download"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SyllabusFormModal;
