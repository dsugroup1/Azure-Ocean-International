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
    
    // Simulate network request
    // TODO: Connect this to a real backend / email API when contact details are provided.
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
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
        <div className="mb-10 p-4 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-sm text-sm text-amber-200 flex flex-col gap-2">
           <strong>Development Note:</strong>
           <span>This form is currently in a mock state. Submission processing will need to be configured when an official email address or CRM backend is provided.</span>
        </div>

        {/* Section 1: Contact Details */}
        <div className="mb-12">
          <h3 className="text-lg font-display uppercase tracking-wide text-white mb-6 border-b border-white/[0.1] pb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-sm font-semibold text-slate-300">
                Full Name <span className="text-[#22D3EE]">*</span>
              </label>
              <input type="text" id="fullName" name="fullName" required className="form-input form-input-dark" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="companyName" className="text-sm font-semibold text-slate-300">
                Company Name
              </label>
              <input type="text" id="companyName" name="companyName" className="form-input form-input-dark" />
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
          </div>
        </div>

        {/* Section 2: Requirement Details */}
        <div className="mb-12">
          <h3 className="text-lg font-display uppercase tracking-wide text-white mb-6 border-b border-white/[0.1] pb-3" style={{ fontFamily: 'var(--font-syne)' }}>
            Requirement Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="serviceType" className="text-sm font-semibold text-slate-300">
                Primary Service Type <span className="text-[#22D3EE]">*</span>
              </label>
              <div className="relative">
                <select id="serviceType" name="serviceType" required className="form-input form-input-dark appearance-none pr-10" defaultValue="">
                  <option value="" disabled>Select the main service required...</option>
                  <option value="Road Freight">Road Freight</option>
                  <option value="Freight Coordination">Freight Coordination</option>
                  <option value="Warehousing & Distribution">Warehousing & Distribution</option>
                  <option value="Supply Chain Support">Supply Chain Support</option>
                  <option value="B2B Logistics">B2B Logistics</option>
                  <option value="Last-Mile Coordination">Last-Mile Coordination</option>
                  <option value="Other">Other Requirement</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="pickupLocation" className="text-sm font-semibold text-slate-300">
                Pickup Location <span className="text-[#22D3EE]">*</span>
              </label>
              <input type="text" id="pickupLocation" name="pickupLocation" required placeholder="City or Pincode" className="form-input form-input-dark" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="deliveryLocation" className="text-sm font-semibold text-slate-300">
                Delivery Location <span className="text-[#22D3EE]">*</span>
              </label>
              <input type="text" id="deliveryLocation" name="deliveryLocation" required placeholder="City or Pincode" className="form-input form-input-dark" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="goodsType" className="text-sm font-semibold text-slate-300">
                Type of Goods
              </label>
              <input type="text" id="goodsType" name="goodsType" placeholder="e.g. Electronic components, FMCG, Raw materials" className="form-input form-input-dark" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="approxWeight" className="text-sm font-semibold text-slate-300">
                Approximate Weight
              </label>
              <input type="text" id="approxWeight" name="approxWeight" placeholder="e.g. 500 kg, 2 tons" className="form-input form-input-dark" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="approxQuantity" className="text-sm font-semibold text-slate-300">
                Approximate Quantity / Volume
              </label>
              <input type="text" id="approxQuantity" name="approxQuantity" placeholder="e.g. 10 pallets, 50 cartons" className="form-input form-input-dark" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="pickupDate" className="text-sm font-semibold text-slate-300">
                Preferred Pickup Date
              </label>
              <input type="date" id="pickupDate" name="pickupDate" className="form-input form-input-dark" />
            </div>

          </div>
        </div>

        {/* Section 3: Additional */}
        <div className="mb-12">
          <div className="flex flex-col gap-2">
            <label htmlFor="additionalReqs" className="text-sm font-semibold text-slate-300">
              Additional Requirements / Context
            </label>
            <textarea 
              id="additionalReqs" 
              name="additionalReqs" 
              rows={4}
              placeholder="Any specific handling instructions, timelines, or operational details..."
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
