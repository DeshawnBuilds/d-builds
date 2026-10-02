// The Awakened Creators portal: a CSS-built threshold, not finished artwork.
export default function PortalVisual({ size = "lg" }: { size?: "lg" | "xl" }) {
  return (
    <div className={`portal portal--${size}`} aria-hidden="true">
      <div className="portal__aura" />
      <div className="portal__arch">
        <div className="portal__depth" />
        <div className="portal__stars" />
        <div className="portal__sun" />
        <div className="portal__horizon" />
        <div className="portal__floor" />
      </div>
      <div className="portal__orbit portal__orbit--a" />
      <div className="portal__orbit portal__orbit--b" />
    </div>
  );
}
