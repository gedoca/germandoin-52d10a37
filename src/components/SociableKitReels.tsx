import { useEffect, useRef } from "react";

const SociableKitReels = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/instagram-reels/widget.js";
    script.defer = true;
    containerRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16 bg-card">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="sk-ww-instagram-reels" data-embed-id="25661050" />
      </div>
    </section>
  );
};

export default SociableKitReels;
