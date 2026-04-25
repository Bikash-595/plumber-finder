import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/components/find/types";
import { FaCalendarAlt, FaClock, FaEye } from "react-icons/fa";

interface LatestArticleCardProps {
  post: BlogPost;
  href: string;
}

export default function LatestArticleCard({ post, href }: LatestArticleCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
    >
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
  );
}