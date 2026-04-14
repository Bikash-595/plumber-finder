export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-dark-navy)] text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Our Plumbing Services</h1>
      <p className="mb-6 text-white/80">We offer a full range of residential and commercial plumbing services:</p>
      <ul className="list-disc pl-5 space-y-2 text-lg">
        <li>Leak repair & pipe replacement</li>
        <li>Drain cleaning & sewer line service</li>
        <li>Water heater installation & repair</li>
        <li>Emergency 24/7 service</li>
        <li>Bathroom/Kitchen remodel plumbing</li>
      </ul>
    </main>
  );
}
