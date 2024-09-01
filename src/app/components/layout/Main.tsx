export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-10">
      <div className="max-w-[1400px] m-auto">{children}</div>
    </main>
  );
}
