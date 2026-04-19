"use client";

import Link from "next/link";
import Image from "next/image";
import { Plumber } from "@/components/find/types";
import { FaCalendarAlt, FaClock, FaEye } from "react-icons/fa";

interface ProfileBlogSectionProps {
  plumber: Plumber;
}

export default function ProfileBlogSection({ plumber }: ProfileBlogSectionProps) {
  if (!plumber.blogs || plumber.blogs.length === 0) return null;

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Latest Articles</h2>
          <p className="mt-1 text-sm text-gray-600">Recent blog posts from {plumber.companyName}.</p>
        </div>
        <Link href={`/plumber/${plumber.id}/blogs`} className="text-sm font-medium text-[#FFD60A] hover:underline">
          View all
        </Link>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {plumber.blogs.slice(0, 2).map((post) => (
          <Link key={post.slug} href={`/plumber/${plumber.id}/blog/${post.slug}`} className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-44 w-full bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
                <span className="flex items-center gap-1"><FaClock /> {post.readTime} min read</span>
                <span className="flex items-center gap-1"><FaEye /> {post.readCount}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-900">{post.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
