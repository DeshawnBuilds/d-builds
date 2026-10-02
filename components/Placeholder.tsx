type Props = {
  title: string;
  note: string;
  index?: number;
  as?: "h2" | "h3";
};

// An honest slot for content that doesn't exist yet.
export default function Placeholder({ title, note, index, as = "h3" }: Props) {
  const Heading = as;
  return (
    <article className="slot reveal">
      <p className="meta slot__meta">
        {index !== undefined && <span>{String(index + 1).padStart(2, "0")}</span>}
        <span className="slot__status">
          <span className="dot dot--dim" aria-hidden="true" /> In development
        </span>
      </p>
      <Heading className="slot__title">{title}</Heading>
      <p className="slot__note">{note}</p>
    </article>
  );
}
