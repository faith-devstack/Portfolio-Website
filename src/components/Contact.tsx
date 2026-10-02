import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Clock, ArrowUpRight, Copy, Check, ExternalLink, Github, Linkedin, Twitter, AlertCircle, Phone, MessageSquare } from 'lucide-react';
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
  const realWhatsApp = '+234 707 929 9531';
  const realCalls = '+234 701 157 5214';

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
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>06</span>
            <span className="text-[#8E8A80]">/</span>
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            Start a <span className="font-serif italic font-normal text-[#F6F4EE]">conversation</span>.
          </h2>
          <p className="text-base text-[#C8C4BA] mt-4 leading-relaxed font-normal">
            Whether you have an upcoming project, need full-stack engineering expertise, or want to discuss architectural requirements, I welcome direct inquiries.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Stacked on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Coordinates & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-[#14171A] border border-white/[0.1] p-7 sm:p-8 rounded-sm space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] font-medium">
                  Direct Coordinates
                </h3>
                <span className="text-xs font-mono text-[#9E988D]">WEST AFRICA TIME (UTC+1)</span>
              </div>

              {/* Email Block */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E988D] block font-medium">
                  Primary Email
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-xs border border-white/[0.12] bg-[#1B1F24] hover:bg-white/[0.08] text-[#E2DFD7] hover:text-[#F6F4EE] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2FA499]" />
                        <span className="text-[#2FA499]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#2FA499]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp Communication */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E988D] block font-medium">
                  Direct Phone &amp; Instant Messaging
                </span>
                <div className="space-y-2 text-sm text-[#F6F4EE]">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-[#2FA499] shrink-0" />
                    <span className="text-[#9E988D] font-mono text-xs uppercase">WhatsApp:</span>
                    <a
                      href="https://wa.me/2347079299531"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#2FA499] font-mono text-xs sm:text-sm transition-colors"
                    >
                      {realWhatsApp}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#2FA499] shrink-0" />
                    <span className="text-[#9E988D] font-mono text-xs uppercase">Direct Calls:</span>
                    <a
                      href="tel:+2347011575214"
                      className="hover:text-[#2FA499] font-mono text-xs sm:text-sm transition-colors"
                    >
                      {realCalls}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="pt-4 border-t border-white/[0.08] space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E988D] block font-medium">
                  Location &amp; Availability
                </span>
                <div className="flex items-center gap-2 text-sm text-[#F6F4EE]">
                  <MapPin className="w-4 h-4 text-[#2FA499] shrink-0" />
                  <span>Lagos &amp; Minna, Nigeria · Remote Worldwide</span>
                </div>
              </div>

              {/* Response Time Expectation */}
              <div className="pt-4 border-t border-white/[0.08] space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E988D] block font-medium">
                  Response Commitment
                </span>
                <div className="flex items-center gap-2 text-sm text-[#C8C4BA]">
                  <Clock className="w-4 h-4 text-[#2FA499] shrink-0" />
                  <span>Replies typically within 24 business hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9E988D] block font-medium">
                  Engineering Profiles
                </span>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C8C4BA] hover:text-[#F6F4EE] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
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
                    className="inline-flex items-center gap-1.5 text-[#C8C4BA] hover:text-[#F6F4EE] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#2FA499]" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                  <span className="text-[#6E6960]">/</span>
                  <a
                    href="https://x.com/faithbuilds001"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C8C4BA] hover:text-[#F6F4EE] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    <Twitter className="w-3.5 h-3.5 text-[#2FA499]" />
                    <span>@faithbuilds001</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="p-6 border border-white/[0.1] bg-[#14171A] rounded-sm shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2FA499] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#F6F4EE] font-medium">
                  Currently Open for Projects
                </span>
              </div>
              <p className="text-sm text-[#C8C4BA] leading-relaxed">
                Available for full-stack product development, client web applications, React/Next.js frontend engineering, and backend REST APIs.
              </p>
            </div>

          </div>

          {/* Right Column: Honest, Accessible Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#14171A] border border-white/[0.1] p-7 sm:p-10 rounded-sm shadow-xl">
            
            <div className="mb-7 pb-4 border-b border-white/[0.08]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-1 font-medium">
                Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-[#C8C4BA]">
                Prepares a structured message addressed directly to <span className="text-[#F6F4EE] font-medium">{realEmail}</span>.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs sm:text-sm font-medium text-[#F6F4EE] mb-2"
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
                    className="w-full bg-[#0D0F11] border border-white/[0.14] rounded-sm px-4 py-3 text-sm sm:text-base text-[#F6F4EE] placeholder-[#8E8A80] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs sm:text-sm font-medium text-[#F6F4EE] mb-2"
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
                    className="w-full bg-[#0D0F11] border border-white/[0.14] rounded-sm px-4 py-3 text-sm sm:text-base text-[#F6F4EE] placeholder-[#8E8A80] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs sm:text-sm font-medium text-[#F6F4EE] mb-2"
                >
                  Project or Inquired Subject <span className="text-[#9E988D] text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Web Application / API Consultation"
                  className="w-full bg-[#0D0F11] border border-white/[0.14] rounded-sm px-4 py-3 text-sm sm:text-base text-[#F6F4EE] placeholder-[#8E8A80] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs sm:text-sm font-medium text-[#F6F4EE] mb-2"
                >
                  Message &amp; Scope Outline <span className="text-[#2FA499]" aria-hidden="true">*</span>
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
                  placeholder="Briefly describe what you're building, target timeline, or technical requirements..."
                  className="w-full bg-[#0D0F11] border border-white/[0.14] rounded-sm px-4 py-3 text-sm sm:text-base text-[#F6F4EE] placeholder-[#8E8A80] focus:outline-none focus:border-[#2FA499] focus:ring-1 focus:ring-[#2FA499] transition-colors resize-none leading-relaxed"
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
                    className="p-3.5 bg-red-950/30 border border-red-800/50 rounded-sm flex items-center gap-2.5 text-xs text-red-200 font-mono"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{validationError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Transparent Disclosure / Submission Note */}
              <div className="p-4 bg-[#0D0F11] border border-white/[0.08] rounded-sm text-xs sm:text-sm text-[#C8C4BA] leading-relaxed">
                <span className="text-[#F6F4EE] font-medium">How this works: </span>
                Clicking <span className="text-[#F6F4EE]">Open in Email App</span> launches your default mail client pre-addressed to Faith. You can also use <span className="text-[#F6F4EE]">Copy Formatted Draft</span> to paste directly into Gmail, Outlook, or webmail.
              </div>

              {/* Feedback Note (Truthful and verified) */}
              {submissionFeedback && (
                <div
                  role="status"
                  className="p-4 bg-[#1B1F24] border border-[#2FA499]/50 rounded-sm flex items-start gap-3 text-xs sm:text-sm text-[#F6F4EE]"
                >
                  <Check className="w-4 h-4 text-[#2FA499] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <p className="font-medium text-[#F6F4EE]">{submissionFeedback}</p>
                    <p className="text-[#9E988D] mt-1 font-mono text-xs">
                      Destination Address: {realEmail}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#F6F4EE] hover:bg-[#2FA499] hover:text-[#0D0F11] transition-all rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Email App</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-mono uppercase tracking-wider text-[#F6F4EE] bg-[#0D0F11] hover:bg-[#1B1F24] border border-white/[0.14] hover:border-[#2FA499] transition-all rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-4 h-4 text-[#2FA499]" />
                      <span className="text-[#2FA499]">Draft Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#2FA499]" />
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
