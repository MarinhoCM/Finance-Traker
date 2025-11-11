export default function HeaderCard({
  children, className
}: Readonly<{ 
    children: React.ReactNode,
    className?: string
}>) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
