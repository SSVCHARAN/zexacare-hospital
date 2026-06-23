"use client";

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: string;
  label?: string;
  rounded?: boolean;
}

export default function ImagePlaceholder({
  className = "",
  aspectRatio,
  label = "Add Image",
  rounded = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 ${
        rounded ? "rounded-full" : "rounded-xl"
      } ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <div className="text-center text-gray-400">
        <svg
          className="mx-auto h-8 w-8 mb-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
        </svg>
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}
