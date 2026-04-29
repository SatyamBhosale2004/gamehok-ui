import Image from 'next/image';

interface OrganiserProps {
  name: string;
  email: string;
}

export default function Organiser({ name, email }: OrganiserProps) {
  return (
    <div className="mb-10">
      <h2 className="text-[20px] font-semibold mb-6">Organiser</h2>
      <div className="bg-[var(--bg-surface-light)] rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-color)]">
        <div className="p-4 text-[14px] text-[var(--text-secondary)] bg-white/5 border-b border-[var(--border-color)]">
          Organiser&apos;s Details and contact
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#2b1f4c] flex items-center justify-center flex-shrink-0">
              <Image src="/gs.svg" alt="Organiser Logo" width={24} height={24} />
            </div>
            <span className="text-[16px] font-semibold text-[var(--text-primary)]">{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/mail.svg" alt="Email" width={16} height={16} />
            <span className="text-[13px] text-[var(--text-secondary)]">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
