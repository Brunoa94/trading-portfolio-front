interface Props {
  text: string;
}

export default function TextWithBg({ text }: Props) {
  return (
    <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text font-mono text-xl font-bold text-transparent">
      {text}
    </span>
  );
}
