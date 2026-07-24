import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logo-mark.png"
        alt="EIQAN"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
        priority
      />
      <span className="text-lg font-bold tracking-tight text-white">
        EIQAN
      </span>
    </span>
  );
}
