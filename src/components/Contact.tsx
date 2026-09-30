import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Clock, ArrowUpRight, Copy, Check, ExternalLink, Github, Linkedin, Twitter, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  const realEmail = 'abejidefaith110@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(realEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyDraft = async () => {
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setValidationError('Please enter your name, email, and message before copying.');
      return;
    }

    setValidationError('');
    const fullDraft = `To: ${realEmail}\nFrom: ${formState.name.trim()} <${formState.email.trim()}>\nSubject: ${
      formState.subject.trim() || 'Project Inquiry via Portfolio'
    }\n\n${formState.message.trim()}`;

    try {
      await navigator.clipboard.writeText(fullDraft);
      setCopiedDraft(true);
      setSubmissionFeedback('Draft formatted and copied to clipboard.');
      setTimeout(() => setCopiedDraft(false), 3000);
    } catch {
      setSubmissionFeedback('Unable to copy automatically. Please copy the text directly.');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setValidationError('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    // Construct honest mailto link
    const subjectParam = encodeURIComponent(
      formState.subject.trim()
        ? `[Inquiry] ${formState.subject.trim()} — ${formState.name.trim()}`
        : `[Inquiry] Portfolio Project Discussion — ${formState.name.trim()}`
    );

    const bodyParam = encodeURIComponent(
      `Hi Faith,\n\n${formState.message.trim()}\n\n---\nSender Details:\nName: ${formState.name.trim()}\nEmail: ${formState.email.trim()}`
    );

    const mailtoUrl = `mailto:${realEmail}?subject=${subjectParam}&body=${bodyParam}`;

    // Provide transparent feedback without claiming a server handled it
    setSubmissionFeedback(
      `Launching your mail client with this draft addressed to ${realEmail}. If your email app does not open automatically, you can use the "Copy Message Draft" button below.`
    );

    // Trigger user mail client
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-24 lg:py-36 border-t border-white/[0.08] relative bg-[#0D0F11]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>06</span>
            <span className="text-[#6E6960]">/</span>
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            Start a <span className="font-serif italic font-normal text-[#F6F4EE]">conversation</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A398] mt-4 leading-relaxed font-normal">
            Whether you have an upcoming project, need full-stack engineering expertise, or want to discuss architectural requirements, I welcome direct inquiries.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Coordinates & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-[#14171A] border border-white/[0.08] p-7 sm:p-8 rounded-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#2FA499]">
                  Direct Coordinates
                </h3>
                <span className="text-xs font-mono text-[#6E6960]">UTC+1</span>
              </div>

              {/* Email Block */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6960]">
                  Direct Email
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <a
                    href={`mailto:${realEmail}`}
                    className="text-base sm:text-lg font-medium text-[#F6F4EE] hover:text-[#2FA499] transition-colors inline-flex items-center gap-1.5 break-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    <span>{realEmail}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#2FA499] shrink-0" />
                  </a>
                  
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={copiedEmail ? 'Email address copied' : 'Copy email address'}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-xs border border-white/[0.1] bg-[#1B1F24] hover:bg-white/[0.08] text-[#A8A398] hover:text-[#F6F4EE] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2FA499]" />
                        <span className="text-[#2FA499]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6960] block">
                  Location & Availability
                </span>
                <div className="flex items-center gap-2 text-sm text-[#F6F4EE]">
                  <MapPin className="w-4 h-4 text-[#2FA499] shrink-0" />
                  <span>Lagos, Nigeria · Remote Worldwide</span>
                </div>
              </div>

              {/* Response Time Expectation */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6960] block">
                  Response Commitment
                </span>
                <div className="flex items-center gap-2 text-sm text-[#A8A398]">
                  <Clock className="w-4 h-4 text-[#2FA499] shrink-0" />
                  <span>Usually within 24 business hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E6960] block">
                  Engineering Profiles
                </span>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#A8A398] hover:text-[#F6F4EE] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    <Github className="w-3.5 h-3.5 text-[#2FA499]" />
                    <span>GitHub</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                  <span className="text-[#6E6960]">/</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#A8A398] hover:text-[#F6F4EE] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#2FA499]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                  <span className="text-[#6E6960]">/</span>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#A8A398] hover:text-[#F6F4EE] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    <Twitter className="w-3.5 h-3.5 text-[#2FA499]" />
                    <span>Twitter / X</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quiet Status Card */}
            <div className="p-6 border border-white/[0.08] bg-[#14171A]/40 rounded-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2FA499] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#F6F4EE]">
                  Open for Engagements
                </span>
              </div>
              <p className="text-xs text-[#A8A398] leading-relaxed">
                Available for full-stack product development, React/Next.js frontend contracts, and backend API engineering.
              </p>
            </div>

          </div>

          {/* Right Column: Honest, Accessible Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#14171A] border border-white/[0.08] p-7 sm:p-10 rounded-sm">
            
            <div className="mb-6 pb-4 border-b border-white/[0.06]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-1">
                Inquiry Form
              </h3>
              <p className="text-xs text-[#6E6960]">
                Prepares a formatted note directed to <span className="text-[#A8A398]">{realEmail}</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A8A398] mb-2"
                  >
                    Your Name <span className="text-[#2FA499]" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formState.name}
                    onChange={(e) => {
                      setFormState({ ...formState, name: e.target.value });
                      if (validationError) setValidationError('');
                    }}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-[#0D0F11] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-[#F6F4EE] placeholder-[#6E6960] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A8A398] mb-2"
                  >
                    Email Address <span className="text-[#2FA499]" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formState.email}
                    onChange={(e) => {
                      setFormState({ ...formState, email: e.target.value });
                      if (validationError) setValidationError('');
                    }}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-[#0D0F11] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-[#F6F4EE] placeholder-[#6E6960] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A8A398] mb-2"
                >
                  Project or Inquired Subject <span className="text-[#6E6960] lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Web App / API Consultation"
                  className="w-full bg-[#0D0F11] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-[#F6F4EE] placeholder-[#6E6960] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A8A398] mb-2"
                >
                  Message & Scope Outline <span className="text-[#2FA499]" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (validationError) setValidationError('');
                  }}
                  placeholder="Briefly describe what you're building, desired timeline, or key technical goals..."
                  className="w-full bg-[#0D0F11] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-[#F6F4EE] placeholder-[#6E6960] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Validation Warning */}
              <AnimatePresence>
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="alert"
                    className="p-3 bg-red-950/20 border border-red-800/40 rounded-sm flex items-center gap-2 text-xs text-red-300 font-mono"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{validationError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Transparent Disclosure / Submission Note */}
              <div className="p-3.5 bg-[#0D0F11] border border-white/[0.06] rounded-sm text-xs text-[#A8A398] leading-relaxed">
                <span className="text-[#F6F4EE] font-medium">How this works: </span>
                Clicking <span className="text-[#F6F4EE]">Open in Email App</span> launches your default mail software pre-filled with your message. You can also use <span className="text-[#F6F4EE]">Copy Formatted Draft</span> to paste directly into webmail (Gmail, Outlook, etc.).
              </div>

              {/* Feedback Note (Honest, not a fake API success message) */}
              {submissionFeedback && (
                <div
                  role="status"
                  className="p-4 bg-[#1B1F24] border border-[#2FA499]/40 rounded-sm flex items-start gap-3 text-xs text-[#F6F4EE]"
                >
                  <Check className="w-4 h-4 text-[#2FA499] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <p className="font-medium text-[#F6F4EE]">{submissionFeedback}</p>
                    <p className="text-[#6E6960] mt-1 font-mono text-[11px]">
                      Destination: {realEmail}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#F6F4EE] hover:bg-[#2FA499] hover:text-[#0D0F11] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Email App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-[#F6F4EE] bg-[#0D0F11] hover:bg-[#1B1F24] border border-white/[0.12] hover:border-[#2FA499]/60 transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2FA499]" />
                      <span className="text-[#2FA499]">Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A8A398]" />
                      <span>Copy Formatted Draft</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
