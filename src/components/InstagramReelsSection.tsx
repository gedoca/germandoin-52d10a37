import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Manual Instagram Reels gallery.
 * To update, simply replace the reel IDs below.
 */
const INSTAGRAM_USERNAME = "germandoin";

const reelIds = [
  "DKIBwwWxekR",
  "DJuOe66R3Cu",
  "DJrpKLpxBfv",
  "DJkBjxqRcXE",
];

const getReelUrl = (id: string) => `https://www.instagram.com/reel/${id}/`;
const getEmbedUrl = (id: string) => `https://www.instagram.com/reel/${id}/embed/`;

const ReelCard = ({ reelId, index }: { reelId: string; index: number }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-muted">
        {/* Skeleton loader */}
        {!loaded && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
        )}

        {/* Instagram embed iframe */}
        <iframe
          src={getEmbedUrl(reelId)}
          title={`Instagram Reel ${index + 1}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: "none" }}
        />

        {/* Hover overlay with play icon — clickable link */}
        <a
          href={getReelUrl(reelId)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver Reel en Instagram`}
          className="absolute inset-0 z-10 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 cursor-pointer"
        >
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm rounded-full p-4">
            <Play className="w-8 h-8 text-accent fill-accent" />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const InstagramReelsSection = () => {
  return (
    <section className="py-16 lg:py-24 px-6 sm:px-12 lg:px-16 bg-card">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-6 h-6 text-accent" strokeWidth={1.5} />
              <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                Últimos <span className="italic text-accent">Reels</span>
              </h2>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              @{INSTAGRAM_USERNAME} en Instagram
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reelIds.map((id, i) => (
              <ReelCard key={id} reelId={id} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={`https://www.instagram.com/${INSTAGRAM_USERNAME}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-accent text-accent font-body text-sm font-medium rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
              Ver más en Instagram
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default InstagramReelsSection;
