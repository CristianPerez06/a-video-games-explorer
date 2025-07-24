"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBreakpoint } from "@/client/hooks";

import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: { id: string; src?: string }[];
  ariaLabel?: string;
}

const ImageCarousel = ({
  images = [],
  ariaLabel = "Game images carousel",
}: ImageCarouselProps) => {
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

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        goToPrevious();
        break;
      case "ArrowRight":
        event.preventDefault();
        goToNext();
        break;
    }
  };

  return (
    <div
      className={styles["container"]}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-testid="carousel-container"
    >
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className={cn(styles["nav-button"], styles["left"])}
        aria-label="Previous images"
        data-testid="prev-button"
      >
        <ChevronLeft className={styles["nav-button-icon"]} aria-hidden="true" />
      </button>

      {/* Thumbnails Container */}
      <div
        className={styles["content"]}
        aria-live="polite"
        data-testid="carousel-content"
      >
        <div className={styles["track"]}>
          {visibleItems.map((image, index) => (
            <div
              key={image.id || index}
              className={styles["item"]}
              role="group"
              aria-label={`Image ${currentIndex + index + 1} of ${
                allItems.length
              }`}
              data-testid={`carousel-item-${index}`}
            >
              {!image.src && (
                <span
                  className={styles["image-not-found"]}
                  data-testid="image-not-found"
                >
                  Image not found
                </span>
              )}
              {image.src && (
                <Image
                  src={image.src}
                  alt={`Game image ${currentIndex + index + 1} of ${
                    allItems.length
                  }`}
                  width={isMobile ? 84 : 133}
                  height={isMobile ? 84 : 133}
                  priority={true}
                  data-testid={`carousel-image-${index}`}
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
        aria-label="Next images"
        data-testid="next-button"
      >
        <ChevronRight
          className={styles["nav-button-icon"]}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ImageCarousel;
