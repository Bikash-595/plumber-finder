"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { plumbers } from "@/data/plumbers";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaEye, FaThumbsUp, FaHeart, FaRegLightbulb, FaComment, FaShareAlt } from "react-icons/fa";

export default function BlogPostPage({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const { id, slug } = use(params);
  const plumber = plumbers.find((p) => p.id === id);
  if (!plumber) return notFound();

  const post = plumber.blogs?.find((b) => b.slug === slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link href={`/plumber/${plumber.id}`} className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#FFD60A] mb-4">
          ← Back to {plumber.companyName}
        </Link>

        {/* Hero */}
        <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
          <span className="flex items-center gap-1"><FaClock /> {post.readTime} min read</span>
          <span className="flex items-center gap-1"><FaEye /> {post.readCount} reads</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
        <p className="text-gray-600 mb-6">By {post.author}</p>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Reactions */}
        <div className="flex flex-wrap items-center gap-6 py-6 border-t border-gray-200">
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]"><FaThumbsUp /> {post.reactions.like}</button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]"><FaHeart /> {post.reactions.love}</button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]"><FaRegLightbulb /> {post.reactions.helpful}</button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]"><FaShareAlt /> Share</button>
        </div>

        {/* Comments */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><FaComment /> Comments ({post.comments.length})</h3>
          <div className="space-y-4">
            {post.comments.map((c, i) => (
              <div key={i} className="border-b border-gray-100 pb-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-800">{c.name}</span>
                  <span className="text-xs text-gray-400">{c.date}</span>
                </div>
                <p className="text-gray-600 text-sm">{c.comment}</p>
              </div>
            ))}
          </div>
          {/* Add comment form (optional) */}
        </div>
      </div>
    </main>
  );
}
