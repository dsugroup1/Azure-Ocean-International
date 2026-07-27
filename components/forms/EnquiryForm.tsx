'use client';

// ============================================================
// EnquiryForm — Client-side contact form
// ============================================================

import { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "8ab94aeb-0e55-4fc6-bb2d-6c2e585b7eb4");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed", data);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#F0F9FF] border border-[#22D3EE]/30 rounded-sm p-12 text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle2 size={32} className="text-[#0284C7]" />
        </div>
        <h3 className="text-2xl font-display uppercase tracking-wide text-[#0F172A] mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
          Enquiry Received
        </h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Thank you for reaching out. We have received your requirement and our team will review the details.
        </p>
        {/* Note: In a real scenario we'd say "we'll contact you shortly", but we are keeping claims minimal. */}
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 text-sm text-[#0284C7] font-medium hover:underline focus-visible:outline-none"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-sm p-8 md:p-12 shadow-xl shadow-slate-200/50">
      


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="fullName" className="text-sm font-semibold text-[#0F172A]">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            required
            className="form-input"
            placeholder="Jane Doe"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-[#0F172A]">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required
            className="form-input"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-[#0F172A]">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            className="form-input"
            placeholder="jane@example.com"
          />
        </div>


        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-[#0F172A]">
            Message / Requirement <span className="text-red-500">*</span>
          </label>
          <textarea 
            id="message" 
            name="message" 
            required
            rows={5}
            className="form-input resize-y"
            placeholder="Please describe your logistics requirement..."
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-sm transition-colors duration-300 tracking-wide text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            PROCESSING...
          </>
        ) : (
          <>
            SEND ENQUIRY
            <Send size={18} />
          </>
        )}
      </button>

      <p className="mt-6 text-xs text-slate-500 text-center">
        By submitting this form, you acknowledge that the information provided will be used to respond to your enquiry in accordance with our Privacy Policy.
      </p>

    </form>
  );
}
