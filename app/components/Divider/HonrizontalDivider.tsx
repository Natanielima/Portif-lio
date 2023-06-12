import { cn } from "@/app/lib/utils";

type HorizontalDividierProps = {
  className?: string;
};

export default function HorizontalDivider({
  className,
}: HorizontalDividierProps) {
  return (
    <div
      className={cn("w-full my-8 border-b border-b-gray-800", className)}
    ></div>
  );
}
