type Props = {
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  number?: string;
  variant?: "myself" | "things" | "future" | "plain";
  children?: React.ReactNode;
};

export default function PageHero({ label, title, lede, number, variant = "plain", children }: Props) {
  return (
    <section className={`page-hero page-hero--${variant}`}>
      <div className="page-hero__light" aria-hidden="true" />
      <div className="container">
        <p className="meta page-hero__label">
          {number && <span className="page-hero__num">{number}</span>}
          {label}
        </p>
        <h1 className="page-hero__title">{title}</h1>
        {lede && <div className="page-hero__lede">{lede}</div>}
        {children}
      </div>
    </section>
  );
}
