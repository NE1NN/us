import type { ReactNode } from "react";

type BlockProps = {
  children?: ReactNode;
  className?: string;
};

export default function Block({ children, className }: BlockProps) {
  return (
    <div
      className={`bg-blue-500 mx-auto flex flex-col items-center justify-center py-5 gap-3 border rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}
