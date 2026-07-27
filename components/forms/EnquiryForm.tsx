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
    
    // Simulate network request for demonstration
    // TODO: Connect this to a real backend / email API when contact details are provided.
    // Example: fetch('/api/contact', { method: 'POST', body: formData })
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
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
      
      <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-sm text-sm text-amber-800 flex flex-col gap-2">
         <strong>Development Note:</strong>
         <span>This form is currently in a mock state. It will not send an actual email until an official company email address is provided and configured in the backend.</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        <div className="flex flex-col gap-2">
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
          <label htmlFor="companyName" className="text-sm font-semibold text-[#0F172A]">
            Company Name
          </label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName"
            className="form-input"
            placeholder="Acme Corp"
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
          <label htmlFor="service" className="text-sm font-semibold text-[#0F172A]">
            Service Required <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select 
              id="service" 
              name="service" 
              required
              className="form-input appearance-none bg-white pr-10"
              defaultValue=""
            >
              <option value="" disabled>Select a service...</option>
              <option value="Road Freight">Road Freight</option>
              <option value="Freight Coordination">Freight Coordination</option>
              <option value="Warehousing & Distribution">Warehousing & Distribution</option>
              <option value="Supply Chain Support">Supply Chain Support</option>
              <option value="B2B Logistics">B2B Logistics</option>
              <option value="Last-Mile Coordination">Last-Mile Coordination</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="pickup" className="text-sm font-semibold text-[#0F172A]">
            Pickup Location
          </label>
          <input 
            type="text" 
            id="pickup" 
            name="pickup"
            className="form-input"
            placeholder="City or Pincode"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="delivery" className="text-sm font-semibold text-[#0F172A]">
            Delivery Location
          </label>
          <input 
            type="text" 
            id="delivery" 
            name="delivery"
            className="form-input"
            placeholder="City or Pincode"
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
