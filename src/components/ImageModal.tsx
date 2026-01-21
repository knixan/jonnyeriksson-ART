"use client";

import { useEffect } from "react";
import Image from "next/image";

type ImageModalProps = {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  description?: string;
  price?: string | null;
  sold?: boolean;
  onClose: () => void;
};

export default function ImageModal({
  isOpen,
  imageSrc,
  title,
  description,
  price,
  sold,
  onClose,
}: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl font-light transition-colors"
        onClick={onClose}
        aria-label="Stäng"
      >
        ×
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[70vh] mb-6">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
        </div>

        <div className="bg-white rounded-lg p-6  text-black max-w-2xl w-full text-center">
          <h3 className="font-playfair text-2xl font-medium mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm mb-3 font-light">
              {description}
            </p>
          )}
          <div className="text-base">
            {sold ? (
              <span className="font-semibold">SÅLD</span>
            ) : price === null || price === undefined ? (
              <span className="font-medium">Kontakta för pris</span>
            ) : (
              <span className="font-medium">{price}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
