"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBreakpoint } from "@/client/hooks";

import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: { id: string; src?: string }[];
}

const ImageCarousel = ({ images = [] }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentBreakpoint = useBreakpoint();

  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";
  const visibleCount = isMobile ? 4 : 5;

  const allItems = images;
  const maxIndex = Math.max(0, allItems.length - visibleCount);

  // Get only the visible items based on current index
  const visibleItems = allItems.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className={styles["container"]}>
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className={cn(styles["nav-button"], styles["left"])}
      >
        <ChevronLeft className={styles["nav-button-icon"]} />
      </button>

      {/* Thumbnails Container */}
      <div className={styles["content"]}>
        <div className={styles["track"]}>
          {visibleItems.map((image, index) => (
            <div key={image.id || index} className={styles["item"]}>
              {!image.src && (
                <span className={styles["image-not-found"]}>
                  Image not found
                </span>
              )}
              {image.src && (
                <Image
                  src={image.src}
                  alt={`Game image: ${image.id}`}
                  width={isMobile ? 84 : 133}
                  height={isMobile ? 84 : 133}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        className={cn(styles["nav-button"], styles["right"])}
      >
        <ChevronRight className={styles["nav-button-icon"]} />
      </button>
    </div>
  );
};

export default ImageCarousel;
