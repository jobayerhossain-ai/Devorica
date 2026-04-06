import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactDetails = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px]">
        <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
      </svg>
    ),
    label: "Headquarters",
    value: "Feni Sadar, Chittagong, Bangladesh",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
      </svg>
    ),
    label: "Email Us",
    value: "support@devorica.com",
    href: "mailto:support@devorica.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[18px] h-[18px]">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
      </svg>
    ),
    label: "Call Us",
    value: "+880 1402 280 145",
    href: "tel:+8801402280145",
  },
];

const inputBase =
  "w-full bg-white/[0.03] border border-white/10 rounded-[10px] px-4 py-3 text-[15px] text-[#e6e8ec] placeholder:text-[#9aa4b2]/40 outline-none focus:border-[rgba(79,124,255,0.4)] focus:bg-white/[0.05] focus:ring-1 focus:ring-[rgba(79,124,255,0.15)] transition-all duration-200";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handlePhoneChange = (newPhone: string) => {
    setPhone(newPhone);
    if (newPhone.length > 5) {
      setIsPhoneValid(isValidPhoneNumber(newPhone));
    } else {
      setIsPhoneValid(true);
    }
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#02040a] relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Section header */}
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4f7cff] mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[3.25rem] font-[700] tracking-[-0.025em] leading-[1.1] mb-5 text-[#e6e8ec]">
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f7cff] to-blue-400">
                Exceptional
              </span>
            </h2>
            <p className="text-[#9aa4b2] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Share your vision with us and our team will craft a tailored strategy to bring it to life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left — Contact Info */}
          <AnimatedSection className="lg:col-span-2 lg:pt-4">
            <div className="space-y-4">
              {contactDetails.map((item, index) => (
                <AnimatedSection key={item.label} delay={index * 0.08}>
                  <div className="group relative rounded-[16px] border border-white/10 bg-[linear-gradient(145deg,#0b0f19,#070a12)] p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[rgba(79,124,255,0.3)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(79,124,255,0.15),transparent)] backdrop-blur-[6px] transition-all duration-300 group-hover:scale-[1.06] group-hover:border-[rgba(79,124,255,0.4)] group-hover:shadow-[0_0_16px_rgba(79,124,255,0.2)]">
                        <span className="text-[#4f7cff]">{item.icon}</span>
                      </div>
                      {/* Text */}
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9aa4b2] mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[#e6e8ec] text-[15px] font-medium leading-relaxed hover:text-white transition-colors duration-200 break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#e6e8ec] text-[15px] font-medium leading-relaxed">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Response time + Availability */}
            <div className="mt-8 rounded-[16px] border border-white/10 bg-[linear-gradient(145deg,#0b0f19,#070a12)] px-5 py-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[13px] text-[#9aa4b2] font-medium">
                    Available for new projects
                  </span>
                </div>
                <span className="text-[12px] text-[#9aa4b2]/60 font-medium tracking-wide">
                  Avg. response: &lt;24h
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form Card */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(145deg,#0b0f19,#070a12)] p-6 sm:p-8 md:p-10">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2 block">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2 block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2 block">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className={inputBase}
                  />
                </div>

                <div className="phone-input-container">
                  <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2 block">
                    Phone
                  </label>
                  <PhoneInput
                    defaultCountry="bd"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="international-phone-input"
                    inputClassName={`!w-full !bg-white/[0.03] !border !border-white/10 !rounded-[10px] !px-4 !py-3 !text-[15px] !text-[#e6e8ec] !placeholder:text-[#9aa4b2]/40 !outline-none focus:!border-[rgba(79,124,255,0.4)] focus:!bg-white/[0.05] focus:!ring-1 focus:!ring-[rgba(79,124,255,0.15)] !transition-all !duration-200 ${!isPhoneValid ? "!border-red-500/60" : ""}`}
                    countrySelectorStyleProps={{
                      buttonClassName:
                        "!bg-white/[0.03] !border !border-white/10 !rounded-[10px] !py-3 !px-3 !flex !items-center !justify-center hover:!bg-white/[0.05] !transition-colors",
                    }}
                  />
                  {!isPhoneValid && (
                    <p className="text-xs text-red-400/90 mt-1.5">
                      Please enter a valid phone number for the selected country.
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2 block">
                    Service Interest
                  </label>
                  <Select>
                    <SelectTrigger className="w-full h-auto bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-[15px] text-white/25 data-[state=open]:text-white data-[state=open]:border-primary/50 data-[state=open]:bg-white/[0.05] data-[state=open]:ring-1 data-[state=open]:ring-primary/20 focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/20 transition-all duration-200 [&>svg]:text-white/30 [&>svg]:h-4 [&>svg]:w-4">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0c0e16] border border-white/[0.08] rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] backdrop-blur-xl p-1.5 z-[999]">
                      <SelectItem value="web" className="rounded-lg px-3 py-2.5 text-[14px] text-white/70 cursor-pointer focus:bg-white/[0.06] focus:text-white transition-colors">
                        Web & Software Engineering
                      </SelectItem>
                      <SelectItem value="mobile" className="rounded-lg px-3 py-2.5 text-[14px] text-white/70 cursor-pointer focus:bg-white/[0.06] focus:text-white transition-colors">
                        Mobile App Development
                      </SelectItem>
                      <SelectItem value="redesign" className="rounded-lg px-3 py-2.5 text-[14px] text-white/70 cursor-pointer focus:bg-white/[0.06] focus:text-white transition-colors">
                        Website Redesign & Optimization
                      </SelectItem>
                      <SelectItem value="seo" className="rounded-lg px-3 py-2.5 text-[14px] text-white/70 cursor-pointer focus:bg-white/[0.06] focus:text-white transition-colors">
                        SEO & Growth Strategy
                      </SelectItem>
                      <SelectItem value="support" className="rounded-lg px-3 py-2.5 text-[14px] text-white/70 cursor-pointer focus:bg-white/[0.06] focus:text-white transition-colors">
                        Ongoing Maintenance & Support
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40 mb-2 block">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full mt-2"
                >
                  Get My Free Proposal
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-3 text-[11px] text-white/30">
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" /></svg>NDA Protected</span>
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" /></svg>Free Consultation</span>
                  <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" /></svg>Dedicated Project Manager</span>
                </div>

                <p className="text-center text-[12px] text-[#9aa4b2]/50 pt-1">
                  Your data is secure and will never be shared with third parties.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
