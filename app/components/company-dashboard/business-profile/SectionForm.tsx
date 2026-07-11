"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { saveProfileDraft } from "./profileStore";

export type ProfileField = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "url" | "email" | "number" | "date" | "tel" | "checkbox";
  placeholder?: string;
};

type Props = {
  section: string;
  title: string;
  description: string;
  fields: ProfileField[];
  defaults: Record<string, string | boolean>;
};

export default function SectionForm({ section, title, description, fields, defaults }: Props) {
  const schema = z.object(Object.fromEntries(fields.map((field) => [
    field.name,
    field.type === "checkbox" ? z.boolean() : z.string().trim().max(5000),
  ])));
  const form = useForm<Record<string, string | boolean>>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });
  const [notice, setNotice] = useState("");

  const persist = (draft: boolean) => form.handleSubmit((values) => {
    setNotice(saveProfileDraft(section, values, draft));
  })();

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
      <p className="text-xs font-bold uppercase tracking-wider text-[#0b1f3b]">Business Profile</p>
      <h1 className="mt-2 text-2xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 max-w-3xl text-sm text-gray-500">{description}</p>
      <form onSubmit={form.handleSubmit((values) => setNotice(saveProfileDraft(section, values)))} className="mt-7 space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field.name} className={field.type === "textarea" ? "md:col-span-2" : ""}>
              <span className="text-sm font-semibold text-gray-700">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea rows={5} placeholder={field.placeholder} {...form.register(field.name)} className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]/30" />
              ) : field.type === "checkbox" ? (
                <input type="checkbox" {...form.register(field.name)} className="ml-3 h-4 w-4 accent-[#0b1f3b]" />
              ) : (
                <input type={field.type ?? "text"} placeholder={field.placeholder} {...form.register(field.name)} className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]/30" />
              )}
              {form.formState.errors[field.name] && <span className="mt-1 block text-xs text-red-600">Please enter a valid {field.label.toLowerCase()}.</span>}
            </label>
          ))}
        </div>
        {notice && <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">{notice}</p>}
        <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-5">
          <button type="submit" className="rounded-xl bg-[#0b1f3b] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#17345a]">Save changes</button>
          <button type="button" onClick={() => persist(true)} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50">Save as draft</button>
          <button type="button" onClick={() => { form.reset(defaults); setNotice(""); }} className="rounded-xl px-4 py-2.5 text-sm font-bold text-gray-500 hover:bg-gray-50">Cancel</button>
        </div>
      </form>
    </section>
  );
}
