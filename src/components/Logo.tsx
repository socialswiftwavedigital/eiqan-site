export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal text-base font-extrabold text-white">
        E
      </span>
      <span className="text-lg font-bold tracking-tight text-white">
        EIQAN
      </span>
    </span>
  );
}
