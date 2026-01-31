"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: ImageCarouselImage[]
  autoPlayInterval?: number
}

export function ImageCarousel({ images, autoPlayInterval = 6000 }: ImageCarouselProps) {
  const safeImages = useMemo(() => images.filter((i) => i?.src && i?.alt), [images])
  const count = safeImages.length

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const canAutoPlay = count > 1 && !isHovered

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(count, 1))
  }, [count])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(count, 1)) % Math.max(count, 1))
  }, [count])

  // Pausa autoplay när fliken/tabben inte är aktiv
  useEffect(() => {
    if (!canAutoPlay) return

    const handleVisibility = () => {
      // om tabben är hidden så gör vi ingenting (interval cleanup sker av effect)
    }

    document.addEventListener("visibilitychange", handleVisibility)

    const interval = window.setInterval(() => {
      if (document.visibilityState === "visible") goToNext()
    }, autoPlayInterval)

    return () => {
      window.clearInterval(interval)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [canAutoPlay, autoPlayInterval, goToNext])

  if (count === 0) return null

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
      >
        {safeImages.map((image) => (
          <div key={image.src} className="relative w-full shrink-0 aspect-[16/10] md:aspect-[16/8]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              // Karusellen är nästan alltid under fold → INGEN priority här
              loading="lazy"
              decoding="async"
              // Hjälper Next välja rätt storlek (minskar bytes)
              sizes="(max-width: 768px) 100vw, 1200px"
              // Lite lägre kvalitet för karusell är oftast osynligt men sparar mycket
              quality={75}
            />
          </div>
        ))}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Föregående bild"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-background hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Nästa bild"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {safeImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "w-8 bg-background" : "w-2 bg-background/50 hover:bg-background/70"
                )}
                aria-label={`Gå till bild ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
