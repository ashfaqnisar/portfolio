"use client";

import { useState } from "react";

import { SubmitButton } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = encodeURIComponent(
      `Hi Ashfaq,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio inquiry");
    const mailto = `mailto:ashfaqnisar00@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setStatus("success");
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Job opportunity, collaboration, etc."
          value={form.subject}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about the role or project..."
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <SubmitButton type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </SubmitButton>
      {status === "success" && (
        <p className="text-sm text-emerald-400">
          Opening your email client — feel free to follow up at ashfaqnisar00@gmail.com.
        </p>
      )}
    </form>
  );
}
