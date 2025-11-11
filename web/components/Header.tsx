import React from "react";

export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <header className={className}>
      <section>{children}</section>
    </header>
  );
}
