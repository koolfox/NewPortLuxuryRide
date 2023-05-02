import Section from "../section/section";
export default function About() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2">About</div>
        <div className="basis-1/2"> Image</div>
      </div>
    </Section>
  );
}
