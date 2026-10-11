import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

type EmblaCarouselProps = {
    children: React.ReactNode[];
    options?: EmblaOptionsType;
};

const EmblaCarousel = ({ children, options }: EmblaCarouselProps) => {
    const [emblaRef] = useEmblaCarousel(options, [
        Autoplay({
            delay: 6000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ]);

    return (
        <div className="mx-auto w-full sm:max-w-md max-w-75">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {children.map((child, index) => (
                        <div key={index} className="min-w-0 shrink-0 grow-0 basis-[80%] p-2">
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmblaCarousel;
