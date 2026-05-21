import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  center?: boolean;
  light?: boolean;
};

export function SectionHead({ eyebrow, title, lead, center, light }: Props) {
  return (
    <Reveal className={`mb-16 ${center ? "text-center mx-auto" : ""}`}>
      <span
        className={`section-eyebrow ${center ? "section-eyebrow-center" : ""}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`section-title ${light ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`section-lead ${center ? "mx-auto" : ""} ${
            light ? "!text-white/85" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
