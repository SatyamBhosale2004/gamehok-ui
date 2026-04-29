interface HowToJoinProps {
  instructions: string[];
}

export default function HowToJoin({ instructions }: HowToJoinProps) {
  return (
    <div className="mb-10">
      <h2 className="text-[20px] font-semibold mb-6">How to Join a Match</h2>
      <ul className="flex flex-col gap-3">
        {instructions.map((instruction, index) => (
          <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)] text-[14px] leading-relaxed">
            <span className="text-[var(--text-secondary)] text-[16px] leading-relaxed flex-shrink-0">•</span>
            <span className="flex-1">{instruction}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
