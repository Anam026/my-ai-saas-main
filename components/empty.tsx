import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
      <div className="relative h-72 w-72 transition-transform hover:scale-105 duration-300">
        <Image
          alt="Empty state bot"
          fill
          src="/empty.png" 
          className="object-contain"
        />
      </div>
      <p className="text-sm text-muted-foreground text-center dark:text-gray-400">
        {label}
      </p>
    </div>
  );
};
