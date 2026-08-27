/**
 * NOVARA / Quiet Authority: a faceted evolution mark paired with a custom-spaced wordmark.
 * The component preserves the dark, titanium, signal-blue brand language at every scale.
 */

type NovaraMarkProps = {
  compact?: boolean;
  inverted?: boolean;
};

export default function NovaraMark({ compact = false, inverted = false }: NovaraMarkProps) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="Novara home">
      <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-[10px] border border-white/10 bg-[#07111f] shadow-[0_8px_24px_rgba(0,0,0,.18)] transition-transform duration-200 group-hover:-translate-y-0.5">
        <img
          src="/manus-storage/novara-evolution-mark_8048f649.png"
          alt=""
          className="h-9 w-9 object-contain"
        />
      </span>
      {!compact && (
        <span className={`font-display text-[1.06rem] font-semibold tracking-[0.35em] ${inverted ? "text-white" : "text-slate-950"}`}>
          NOVARA
        </span>
      )}
    </a>
  );
}
