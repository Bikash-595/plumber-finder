export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-dark-navy)] text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-white/80 mb-5">Read plumbing tips, maintenance advice, and service updates.</p>
      <ul className="space-y-4 text-lg">
        <li className="rounded-xl bg-white/5 p-4">How to prevent frozen pipes this winter.</li>
        <li className="rounded-xl bg-white/5 p-4">Signs your water heater needs replacement.</li>
        <li className="rounded-xl bg-white/5 p-4">Why regular drain maintenance saves money.</li>
      </ul>
    </main>
  );
}
