"use client";

import { useId, useState } from "react";
import { FaImage, FaTrash, FaUpload, FaVideo } from "react-icons/fa";

export type MediaKind = "image" | "video" | "media";

type Props = {
  label: string;
  value?: string;
  kind?: MediaKind;
  onChange: (value: string) => void;
};

const accepts: Record<MediaKind, string> = {
  image: "image/png,image/jpeg,image/webp,image/gif",
  video: "video/mp4,video/webm,video/quicktime",
  media: "image/png,image/jpeg,image/webp,image/gif,video/mp4,video/webm,video/quicktime",
};

export default function LocalMediaUpload({ label, value = "", kind = "image", onChange }: Props) {
  const id = useId();
  const [error, setError] = useState("");
  const preview = value;
  const isVideo = kind === "video" || preview.startsWith("data:video/");

  const selectFile = (file?: File) => {
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      setError("Choose a file smaller than 4 MB for this local draft.");
      return;
    }
    setError("");
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result);
      onChange(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const Icon = kind === "video" ? FaVideo : FaImage;
  return <div>
    <span className="text-sm font-semibold text-gray-700">{label}</span>
    <input id={id} type="file" accept={accepts[kind]} onChange={(event) => selectFile(event.target.files?.[0])} className="sr-only" />
    <label htmlFor={id} className="mt-2 flex min-h-32 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-3 text-center transition hover:border-[#FFD60A] hover:bg-[#FFD60A]/5">
      {preview ? (isVideo ? <video src={preview} controls className="max-h-48 max-w-full rounded-lg" /> : <img src={preview} alt="Selected upload preview" className="max-h-48 max-w-full rounded-lg object-cover" />) : <span className="flex flex-col items-center gap-2 text-sm text-gray-500"><Icon className="text-xl text-[#0b1f3b]" /><span>Click to choose {kind === "media" ? "an image or video" : `a ${kind}`} from your device</span><span className="text-xs text-gray-400">PNG, JPG, WEBP, MP4, or WEBM · max 4 MB</span></span>}
    </label>
    <div className="mt-2 flex items-center gap-3"><label htmlFor={id} className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#0b1f3b]"><FaUpload /> Choose local file</label>{preview && <button type="button" onClick={() => onChange("")} className="inline-flex items-center gap-1 text-xs font-bold text-red-600"><FaTrash /> Remove</button>}</div>
    {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
  </div>;
}
