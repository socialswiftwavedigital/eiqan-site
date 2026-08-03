import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center ${className}`}>
      <Image
        src="/images/logo-mark.png"
        alt="EIQAN"
        width={444}
        height={160}
        className="h-8 w-auto shrink-0"
        priority
      />
    </span>
  );
}
