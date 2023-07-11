export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-12 px-10 2xl:px-0">
      <section className="max-w-6xl mx-auto">{children}</section>
    </div>
  );
}
