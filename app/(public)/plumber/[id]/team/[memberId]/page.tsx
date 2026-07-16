"use client";

import Link from "next/link";
import { use, type ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaBriefcase,
  FaCertificate,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaStar,
  FaUserTie,
} from "react-icons/fa";
import { plumbers } from "@/data/plumbers";

export const dynamic = "force-dynamic";

export default function TeamMemberProfilePage({
  params,
}: {
  params: Promise<{ id: string; memberId: string }>;
}) {
  const { id, memberId } = use(params);
  const plumber = plumbers.find((item) => item.id === id);
  const member = plumber?.teamMembers?.find((item) => item.id === memberId);

  if (!plumber || !member) notFound();

  const firstName = member.name.split(" ")[0];
  const careerStartYear = new Date().getFullYear() - member.experience;
  const companyStartYear = Math.max(careerStartYear + 1, plumber.established);

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href={`/plumber/${plumber.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0b1f3b] transition hover:text-[#b59a00]"
        >
          <FaArrowLeft /> Back to {plumber.companyName}
        </Link>

        <section className="mt-5 overflow-hidden rounded-3xl bg-[#0f2a4d] text-white shadow-xl">
          <div className="relative overflow-hidden px-6 py-8 sm:px-10 sm:py-11">
            <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#FFD60A]/15 blur-3xl" />
            <div className="absolute -bottom-36 left-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative flex flex-col gap-7 md:flex-row md:items-center">
              <img
                src={member.photo || plumber.logo}
                alt={member.name}
                className="h-36 w-36 rounded-3xl border-4 border-white/25 object-cover shadow-2xl"
              />
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#FFD60A]">
                  Professional at {plumber.companyName}
                </p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{member.name}</h1>
                <p className="mt-3 text-xl font-medium text-slate-200">{member.role}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">{member.availability}</span>
                  <span className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold">Serving {plumber.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative grid border-t border-white/10 bg-black/10 sm:grid-cols-3">
            <HeroStat icon={<FaBriefcase />} label="Industry experience" value={`${member.experience}+ years`} />
            <HeroStat icon={<FaCertificate />} label="Professional training" value={`${member.certificates.length} credentials`} />
            <HeroStat icon={<FaStar />} label="Company experience" value={`${plumber.yearsInBusiness}+ years`} />
          </div>
        </section>

        <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-7">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b59a00]">Professional profile</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">About {firstName}</h2>
              <p className="mt-4 leading-7 text-slate-600">{member.bio}</p>
              <p className="mt-4 leading-7 text-slate-600">
                As part of the {plumber.companyName} team, {firstName} helps customers with clear guidance, careful workmanship, and dependable service from the first visit through final testing.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Specialties</h2>
              <p className="mt-2 text-sm text-slate-500">The services and project types {firstName} focuses on.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {member.specialties.map((specialty) => (
                  <div key={specialty} className="flex items-center gap-3 rounded-2xl border border-[#FFD60A]/25 bg-[#FFD60A]/10 p-4">
                    <FaCheckCircle className="shrink-0 text-[#b59a00]" />
                    <span className="font-semibold text-slate-800">{specialty}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Experience journey</h2>
              <p className="mt-2 text-sm text-slate-500">A snapshot of {firstName}&apos;s professional path.</p>
              <div className="mt-6 space-y-0">
                <JourneyItem year={careerStartYear} title="Started professional plumbing work" detail={`Began building hands-on experience in ${member.specialties[0]?.toLowerCase() ?? "plumbing service"}.`} />
                <JourneyItem year={companyStartYear} title={`Joined ${plumber.companyName}`} detail={`Became part of a local team serving customers across ${plumber.location}.`} />
                <JourneyItem year="Today" title={member.role} detail={`Provides ${member.specialties.slice(0, 2).join(" and ").toLowerCase()} support with a focus on quality and safety.`} last />
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">Certificates & training</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {member.certificates.map((certificate) => (
                  <div key={certificate} className="flex gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                    <FaCertificate className="mt-0.5 text-xl text-[#b59a00]" />
                    <div><p className="font-semibold text-slate-800">{certificate}</p><p className="mt-1 text-xs leading-5 text-slate-500">Professional training recorded for this team member.</p></div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-6 lg:h-fit">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Professional details</h2>
              <div className="mt-6 space-y-5">
                <Detail icon={<FaBriefcase />} label="Experience" value={`${member.experience}+ years in the trade`} />
                <Detail icon={<FaUserTie />} label="Current role" value={member.role} />
                <Detail icon={<FaClock />} label="Availability" value={member.availability} />
                {member.licenseNumber && <Detail icon={<FaShieldAlt />} label="License number" value={member.licenseNumber} />}
                <Detail icon={<FaMapMarkerAlt />} label="Service area" value={plumber.location} />
              </div>
            </section>

            <section className="rounded-3xl bg-[#FFD60A] p-6 text-slate-900 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-700">Need plumbing help?</p>
              <h2 className="mt-2 text-xl font-extrabold">Book the {plumber.companyName} team</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">Choose a convenient time and the company will confirm the right professional for your job.</p>
              <Link href={`/book-plumber?plumber=${plumber.id}`} className="mt-5 block rounded-full bg-[#0f2a4d] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#173e63]">Request a booking</Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function HeroStat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="flex items-center gap-3 px-6 py-4 sm:px-10"><span className="text-[#FFD60A]">{icon}</span><div><p className="text-xs font-semibold uppercase tracking-wide text-white/55">{label}</p><p className="mt-0.5 font-bold text-white">{value}</p></div></div>;
}

function JourneyItem({ year, title, detail, last = false }: { year: string | number; title: string; detail: string; last?: boolean }) {
  return <div className="relative pb-7 pl-24 last:pb-0"><span className="absolute left-0 top-0.5 text-sm font-bold text-[#b59a00]">{year}</span>{!last && <span className="absolute left-[77px] top-7 h-[calc(100%-8px)] w-px bg-slate-200" />}<span className="absolute left-[72px] top-1.5 h-3 w-3 rounded-full bg-[#FFD60A] ring-4 ring-[#FFD60A]/20" /><h3 className="font-bold text-slate-800">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{detail}</p></div>;
}

function Detail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="flex gap-3"><span className="mt-0.5 text-[#b59a00]">{icon}</span><div><p className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</p><p className="mt-1 text-sm font-medium leading-5 text-slate-800">{value}</p></div></div>;
}
