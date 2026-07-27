'use client';

// ============================================================
// QuoteForm — Detailed logistics requirement form
// ============================================================

import { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function QuoteForm() {
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
      <div className="bg-[#0A2438] border border-[#22D3EE]/30 rounded-sm p-12 md:p-24 text-center">
        <div className="w-20 h-20 bg-[#061826] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border border-[#22D3EE]/20">
          <CheckCircle2 size={40} className="text-[#22D3EE]" />
        </div>
        <h3 className="text-3xl font-display uppercase tracking-wide text-white mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
          Requirement Logged
        </h3>
        <p className="text-slate-300 max-w-lg mx-auto text-lg leading-relaxed">
          Your logistics requirement details have been submitted successfully. Our coordination team will review the information provided to understand the scope of movement.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="mt-10 text-sm text-[#22D3EE] font-medium hover:text-white transition-colors focus-visible:outline-none tracking-wide uppercase"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0A2438] border border-white/[0.05] rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden">
      
      {/* Background decoration */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#22D3EE 1px, transparent 1px), linear-gradient(90deg, #22D3EE 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="fullName" className="text-sm font-semibold text-slate-300">
              Full Name <span className="text-[#22D3EE]">*</span>
            </label>
            <input type="text" id="fullName" name="fullName" required className="form-input form-input-dark" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-300">
              Phone Number <span className="text-[#22D3EE]">*</span>
            </label>
            <input type="tel" id="phone" name="phone" required className="form-input form-input-dark" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-slate-300">
              Email Address <span className="text-[#22D3EE]">*</span>
            </label>
            <input type="email" id="email" name="email" required className="form-input form-input-dark" />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-300">
              Message <span className="text-[#22D3EE]">*</span>
            </label>
            <textarea 
              id="message" 
              name="message" 
              rows={5}
              required
              placeholder="How can we help you?"
              className="form-input form-input-dark resize-y"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-[#0A2438] disabled:text-slate-500 disabled:border disabled:border-slate-700 disabled:cursor-not-allowed text-white font-bold py-5 rounded-sm transition-all duration-300 tracking-wider uppercase shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061826]"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Processing Submission...
            </>
          ) : (
            <>
              Submit Requirement
              <Send size={20} />
            </>
          )}
        </button>

      </div>
    </form>
  );
}
