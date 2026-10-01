"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description?: string;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const company = formData.get("company")?.toString().trim();
    const projectType = formData.get("projectType")?.toString().trim();
    const description = formData.get("description")?.toString().trim();

    if (!name || name.length < 2) {
      errors.name = "Please enter your name";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!company || company.length < 2) {
      errors.company = "Please enter your company name";
    }
    if (!projectType) {
      errors.projectType = "Please select a project type";
    }
    if (!description || description.length < 20) {
      errors.description = "Please provide at least 20 characters";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  };

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
                Have something
                <br />
                worth building?
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg">
                Tell us what you&rsquo;re working on. We&rsquo;ll help turn the idea into
                a clear path forward.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary mb-1">Email</div>
                    <a
                      href="mailto:hello@elyvoraq.com"
                      className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      hello@elyvoraq.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary mb-1">Phone</div>
                    <a
                      href="tel:+251911234567"
                      className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      +251 911 234 567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary mb-1">Presence</div>
                    <p className="text-sm text-text-secondary">
                      Currently operating remotely from Ethiopia and available for local and
                      international engagements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary mb-1">LinkedIn</div>
                    <a
                      href="https://linkedin.com"
                      className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      linkedin.com/company/elyvoraq
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="p-10 bg-surface rounded-2xl border border-border text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-3">
                      Thank you
                    </h3>
                    <p className="text-text-secondary">
                      We have received your message and will get back to you within two
                      business days.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="p-8 lg:p-10 bg-surface rounded-2xl border border-border space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium tracking-wide uppercase text-text-primary mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ${
                            errors.name ? "border-red-500/60" : "border-border"
                          }`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-xs text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium tracking-wide uppercase text-text-primary mb-2"
                        >
                          Work email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ${
                            errors.email ? "border-red-500/60" : "border-border"
                          }`}
                          placeholder="jane@company.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-xs text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-medium tracking-wide uppercase text-text-primary mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "company-error" : undefined}
                        className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 ${
                          errors.company ? "border-red-500/60" : "border-border"
                        }`}
                        placeholder="Acme Inc."
                      />
                      {errors.company && (
                        <p id="company-error" className="mt-1.5 text-xs text-red-500">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-xs font-medium tracking-wide uppercase text-text-primary mb-2"
                        >
                          Project type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          aria-invalid={!!errors.projectType}
                          aria-describedby={errors.projectType ? "projectType-error" : undefined}
                          className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 appearance-none ${
                            errors.projectType ? "border-red-500/60" : "border-border"
                          }`}
                        >
                          <option value="">Select a type</option>
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="AI & Data">AI & Data</option>
                          <option value="Digital Products">Digital Products</option>
                          <option value="Web & Digital Experience">Web & Digital Experience</option>
                          <option value="Brand & Creative">Brand & Creative</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.projectType && (
                          <p id="projectType-error" className="mt-1.5 text-xs text-red-500">
                            {errors.projectType}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-xs font-medium tracking-wide uppercase text-text-primary mb-2"
                        >
                          Budget range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 appearance-none"
                        >
                          <option value="">Select a range</option>
                          <option value="< $50k">Less than $50k</option>
                          <option value="$50k - $100k">$50k - $100k</option>
                          <option value="$100k - $250k">$100k - $250k</option>
                          <option value="$250k+">$250k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-xs font-medium tracking-wide uppercase text-text-primary mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 appearance-none"
                      >
                        <option value="">Select a timeline</option>
                        <option value="< 3 months">Less than 3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="12+ months">12+ months</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-xs font-medium tracking-wide uppercase text-text-primary mb-2"
                      >
                        Project description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        required
                        aria-invalid={!!errors.description}
                        aria-describedby={errors.description ? "description-error" : undefined}
                        className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none ${
                          errors.description ? "border-red-500/60" : "border-border"
                        }`}
                        placeholder="Describe your project, goals, and timeline..."
                      />
                      {errors.description && (
                        <p id="description-error" className="mt-1.5 text-xs text-red-500">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Start a Project
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
