interface Props {
  title: string;
  description: string;
}

export function SectionInfo(props: Props) {
  const { title, description } = props;
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-sm text-black/60">{description}</div>
    </div>
  );
}
