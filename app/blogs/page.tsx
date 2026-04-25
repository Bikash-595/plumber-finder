"use client";

import { useMemo, useState } from "react";
import { plumbers } from "@/data/plumbers";
import { BlogPost } from "@/components/find/types";
import LatestArticleCard from "@/components/plumber/LatestArticleCard";

const BLOGS_PER_PAGE = 9;

const BLOG_CATEGORIES = [
  {
    key: "maintenance",
    title: "Maintenance Tips",
    description: "Routine checks and habits that help prevent costly plumbing repairs.",
  },
  {
    key: "emergency",
    title: "Emergency Fixes",
    description: "What to do first when leaks, clogs, or pipe bursts happen suddenly.",
  },
  {
    key: "water-heaters",
    title: "Water Heaters",
    description: "Guides on heater lifespan, efficiency, and replacement planning.",
  },
  {
    key: "drain-sewer",
    title: "Drain & Sewer",
    description: "Best practices for drainage health, blockages, and warning signs.",
  },
  {
    key: "home-upgrades",
    title: "Home Upgrades",
    description: "Modern fixtures, smart plumbing options, and renovation advice.",
  },
  {
    key: "seasonal",
    title: "Seasonal Plumbing",
    description: "Year-round preparation tips for winter freezes and summer usage spikes.",
  },
];

type BlogFeedItem = {
  plumberId: string;
  post: BlogPost;
};

type BlogCategoryKey = "all" | (typeof BLOG_CATEGORIES)[number]["key"];

function getCategoryForPost(post: BlogPost): Exclude<BlogCategoryKey, "all"> {
  const haystack = `${post.title} ${post.summary} ${post.content}`.toLowerCase();

  if (/emergency|burst|leak|urgent|flood/.test(haystack)) return "emergency";
  if (/heater|hot water|tankless/.test(haystack)) return "water-heaters";
  if (/drain|sewer|clog|pipe blockage/.test(haystack)) return "drain-sewer";
  if (/upgrade|fixture|renovation|smart home/.test(haystack)) return "home-upgrades";
  if (/winter|summer|season|freeze|cold weather/.test(haystack)) return "seasonal";

  return "maintenance";
}

function getBlogFeed(): BlogFeedItem[] {
  return plumbers
    .flatMap((plumber) =>
      (plumber.blogs ?? []).map((post) => ({
        plumberId: plumber.id,
        post,
      }))
    )
    .sort((a, b) => Date.parse(b.post.date) - Date.parse(a.post.date));
}

export default function BlogsPage() {
  const blogFeed = useMemo(() => getBlogFeed(), []);
  const [selectedCategory, setSelectedCategory] = useState<BlogCategoryKey>("all");
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  const filteredBlogFeed = useMemo(() => {
    if (selectedCategory === "all") return blogFeed;
    return blogFeed.filter(({ post }) => getCategoryForPost(post) === selectedCategory);
  }, [blogFeed, selectedCategory]);

  const visibleBlogs = filteredBlogFeed.slice(0, visibleCount);
  const hasMoreBlogs = visibleCount < filteredBlogFeed.length;

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-[#f2f6fb]">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-extrabold leading-tight text-[#0f1b36] sm:text-4xl lg:text-5xl">
            Blog &amp; Insights
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#314a6d] sm:text-lg">
            Stay updated with practical plumbing insights, maintenance strategies, and seasonal advice to keep your home systems running smoothly.
          </p>

          <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setVisibleCount(BLOGS_PER_PAGE);
              }}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition ${
                selectedCategory === "all"
                  ? "bg-[#f7672c] text-white"
                  : "bg-white text-[#213656] hover:bg-gray-100"
              }`}
            >
              All
            </button>
            {BLOG_CATEGORIES.map((category) => (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(category.key);
                  setVisibleCount(BLOGS_PER_PAGE);
                }}
                key={category.title}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition ${
                  selectedCategory === category.key
                    ? "bg-[#f7672c] text-white"
                    : "bg-white text-[#213656] hover:bg-gray-100"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleBlogs.map(({ plumberId, post }) => (
            <LatestArticleCard
              key={`${plumberId}-${post.slug}`}
              post={post}
              href={`/plumber/${plumberId}/blog/${post.slug}`}
            />
          ))}
        </div>

        {filteredBlogFeed.length === 0 && (
          <p className="mt-8 text-center text-sm text-gray-600">
            No posts found in this category yet.
          </p>
        )}

        {hasMoreBlogs && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + BLOGS_PER_PAGE)}
              className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
