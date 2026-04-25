"use client";

import { use, useEffect, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import { plumbers } from "@/data/plumbers";
import Image from "next/image";
import Link from "next/link";
import LatestArticleCard from "@/components/plumber/LatestArticleCard";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function buildArticleMarkup(rawHtml: string): { html: string; toc: TocItem[] } {
  const counts: Record<string, number> = {};
  const toc: TocItem[] = [];

  const html = rawHtml.replace(/<(h[23])>([\s\S]*?)<\/\1>/gi, (_, tag: string, inner: string) => {
    const text = inner.replace(/<[^>]*>/g, "").trim();
    if (!text) return `<${tag}>${inner}</${tag}>`;

    const base = slugify(text) || "section";
    counts[base] = (counts[base] ?? 0) + 1;
    const id = counts[base] === 1 ? base : `${base}-${counts[base]}`;
    const normalizedTag = tag.toLowerCase();

    toc.push({
      id,
      text,
      level: normalizedTag === "h3" ? 3 : 2,
    });

    const headingClasses =
      normalizedTag === "h2"
        ? "scroll-mt-28 mt-10 mb-4 text-3xl font-extrabold leading-tight text-[#0f1b36]"
        : "scroll-mt-28 mt-8 mb-3 text-2xl font-bold leading-snug text-[#0f1b36]";

    return `<${normalizedTag} id="${id}" class="${headingClasses}">${inner}</${normalizedTag}>`;
  });

  return { html, toc };
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const { id, slug } = use(params);
  const plumber = plumbers.find((p) => p.id === id);
  if (!plumber) return notFound();

  const post = plumber.blogs?.find((b) => b.slug === slug);
  if (!post) return notFound();

  const article = useMemo(() => buildArticleMarkup(post.content), [post.content]);
  const relatedPosts = useMemo(() => {
    const allPosts = plumbers.flatMap((entry) =>
      (entry.blogs ?? []).map((blogPost) => ({ plumberId: entry.id, post: blogPost }))
    );

    const samePlumber = allPosts.filter(
      (entry) => entry.plumberId === plumber.id && entry.post.slug !== post.slug
    );
    const others = allPosts.filter((entry) => entry.plumberId !== plumber.id);

    return [...samePlumber, ...others]
      .filter((entry, index, array) => index === array.findIndex((item) => item.post.slug === entry.post.slug && item.plumberId === entry.plumberId))
      .slice(0, 3);
  }, [plumber.id, post.slug]);
  const [activeSection, setActiveSection] = useState<string>(article.toc[0]?.id ?? "");
  const [currentUrl, setCurrentUrl] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    setCurrentUrl(window.location.href);

    const onScroll = () => {
      const sectionNodes = article.toc
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => Boolean(el));

      const current = sectionNodes.find((node) => {
        const rect = node.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });

      if (current) setActiveSection(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [article.toc]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const encodedUrl = encodeURIComponent(currentUrl || "");
  const encodedTitle = encodeURIComponent(post.title);
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="w-full bg-[#eef3fb] py-8 sm:py-10">
        <div className="mx-auto max-w-[52rem] px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-[#eef3fb] px-2 py-1">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#52698c] sm:text-xs">
              <Link href="/blogs" className="shrink-0 transition hover:text-[#1f3656]">
                Blog
              </Link>
              <span className="shrink-0 text-[#6f809a]" aria-hidden>›</span>
              <span className="truncate text-[#1f3656]/90">{post.title}</span>
            </nav>
          </div>

          <h1 className="mt-4 max-w-4xl text-2xl font-extrabold leading-tight text-[#0f1b36] sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#f7672c] bg-white">
              <Image
                src={plumber.logo || "/Plumber.png"}
                alt={post.author}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="text-[#415879]">
              <p className="text-base sm:text-lg">
                Written by <span className="font-semibold text-[#f7672c]">{post.author}</span>
              </p>
              <p className="text-sm sm:text-base">Published: {post.date}</p>
              <p className="text-sm sm:text-base">Updated: {post.date}</p>
              <p className="text-sm sm:text-base">{post.readTime} min read</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-8">
        <section className="mt-8 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_240px] xl:grid-cols-[300px_minmax(0,56rem)_260px]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-[#0b1f3b]/20 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-black">Contents:</h2>
              <ol className="mt-4 space-y-2 text-sm text-[#22385a]">
                {article.toc.length === 0 && <li>No headings available</li>}
                {article.toc.map((item, index) => (
                  <li key={item.id} className={item.level === 3 ? "pl-5" : ""}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className={`flex w-full items-start gap-2 rounded-lg px-2 py-1.5 text-left transition ${
                        activeSection === item.id
                          ? "bg-[#0b1f3b] text-white"
                          : "text-[#22385a] hover:bg-white hover:text-[#0f1b36]"
                      }`}
                    >
                      <span className={`min-w-[18px] font-semibold ${activeSection === item.id ? "text-[#FFD60A]" : "text-[#0b1f3b]"}`}>
                        {index + 1}.
                      </span>
                      <span>{item.text}</span>
                    </button>
                  </li>
                ))}
              </ol>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#0f1b36]">Share</p>
                <div className="flex gap-2">
                  <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f1b36] text-xs font-bold text-white transition hover:bg-[#FFD60A] hover:text-black" aria-label="Share on X">X</a>
                  <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f1b36] text-xs font-bold text-white transition hover:bg-[#FFD60A] hover:text-black" aria-label="Share on Facebook">f</a>
                  <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f1b36] text-xs font-bold text-white transition hover:bg-[#FFD60A] hover:text-black" aria-label="Share on LinkedIn">in</a>
                </div>
              </div>
            </div>
          </aside>

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-5 lg:hidden">
            <h2 className="text-lg font-bold text-[#0f1b36]">Contents:</h2>
            <ol className="mt-3 space-y-2 text-sm text-[#1f3656]">
              {article.toc.length === 0 && <li>No headings available</li>}
              {article.toc.map((item, index) => (
                <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="inline-flex items-start gap-2 text-left"
                  >
                    <span className="font-semibold text-[#f7672c]">{index + 1}.</span>
                    <span>{item.text}</span>
                  </button>
                </li>
              ))}
            </ol>
          </section>

          <article className="prose prose-lg prose-headings:text-[#0f1b36] prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-[#0f1b36] prose-a:text-[#1f3656] [&_p]:mb-5 [&_p]:leading-8 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#FFD60A] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 w-full max-w-3xl justify-self-center text-gray-700">
            <div className="relative mb-8 h-72 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>

            <div dangerouslySetInnerHTML={{ __html: article.html }} />

            <div className="mt-12 border-t border-gray-200 pt-6">
              <p className="mb-3 text-sm font-semibold text-[#0f1b36]">Share this post</p>
              <div className="flex gap-3">
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1b36] text-xs font-bold !text-white no-underline transition hover:bg-[#FFD60A] hover:!text-black" aria-label="Share on X">X</a>
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1b36] text-xs font-bold !text-white no-underline transition hover:bg-[#FFD60A] hover:!text-black" aria-label="Share on Facebook">f</a>
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f1b36] text-xs font-bold !text-white no-underline transition hover:bg-[#FFD60A] hover:!text-black" aria-label="Share on LinkedIn">in</a>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="mb-4 text-sm font-semibold text-[#0f1b36]">Written By</p>
              <div className="flex items-start gap-4">
                <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-2 border-[#f7672c] bg-white">
                  <Image
                    src={plumber.logo || "/Plumber.png"}
                    alt={post.author}
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#0f1b36]">{post.author}</p>
                  <p className="mt-1 text-sm text-gray-600">Expert insights from {plumber.companyName} on practical plumbing solutions.</p>
                </div>
              </div>
            </div>

          </article>

          <aside className="hidden space-y-5 lg:block">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0b1f3b] text-2xl text-white">
                ✓
              </div>
              <h3 className="mt-5 text-2xl font-bold text-[#0f1b36]">Need Help With Plumbing?</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3d5475]">
                Get matched with trusted local plumbers for repairs, maintenance, and emergency service.
              </p>
              <button type="button" className="mt-5 w-full rounded-xl bg-[#FFD60A] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-95">
                Find a Plumber
              </button>
            </div>

            <div className="rounded-2xl bg-[#0b1f3b] p-6 text-white shadow-sm">
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="mt-3 text-sm text-white/80">Get practical plumbing tips, seasonal checklists, and homeowner advice in your inbox.</p>
              <form
                className="mt-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email) return;
                  window.location.href = `/contact?email=${encodeURIComponent(email)}`;
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-white/30 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                />
                <button type="submit" className="mt-3 w-full rounded-xl bg-[#FFD60A] px-4 py-3 text-sm font-semibold text-black transition hover:brightness-95">
                Subscribe
                </button>
              </form>
            </div>
          </aside>
        </section>
      </div>

      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0f1b36]">Related Content</h2>
            <p className="mt-2 text-sm text-gray-600">More blog posts you may find useful.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map(({ plumberId, post: relatedPost }) => (
                <LatestArticleCard
                  key={`${plumberId}-${relatedPost.slug}`}
                  post={relatedPost}
                  href={`/plumber/${plumberId}/blog/${relatedPost.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
