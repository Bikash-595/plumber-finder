"use client";

import { useState } from "react";
import { FaPlus, FaTrash, FaUsers } from "react-icons/fa";
import LocalMediaUpload from "@/components/company-dashboard/business-profile/LocalMediaUpload";
import { saveProfileDraft } from "@/components/company-dashboard/business-profile/profileStore";

type TeamMember = {
  id: string;
  name: string;
  photo: string;
  role: string;
  specialties: string;
  experience: string;
  certificates: string;
  licenseNumber: string;
  phone: string;
  email: string;
  availability: string;
  bio: string;
  visible: boolean;
};

const createMember = (): TeamMember => ({
  id: crypto.randomUUID(),
  name: "",
  photo: "",
  role: "Plumber",
  specialties: "",
  experience: "",
  certificates: "",
  licenseNumber: "",
  phone: "",
  email: "",
  availability: "Available",
  bio: "",
  visible: true,
});

const initialMember: TeamMember = {
  ...createMember(),
  name: "Chris Bennett",
  role: "Owner & Lead Plumber",
  specialties: "Emergency repairs, sewer lines, leak detection",
  experience: "10",
  certificates: "Master Plumber, OSHA 30",
  licenseNumber: "PL-90991",
  availability: "Available",
  bio: "Licensed plumbing professional with extensive emergency repair experience.",
};

export default function TeamManagementForm() {
  const [members, setMembers] = useState<TeamMember[]>([initialMember]);
  const [notice, setNotice] = useState("");

  const updateMember = <Key extends keyof TeamMember>(id: string, key: Key, value: TeamMember[Key]) => {
    setMembers((current) => current.map((member) => member.id === id ? { ...member, [key]: value } : member));
  };

  const save = (draft = false) => setNotice(saveProfileDraft("company-team", { members }, draft));

  return <section>
    <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row sm:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#0b1f3b]">Team management</p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">Add your team members</h1>
        <p className="mt-2 max-w-2xl text-sm text-gray-500">Build a professional team roster for your public company profile. Add as many plumbers, technicians, and office staff as you need.</p>
      </div>
      <div className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700"><FaUsers className="text-[#0b1f3b]" /> {members.length} member{members.length === 1 ? "" : "s"}</div>
    </div>

    <form onSubmit={(event) => { event.preventDefault(); save(); }} className="mt-6 space-y-6">
      {members.map((member, index) => <article key={member.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-wider text-gray-400">Team member {index + 1}</p><h2 className="mt-1 text-lg font-bold text-gray-900">{member.name || "New team member"}</h2></div>{members.length > 1 && <button type="button" onClick={() => setMembers((current) => current.filter((item) => item.id !== member.id))} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50"><FaTrash /> Remove</button>}</div>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2"><LocalMediaUpload label="Profile photo" value={member.photo} onChange={(value) => updateMember(member.id, "photo", value)} /></div>
          <Field label="Full name" value={member.name} required onChange={(value) => updateMember(member.id, "name", value)} placeholder="Team member name" />
          <Field label="Position or role" value={member.role} required onChange={(value) => updateMember(member.id, "role", value)} placeholder="Lead plumber, technician, dispatcher..." />
          <Field label="Specialization topics" value={member.specialties} onChange={(value) => updateMember(member.id, "specialties", value)} placeholder="Drain cleaning, water heaters, repiping" hint="Separate topics with commas" />
          <Field label="Experience" value={member.experience} type="number" onChange={(value) => updateMember(member.id, "experience", value)} placeholder="Years of experience" />
          <Field label="Certificates and training" value={member.certificates} onChange={(value) => updateMember(member.id, "certificates", value)} placeholder="Master Plumber, OSHA, backflow..." hint="Separate with commas" />
          <Field label="License number" value={member.licenseNumber} onChange={(value) => updateMember(member.id, "licenseNumber", value)} placeholder="License number" />
          <Field label="Phone number" value={member.phone} type="tel" onChange={(value) => updateMember(member.id, "phone", value)} placeholder="(555) 000-0000" />
          <Field label="Email address" value={member.email} type="email" onChange={(value) => updateMember(member.id, "email", value)} placeholder="name@company.com" />
          <label><span className="text-sm font-semibold text-gray-700">Availability</span><select value={member.availability} onChange={(event) => updateMember(member.id, "availability", event.target.value)} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#FFD60A]"><option>Available</option><option>On calls</option><option>Office hours</option><option>Not currently available</option></select></label>
          <label className="md:col-span-2"><span className="text-sm font-semibold text-gray-700">Short professional bio</span><textarea rows={4} value={member.bio} onChange={(event) => updateMember(member.id, "bio", event.target.value)} placeholder="Describe the person’s experience and customer-facing expertise." className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#FFD60A]" /></label>
          <label className="md:col-span-2 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700"><input type="checkbox" checked={member.visible} onChange={(event) => updateMember(member.id, "visible", event.target.checked)} className="h-4 w-4 accent-[#0b1f3b]" /> Show this team member on the public company profile</label>
        </div>
      </article>)}
      <button type="button" onClick={() => setMembers((current) => [...current, createMember()])} className="inline-flex items-center gap-2 rounded-xl border border-[#0b1f3b] px-4 py-2.5 text-sm font-bold text-[#0b1f3b] transition hover:bg-[#0b1f3b] hover:text-white"><FaPlus /> Add another team member</button>
      {notice && <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">{notice}</p>}
      <div className="flex flex-wrap gap-3 border-t border-gray-100 pt-5"><button type="submit" className="rounded-xl bg-[#0b1f3b] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#17345a]">Save team members</button><button type="button" onClick={() => save(true)} className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50">Save as draft</button></div>
    </form>
  </section>;
}

function Field({ label, value, onChange, type = "text", placeholder, hint, required = false }: { label: string; value: string; onChange: (value: string) => void; type?: "text" | "number" | "tel" | "email"; placeholder?: string; hint?: string; required?: boolean }) {
  return <label><span className="text-sm font-semibold text-gray-700">{label}</span>{hint && <span className="ml-2 text-xs text-gray-400">{hint}</span>}<input type={type} required={required} min={type === "number" ? "0" : undefined} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#FFD60A]" /></label>;
}
