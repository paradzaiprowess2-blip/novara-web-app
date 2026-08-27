/**
 * NOVARA / Quiet Authority: the contact exchange is direct and focused, not a generic funnel.
 * Midnight surfaces, fine titanium rules, and a single signal-blue action reinforce calm confidence.
 */

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ContactDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) window.setTimeout(() => setSubmitted(false), 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="overflow-hidden border-white/10 bg-[#08111f] p-0 text-white shadow-2xl sm:max-w-[620px]">
        <div className="grid min-h-[560px] grid-cols-[5px_1fr]">
          <div className="bg-[linear-gradient(180deg,#2b83ff_0%,#144484_55%,#0b1626_100%)]" />
          <div className="p-6 sm:p-9">
            {submitted ? (
              <div className="flex min-h-[440px] flex-col items-start justify-center">
                <span className="mb-7 grid h-14 w-14 place-items-center rounded-full border border-[#4a9bff]/40 bg-[#1d6de0]/15 text-[#69adff]">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <p className="eyebrow text-[#6eafff]">CONVERSATION STARTED</p>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Thank you for reaching out.
                </h2>
                <p className="mt-5 max-w-md text-base leading-7 text-slate-300">
                  Your note has been captured for this prototype. A Novara conversation begins with your current reality and the chapter you want to build next.
                </p>
                <button
                  type="button"
                  onClick={() => handleOpenChange(false)}
                  className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#74b3ff]"
                >
                  Return to Novara <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <DialogHeader className="max-w-[470px] text-left">
                  <p className="eyebrow text-[#6eafff]">START A CONVERSATION</p>
                  <DialogTitle className="mt-4 font-display text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                    Begin with what matters now.
                  </DialogTitle>
                  <DialogDescription className="mt-3 text-base leading-7 text-slate-300">
                    Tell us where you are, where you want to go, and what is making progress difficult.
                  </DialogDescription>
                </DialogHeader>
                <form
                  className="mt-8 grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="form-field">
                      <span>Name</span>
                      <input required name="name" autoComplete="name" placeholder="Your name" />
                    </label>
                    <label className="form-field">
                      <span>Company</span>
                      <input name="company" autoComplete="organization" placeholder="Organisation name" />
                    </label>
                  </div>
                  <label className="form-field">
                    <span>Email</span>
                    <input required name="email" type="email" autoComplete="email" placeholder="you@company.com" />
                  </label>
                  <label className="form-field">
                    <span>What are you trying to achieve?</span>
                    <textarea required name="message" rows={4} placeholder="Describe the opportunity, challenge, or next chapter." />
                  </label>
                  <button type="submit" className="signal-button mt-2 w-full justify-center sm:w-auto">
                    Send your note <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
                <p className="mt-5 text-xs leading-5 text-slate-500">
                  Prototype contact flow. This form does not send data to a backend.
                </p>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
