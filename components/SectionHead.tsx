type Props = {
  label: string;
  title?: React.ReactNode;
  id?: string;
  aside?: React.ReactNode;
  as?: "h2" | "h3";
};

export default function SectionHead({ label, title, id, aside, as = "h2" }: Props) {
  const Heading = as;
  return (
    <header className="section-head reveal">
      <p className="meta section-head__label">
        <span className="section-head__rule" aria-hidden="true" />
        {label}
      </p>
      {title && (
        <Heading id={id} className="section-head__title">
          {title}
        </Heading>
      )}
      {aside && <div className="section-head__aside">{aside}</div>}
    </header>
  );
}
