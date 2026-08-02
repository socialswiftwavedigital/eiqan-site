import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center ${className}`}>
      <Image
        src="/images/logo-mark.png"
        alt="EIQAN"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
        priority
      />
    </span>
  );
}
