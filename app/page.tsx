import Link from "next/link";

export default function Home() {
  const plumbers = [
    {
      name: "Rapid Flow Plumbing",
      rating: 4.9,
      ratingCount: "1.2k+",
      location: "Austin, TX",
      services: ["Emergency Repair", "Drain Cleaning", "Water Heater"],
      startingFrom: "$145",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qZSJK4biLwHDxJhpoveQ1seAP2j8FMlGQg&s",
    },
    {
      name: "BlueWave Plumbing Co.",
      rating: 4.8,
      ratingCount: "980+",
      location: "Denver, CO",
      services: ["Leak Detection", "Pipe Installation", "Sewer Camera"],
      startingFrom: "$160",
      image:
        "https://plus.unsplash.com/premium_photo-1661921394349-9e3f394d80da?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBsdW1iaW5nJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Precision Pipe Pros",
      rating: 4.9,
      ratingCount: "1.4k+",
      location: "Seattle, WA",
      services: ["Water Heater", "Drain Cleaning", "Remodel Support"],
      startingFrom: "$175",
      image:
        "https://s3.ap-south-1.amazonaws.com/cdn.sajilosewa.com/uploads/blogs/67bd72a68f54d4c9a6ceebd6.webp",
    },
  ];

  const featuredPlumbers = Array.from({ length: 9 }, (_, index) => {
    const basePlumber = plumbers[index % plumbers.length];

    return {
      ...basePlumber,
      id: `${basePlumber.name}-${index + 1}`,
      name: `${basePlumber.name} ${index + 1}`,
    };
  });

  const plumbingGuides = [
    {
      author: "MIA CARTER",
      role: "AUTHOR/REVIEWER",
      date: "MAR 10, 2026",
      title: "How Much Does Drain Cleaning Cost in 2026?",
      excerpt:
        "Use this guide to estimate drain cleaning costs based on clog severity, pipe access, method, and local labor rates.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
      href: "/guides/drain-cleaning-cost",
    },
    {
      author: "NOAH PEREZ",
      role: "AUTHOR/REVIEWER",
      date: "FEB 22, 2026",
      title: "Repair a Water Heater: What to Expect",
      excerpt:
        "Learn typical repair pricing, common failure signs, and when replacing your water heater is more cost-effective.",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80",
      href: "/guides/water-heater-repair",
    },
    {
      author: "AVA NGUYEN",
      role: "AUTHOR/REVIEWER",
      date: "JAN 28, 2026",
      title: "Leak Detection Cost Guide for Homeowners",
      excerpt:
        "Compare leak detection pricing by home size, pipe material, and diagnostic method to budget your repair confidently.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
      href: "/guides/leak-detection-cost",
    },
    {
      author: "ELIJAH BROOKS",
      role: "AUTHOR/REVIEWER",
      date: "JAN 16, 2026",
      title: "How to Prevent Frozen Pipes in Winter",
      excerpt:
        "Protect your plumbing with insulation, smart temperature settings, and winter prep steps before freezing weather arrives.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      href: "/guides/prevent-frozen-pipes",
    },
    {
      author: "LUNA ROSS",
      role: "AUTHOR/REVIEWER",
      date: "DEC 30, 2025",
      title: "Signs You Need a Sewer Line Inspection",
      excerpt:
        "Learn the warning signs of sewer issues, what camera inspections reveal, and when to call a licensed plumber.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      href: "/guides/sewer-line-inspection",
    },
    {
      author: "ETHAN CLARK",
      role: "AUTHOR/REVIEWER",
      date: "DEC 15, 2025",
      title: "Water Pressure Problems: Causes and Fixes",
      excerpt:
        "Understand common pressure issues across fixtures and discover the repair options that can restore steady flow.",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80",
      href: "/guides/water-pressure-problems",
    },
  ];

  const cityAvailability = [
    { city: "New York", plumbers: 125 },
    { city: "Los Angeles", plumbers: 112 },
    { city: "Chicago", plumbers: 98 },
    { city: "Houston", plumbers: 104 },
    { city: "Phoenix", plumbers: 86 },
    { city: "Philadelphia", plumbers: 93 },
    { city: "San Antonio", plumbers: 79 },
    { city: "San Diego", plumbers: 88 },
    { city: "Dallas", plumbers: 96 },
    { city: "San Jose", plumbers: 74 },
    { city: "Austin", plumbers: 91 },
    { city: "Jacksonville", plumbers: 67 },
  ];

  const customerReviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      meta: "wrote a review",
      time: "1 minute ago",
      review:
        "I found a plumber within minutes and got my leaking pipe fixed the same day. The process was easy and stress-free!",
      location: "Chicago, IL",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Michael Rivera",
      rating: 5,
      meta: "shared his experience",
      time: "5 minutes ago",
      review:
        "The quotes were fast, the plumber was professional, and the repair was completed exactly when promised.",
      location: "Austin, TX",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Emily Chen",
      rating: 5,
      meta: "wrote a review",
      time: "7 minutes ago",
      review:
        "I liked how simple it was to compare local plumbers. I booked confidently and had great service from start to finish.",
      location: "Seattle, WA",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Daniel Brooks",
      rating: 5,
      meta: "wrote a review",
      time: "9 minutes ago",
      review:
        "I got connected to a local plumber quickly and the whole experience felt polished, clear, and reliable.",
      location: "Dallas, TX",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Olivia Martinez",
      rating: 5,
      meta: "shared her experience",
      time: "12 minutes ago",
      review:
        "The plumber arrived on time, explained the repair clearly, and fixed the issue without any hassle.",
      location: "Phoenix, AZ",
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "James Wilson",
      rating: 5,
      meta: "wrote a review",
      time: "18 minutes ago",
      review:
        "This saved me a lot of time. I compared options fast and booked someone who did great work the same day.",
      location: "Denver, CO",
      avatar:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80",
      image:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[color:var(--color-dark-navy)]">
      <section
        className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#123260,transparent_45%),radial-gradient(circle_at_top_right,#0f2a4d,transparent_40%),radial-gradient(circle_at_bottom_left,#0f2a4d,transparent_35%)]"
        style={{
          backgroundImage:
            "url('/Plumber%20working%20under%20a%20modern%20sink.png'), radial-gradient(circle at top left, #123260 0%, transparent 45%), radial-gradient(circle at top right, #0f2a4d 0%, transparent 40%), radial-gradient(circle at bottom left, #0f2a4d 0%, transparent 35%)",
          backgroundSize: "cover, auto, auto, auto",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-[#0b1f3b]/55" aria-hidden />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24 lg:items-start">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Find top-rated plumbers in your area fast
            </h1>
            <p className="text-base text-white/80 sm:text-lg">
              Compare vetted local plumbers, read verified reviews, and book the right pro with transparent pricing, no phone tag required.
            </p>
          </div>

          <div className="w-full max-w-5xl rounded-2xl bg-white/10 p-4 backdrop-blur shadow-2xl ring-1 ring-white/10">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
              <label className="flex flex-[3] items-center gap-3 rounded-full bg-white px-4 py-3 text-[color:var(--color-dark-navy)] shadow-lg">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-primary-blue)]/10 text-[color:var(--color-primary-blue)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="m15.5 15.5 3 3" />
                    <circle cx="11" cy="11" r="6" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="w-full bg-transparent text-base outline-none placeholder:text-[color:var(--color-dark-navy)]/50"
                />
              </label>
              <label className="flex w-full items-center gap-3 rounded-full bg-white px-4 py-3 text-[color:var(--color-dark-navy)] shadow-lg lg:flex-[1.1] lg:w-auto">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-alert-orange)]/10 text-[color:var(--color-alert-orange)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M12 21s-7-5.373-7-10A7 7 0 0 1 19 11c0 4.627-7 10-7 10Z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Zip code"
                  className="w-full bg-transparent text-base outline-none placeholder:text-[color:var(--color-dark-navy)]/50"
                />
              </label>
              <button className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-alert-orange)] px-6 py-3 text-base font-semibold text-white shadow-xl transition hover:brightness-110 lg:flex-[0.9]">
                Get Quotes
              </button>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1">Fast Response</span>
              <span className="rounded-full bg-white/10 px-3 py-1">Verified Reviews</span>
              <span className="rounded-full bg-white/10 px-3 py-1">No Hidden Fees</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
            {["Emergency Repair", "Leak Detection", "Water Heater", "Drain Cleaning", "Pipe Install", "Bathroom Remodel"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 px-4 py-2 backdrop-blur transition hover:border-white/40 hover:text-white"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plumbing Services Categories */}
      <section className="bg-[color:var(--color-light-gray)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)] sm:text-3xl">
              Browse Plumbing Services
            </h2>
            <p className="text-base text-[color:var(--color-dark-navy)]/75">
              Find trusted plumbers for the service you need.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Emergency Plumbing",
                desc: "24/7 urgent fixes for burst pipes, backups, and major leaks.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M4 11h16M7 11v-1a5 5 0 0 1 10 0v1" />
                    <rect x="4" y="11" width="16" height="7" rx="2" />
                    <path d="M9 16h6" />
                  </svg>
                ),
              },
              {
                title: "Leak Detection",
                desc: "Pinpoint hidden leaks with non-invasive inspections and repairs.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M12 3s5 5.5 5 9.5A5 5 0 0 1 12 18a5 5 0 0 1-5-5.5C7 8.5 12 3 12 3Z" />
                    <path d="M12 11.5v2" />
                  </svg>
                ),
              },
              {
                title: "Water Heater Repair",
                desc: "Restore hot water with tank and tankless diagnostics and fixes.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <rect x="7" y="3" width="10" height="18" rx="3" />
                    <path d="M10 7h4M10 17h4" />
                    <path d="M10 12.5c1 1 1 2.5 0 3.5" />
                  </svg>
                ),
              },
              {
                title: "Drain Cleaning",
                desc: "Clear clogs and slow drains with snaking and hydro-jetting.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M5 5h14v4a7 7 0 0 1-14 0V5Z" />
                    <path d="M12 9v7" />
                    <path d="M9 16h6" />
                  </svg>
                ),
              },
              {
                title: "Pipe Installation",
                desc: "New lines, reroutes, and upgrades to code with durable materials.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M4 9h16v6H4z" />
                    <path d="M4 12h16" />
                    <path d="M7 9V5h4v4" />
                    <path d="M13 15v4h4v-4" />
                  </svg>
                ),
              },
              {
                title: "Bathroom Remodeling",
                desc: "Plumbing for showers, tubs, and fixtures in full bath upgrades.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d="M5 10h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7Z" />
                    <path d="M9 10V6a3 3 0 1 1 6 0v4" />
                    <path d="M7 15h10" />
                  </svg>
                ),
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-[color:var(--color-medium-gray)] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-primary-blue)]/10 text-[color:var(--color-primary-blue)] transition duration-200 group-hover:bg-[color:var(--color-alert-orange)]/10 group-hover:text-[color:var(--color-alert-orange)]">
                    {item.icon}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[color:var(--color-dark-navy)]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[color:var(--color-dark-navy)]/75">
                      {item.desc}
                    </p>
                    <Link
                      href="/find"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-primary-blue)] transition group-hover:text-[color:var(--color-alert-orange)]"
                    >
                      Find Plumbers
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Plumbers */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)] sm:text-3xl">
              Popular Plumbers Near You
            </h2>
            <p className="text-base text-[color:var(--color-dark-navy)]/75">
              Top-rated local plumbers trusted by homeowners in your area.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plumbers.map((plumber) => (
              <article
                key={plumber.name}
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
                      href="/plumber/elite-plumbing-services"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-alert-orange)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Find the Plumber You Need */}
      <section className="bg-[color:var(--color-light-gray)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)] sm:text-3xl">
              Find the Plumber You Need
            </h2>
            <p className="text-base text-[color:var(--color-dark-navy)]/75">
              Browse trusted local plumbers and choose the right professional for your job.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlumbers.map((plumber) => (
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
                      href="/plumber/elite-plumbing-services"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-alert-orange)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/find"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary-blue)] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Homeowner Guides */}
      <section className="bg-[color:var(--color-light-gray)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-3xl font-extrabold leading-tight text-[color:var(--color-dark-navy)] sm:text-4xl">
                The homeowner&apos;s guide to plumbing care is here
              </h2>
              <p className="text-base text-[color:var(--color-dark-navy)]/80 sm:text-lg">
                From average service costs to expert advice, get all the answers you need to get your plumbing job done.
              </p>
            </div>

            <Link
              href="/guides"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[color:var(--color-primary-blue)] px-10 text-xl font-semibold text-[color:var(--color-primary-blue)] transition hover:bg-[color:var(--color-primary-blue)] hover:text-white"
            >
              See all articles
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plumbingGuides.map((guide) => (
              <article key={guide.title} className="space-y-5">
                <Link href={guide.href} className="block overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-64 w-full object-cover transition duration-200 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </Link>

                <div className="space-y-2.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-dark-navy)]/80 sm:text-xs">
                    {guide.author} - {guide.role} . {guide.date}
                  </p>

                  <h3 className="text-xl font-extrabold leading-tight text-[color:var(--color-dark-navy)] sm:text-2xl">
                    <Link href={guide.href} className="transition hover:text-[color:var(--color-primary-blue)] hover:underline underline-offset-4 decoration-2">
                      {guide.title}
                    </Link>
                  </h3>

                  <p className="text-sm leading-relaxed text-[color:var(--color-dark-navy)]/80 sm:text-base">
                    {guide.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Find Plumbers by City */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)] sm:text-3xl">
              Find Plumbers in Your City
            </h2>
            <p className="text-base text-[color:var(--color-dark-navy)]/75">
              Browse plumbers available in major cities across the United States.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {cityAvailability.map((item) => (
              <button
                key={item.city}
                type="button"
                className="group rounded-xl border border-[color:var(--color-medium-gray)] bg-[color:var(--color-white)] px-4 py-3 text-left text-[color:var(--color-dark-navy)] shadow-sm transition-colors duration-200 hover:bg-[color:var(--color-primary-blue)] hover:text-white"
              >
                <span className="block text-sm font-semibold sm:text-base">{item.city}</span>
                <span className="mt-1 block text-xs text-[color:var(--color-dark-navy)]/70 transition-colors duration-200 group-hover:text-white/85">
                  {item.plumbers} plumbers available
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-[color:var(--color-light-gray)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-extrabold text-[color:var(--color-dark-navy)] sm:text-3xl">
              What Homeowners Are Saying
            </h2>
            <p className="text-base text-[color:var(--color-dark-navy)]/75">
              Real experiences from customers who found plumbers through Plumber Finder.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {customerReviews.map((review) => (
              <article
                key={review.name}
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
                    {review.review}
                  </p>

                  <p className="text-sm font-medium text-[color:var(--color-dark-navy)]/70">
                    📍 {review.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
