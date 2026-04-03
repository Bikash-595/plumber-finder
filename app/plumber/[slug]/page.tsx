import Image from "next/image";
import Link from "next/link";

const plumberProfile = {
  name: "Elite Plumbing Services",
  city: "Dallas",
  state: "TX",
  rating: 4.8,
  reviewCount: 124,
  verified: true,
  experience: "15+ Years Experience",
  responseTime: "Typically responds in 10 minutes",
  jobsCompleted: "2,300+ jobs completed",
  phone: "(214) 555-0172",
  about:
    "Elite Plumbing Services provides professional residential and commercial plumbing services across Dallas. Our experienced team specializes in emergency repairs, drain cleaning, water heater installation, and pipe replacement.",
  services: [
    "Emergency Plumbing",
    "Leak Detection",
    "Drain Cleaning",
    "Water Heater Repair",
    "Pipe Installation",
    "Bathroom Remodel",
  ],
  serviceAreas: ["Dallas", "Plano", "Arlington", "Fort Worth"],
  businessInfo: {
    hours: "Mon-Sat: 7:00 AM - 8:00 PM, Sun: Emergency Only",
    license: "TX-PLM-492187",
    languages: "English, Spanish",
    paymentMethods: "Cash, Credit Card, Zelle, ACH",
  },
  gallery: [
    {
      src: "/Plumber working under a modern sink.png",
      alt: "Technician repairing pipes beneath a kitchen sink",
    },
    {
      src: "/Plumber.png",
      alt: "Professional plumber installing a bathroom pipe",
    },
    {
      src: "/Plumber (1).png",
      alt: "Service team preparing plumbing tools on-site",
    },
    {
      src: "/Plumber working under a modern sink.png",
      alt: "Close-up of precision leak detection and repair work",
    },
  ],
  reviews: [
    {
      name: "Maria Johnson",
      rating: 5,
      text: "Excellent response time and very professional team. They fixed our water heater issue in one visit.",
      date: "March 30, 2026",
      meta: "shared her experience",
      time: "2 days ago",
      location: "Dallas, TX",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      image: "/Plumber working under a modern sink.png",
    },
    {
      name: "Kevin Patel",
      rating: 5,
      text: "Clear communication, fair pricing, and clean workmanship. Highly recommend for leak repairs.",
      date: "March 21, 2026",
      meta: "wrote a review",
      time: "1 week ago",
      location: "Plano, TX",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      image: "/Plumber.png",
    },
    {
      name: "Angela Brooks",
      rating: 4,
      text: "Booked for emergency plumbing and they arrived quickly. Great service and friendly technicians.",
      date: "March 14, 2026",
      meta: "shared her experience",
      time: "2 weeks ago",
      location: "Arlington, TX",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      image: "/Plumber (1).png",
    },
  ],
  similarPlumbers: [
    {
      id: "metropipe-experts",
      name: "MetroPipe Experts",
      rating: 4.7,
      ratingCount: "98+",
      reviews: 98,
      location: "Dallas, TX",
      startingFrom: "$145",
      image: "/Plumber working under a modern sink.png",
      services: ["Emergency Repair", "Drain Cleaning", "Water Heater"],
      href: "/plumber/elite-plumbing-services",
    },
    {
      id: "quickfix-plumbing-co",
      name: "QuickFix Plumbing Co.",
      rating: 4.9,
      ratingCount: "163+",
      reviews: 163,
      location: "Dallas, TX",
      startingFrom: "$160",
      image: "/Plumber.png",
      services: ["Leak Detection", "Pipe Installation", "Sewer Camera"],
      href: "/plumber/elite-plumbing-services",
    },
    {
      id: "north-star-plumbing",
      name: "North Star Plumbing",
      rating: 4.6,
      ratingCount: "84+",
      reviews: 84,
      location: "Dallas, TX",
      startingFrom: "$175",
      image: "/Plumber (1).png",
      services: ["Water Heater", "Drain Cleaning", "Remodel Support"],
      href: "/plumber/elite-plumbing-services",
    },
    {
      id: "trueflow-services",
      name: "TrueFlow Services",
      rating: 4.8,
      ratingCount: "127+",
      reviews: 127,
      location: "Dallas, TX",
      startingFrom: "$155",
      image: "/Plumber working under a modern sink.png",
      services: ["Emergency Repair", "Leak Detection", "Pipe Install"],
      href: "/plumber/elite-plumbing-services",
    },
  ],
};

function StarRow({ count, size = "h-4 w-4" }: { count: number; size?: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[color:var(--color-alert-orange)]" aria-label={`${count} star rating`}>
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={size}
        >
          <path d="m12 2.25 2.72 5.51 6.08.89-4.4 4.29 1.04 6.06L12 16.2l-5.44 2.8 1.04-6.06-4.4-4.29 6.08-.89L12 2.25Z" />
        </svg>
      ))}
    </span>
  );
}

export default function PlumberDetailPage() {
  return (
    <main className="bg-white pb-16 pt-8 sm:pt-10">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-[color:var(--color-dark-navy)]/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition hover:text-[color:var(--color-primary-blue)]">
                Home
              </Link>
            </li>
            <li aria-hidden>→</li>
            <li>
              <Link href="/find" className="transition hover:text-[color:var(--color-primary-blue)]">
                Plumbers
              </Link>
            </li>
            <li aria-hidden>→</li>
            <li>
              <Link href="/cities/dallas" className="transition hover:text-[color:var(--color-primary-blue)]">
                Dallas
              </Link>
            </li>
            <li aria-hidden>→</li>
            <li className="font-semibold text-[color:var(--color-dark-navy)]">{plumberProfile.name}</li>
          </ol>
        </nav>

        <section>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <figure className="overflow-hidden rounded-3xl bg-[color:var(--color-light-gray)]">
                <Image
                  src={plumberProfile.gallery[0].src}
                  alt={plumberProfile.gallery[0].alt}
                  width={820}
                  height={600}
                  className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[28rem]"
                  priority
                />
              </figure>
              <div className="grid grid-cols-3 gap-3 justify-items-center">
                {plumberProfile.gallery.slice(1).map((image) => (
                  <figure key={image.alt} className="w-full overflow-hidden rounded-2xl bg-[color:var(--color-light-gray)]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={280}
                      className="h-20 w-[74%] object-cover sm:h-24"
                    />
                  </figure>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 ring-1 ring-[color:var(--color-medium-gray)] lg:sticky lg:top-24 lg:h-fit">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-primary-blue)]">
                Verified Local Business
              </div>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[color:var(--color-dark-navy)] sm:text-[2.15rem]">
                {plumberProfile.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[color:var(--color-dark-navy)]/80">
                <span className="inline-flex items-center gap-2 font-semibold text-[color:var(--color-dark-navy)]">
                  <StarRow count={5} />
                  <span>{plumberProfile.rating}</span>
                  <span>({plumberProfile.reviewCount} reviews)</span>
                </span>
                <span className="text-[color:var(--color-dark-navy)]/35">•</span>
                <span>📍 {plumberProfile.city}, {plumberProfile.state}</span>
                <span className="text-[color:var(--color-dark-navy)]/35">•</span>
                <span>{plumberProfile.experience}</span>
              </div>
              <div className="mt-5 space-y-2 text-sm text-[color:var(--color-dark-navy)]/78">
                <p className="font-semibold text-[color:var(--color-dark-navy)]">{plumberProfile.jobsCompleted}</p>
                <p>{plumberProfile.responseTime}</p>
                <p>Licensed and insured in Texas</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                  Get Quote
                </button>
                <a
                  href="tel:+12145550172"
                  className="inline-flex items-center justify-center rounded-full bg-[#0077FF] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Call Now
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-[color:var(--color-dark-navy)]/70">
                <div className="rounded-2xl bg-white px-3 py-3">
                  Same Day
                </div>
                <div className="rounded-2xl bg-white px-3 py-3">
                  Free Quote
                </div>
                <div className="rounded-2xl bg-white px-3 py-3">
                  Insured
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="space-y-7 lg:col-span-3">
              <article className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-primary-blue)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-primary-blue)]">
                  About the Plumber
                </div>
                <div className="space-y-4 text-[color:var(--color-dark-navy)]/82">
                  <p className="text-base leading-7">
                    Elite Plumbing Services is a Dallas-based team built for homeowners and businesses that need reliable plumbing support without the runaround. With over 15 years serving the North Texas community, they've built a reputation on honest assessments, transparent pricing, and workmanship that lasts.
                  </p>
                  <p className="leading-7">
                    From urgent leak repairs to planned upgrades, the crew handles service calls with a clean, professional process, clear communication, and practical solutions that hold up over time. Whether you're dealing with a burst pipe at midnight or planning a bathroom remodel, their technicians arrive fully equipped and ready to solve your problem the first time.
                  </p>
                  <p className="leading-7">
                    Their focus is simple: respond fast, diagnose accurately, and complete the job with workmanship that feels dependable from the first visit. The team invests in ongoing training to stay current with the latest plumbing technologies and best practices, ensuring customers benefit from both experience and innovation.
                  </p>
                  <p className="leading-7">
                    Each technician is licensed, insured, and background-checked. They respect your home or business, protecting floors and fixtures while working, and cleaning up thoroughly once the job is complete. Most jobs are finished in a single visit, keeping disruption to your schedule minimal.
                  </p>
                  <p className="leading-7">
                    Customer satisfaction isn't just a goal—it's measured. Thousands of homeowners across Dallas, Plano, Arlington, and Fort Worth have trusted Elite Plumbing with their most critical systems, and their 4.8-star rating reflects that trust. If you're unsure whether you need their services or want a second opinion, they offer free in-home consultations to assess your situation with no pressure to book.
                  </p>
                </div>
              </article>

              <article className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-dark-navy)]/6 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-dark-navy)]/70">
                  Services Offered
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {plumberProfile.services.map((service) => (
                    <div
                      key={service}
                      className="rounded-2xl bg-[color:var(--color-light-gray)] px-4 py-3 text-sm font-semibold text-[color:var(--color-dark-navy)] shadow-[0_1px_0_rgba(11,31,59,0.04)]"
                    >
                      <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--color-alert-orange)] align-middle" />
                      {service}
                    </div>
                  ))}
                </div>
              </article>

              <article className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-alert-orange)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-alert-orange)]">
                  Service Areas
                </div>
                <div className="flex flex-wrap gap-3">
                  {plumberProfile.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-[color:var(--color-medium-gray)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--color-dark-navy)]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </article>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <article>
                <h2 className="text-xl font-bold text-[color:var(--color-dark-navy)]">Business Information</h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="border-b border-[color:var(--color-medium-gray)] pb-3">
                    <dt className="font-semibold text-[color:var(--color-dark-navy)]/70">Business Hours</dt>
                    <dd className="mt-1 text-[color:var(--color-dark-navy)]/85">{plumberProfile.businessInfo.hours}</dd>
                  </div>
                  <div className="border-b border-[color:var(--color-medium-gray)] pb-3">
                    <dt className="font-semibold text-[color:var(--color-dark-navy)]/70">License Number</dt>
                    <dd className="mt-1 text-[color:var(--color-dark-navy)]/85">{plumberProfile.businessInfo.license}</dd>
                  </div>
                  <div className="border-b border-[color:var(--color-medium-gray)] pb-3">
                    <dt className="font-semibold text-[color:var(--color-dark-navy)]/70">Languages Spoken</dt>
                    <dd className="mt-1 text-[color:var(--color-dark-navy)]/85">{plumberProfile.businessInfo.languages}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[color:var(--color-dark-navy)]/70">Payment Methods</dt>
                    <dd className="mt-1 text-[color:var(--color-dark-navy)]/85">{plumberProfile.businessInfo.paymentMethods}</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)]">Customer Reviews</h2>
            <p className="text-sm font-semibold text-[color:var(--color-dark-navy)]/65">Average rating {plumberProfile.rating} from {plumberProfile.reviewCount} reviews</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {plumberProfile.reviews.map((review) => (
              <article
                key={`${review.name}-${review.date}`}
                className="group overflow-hidden rounded-2xl border border-[color:var(--color-medium-gray)] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 px-5 pt-5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
                    loading="lazy"
                  />

                  <div className="min-w-0">
                    <p className="truncate text-base font-semibold text-[color:var(--color-dark-navy)]">
                      {review.name} {review.meta}
                    </p>
                    <p className="text-sm text-[color:var(--color-dark-navy)]/65">{review.time}</p>
                  </div>
                </div>

                <div className="mt-4 border-y border-[color:var(--color-medium-gray)] bg-[color:var(--color-light-gray)]">
                  <img
                    src={review.image}
                    alt={`${review.name} review image`}
                    className="h-48 w-full object-cover sm:h-44 lg:h-40"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-3 px-5 py-5">
                  <h3 className="text-lg font-semibold text-[color:var(--color-dark-navy)]">
                    Homeowner Review
                  </h3>

                  <div className="flex items-center gap-1 text-[#F59E0B]" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d="m12 2.75 2.35 4.76 5.26.76-3.8 3.7.9 5.23L12 15.97 7.29 17.2l.9-5.23-3.8-3.7 5.26-.76L12 2.75Z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-[color:var(--color-dark-navy)]/80">
                    {review.text}
                  </p>

                  <p className="text-sm font-medium text-[color:var(--color-dark-navy)]/70">
                    📍 {review.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)]">Request Quote</h2>
              <p className="mt-2 text-sm text-[color:var(--color-dark-navy)]/70">
                Share details about your plumbing needs and Elite Plumbing will get back to you within 10 minutes with a personalized quote. No hidden fees, no pressure—just honest pricing and expert solutions tailored to your situation.
              </p>

              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-dark-navy)]">
                  Name
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="rounded-lg border border-[color:var(--color-medium-gray)] px-3 py-2.5 outline-none ring-[color:var(--color-primary-blue)] transition focus:ring-2"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-dark-navy)]">
                  Phone
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="rounded-lg border border-[color:var(--color-medium-gray)] px-3 py-2.5 outline-none ring-[color:var(--color-primary-blue)] transition focus:ring-2"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-dark-navy)] sm:col-span-2">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-lg border border-[color:var(--color-medium-gray)] px-3 py-2.5 outline-none ring-[color:var(--color-primary-blue)] transition focus:ring-2"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-dark-navy)] sm:col-span-2">
                  Service Needed
                  <input
                    type="text"
                    placeholder="Drain cleaning, leak repair, water heater, etc."
                    className="rounded-lg border border-[color:var(--color-medium-gray)] px-3 py-2.5 outline-none ring-[color:var(--color-primary-blue)] transition focus:ring-2"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-dark-navy)] sm:col-span-2">
                  Message
                  <textarea
                    rows={5}
                    placeholder="Tell us about your plumbing issue"
                    className="resize-y rounded-lg border border-[color:var(--color-medium-gray)] px-3 py-2.5 outline-none ring-[color:var(--color-primary-blue)] transition focus:ring-2"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                  >
                    Request Quote
                  </button>
                </div>
              </form>
            </div>

            <aside className="rounded-3xl bg-[color:var(--color-light-gray)] p-6 lg:sticky lg:top-24 lg:h-fit">
              <h3 className="text-lg font-bold text-[color:var(--color-dark-navy)]">Need urgent help?</h3>
              <p className="mt-2 text-sm text-[color:var(--color-dark-navy)]/70">
                For emergency plumbing situations—burst pipes, gas leaks, severe backups—call now for fastest dispatch in the Dallas area. Elite Plumbing offers 24/7 emergency response with technicians ready to stabilize your situation and prevent further damage.
              </p>
              <a
                href="tel:+12145550172"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#0077FF] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Call {plumberProfile.phone}
              </a>
              <ul className="mt-5 space-y-2 text-sm text-[color:var(--color-dark-navy)]/80">
                <li>• Available 24/7 for emergencies</li>
                <li>• Typically responds within 10 minutes</li>
                <li>• Licensed, insured, and background-checked technicians</li>
                <li>• Transparent upfront pricing—no surprise charges</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)]">Similar Plumbers in Dallas</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plumberProfile.similarPlumbers.slice(0, 3).map((plumber) => (
              <article
                key={plumber.id}
                className="group overflow-hidden rounded-xl border border-[color:var(--color-medium-gray)] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[color:var(--color-light-gray)]">
                  <img
                    src={plumber.image}
                    alt={`${plumber.name} profile`}
                    className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-3 p-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[color:var(--color-dark-navy)]">{plumber.name}</h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--color-dark-navy)]">
                      <span className="inline-flex items-center text-[#F59E0B]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                          <path d="m12 2.75 2.35 4.76 5.26.76-3.8 3.7.9 5.23L12 15.97 7.29 17.2l.9-5.23-3.8-3.7 5.26-.76L12 2.75Z" />
                        </svg>
                      </span>
                      <span className="text-[color:var(--color-dark-navy)]">{plumber.rating.toFixed(1)}</span>
                      <span className="text-[color:var(--color-dark-navy)]/60">({plumber.ratingCount})</span>
                      <span className="text-[color:var(--color-dark-navy)]/60">|</span>
                      <span className="text-[color:var(--color-dark-navy)]/80">from {plumber.startingFrom}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[color:var(--color-dark-navy)]/70">{plumber.location}</p>

                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-[color:var(--color-dark-navy)]/80">
                    {plumber.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-[color:var(--color-light-gray)] px-3 py-1"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link
                      href={plumber.href}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-alert-orange)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
