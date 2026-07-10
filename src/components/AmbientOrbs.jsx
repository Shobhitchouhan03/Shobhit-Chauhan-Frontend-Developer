export default function AmbientOrbs({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-float-slow absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue/20 blur-[100px]" />
      <div className="animate-float-slower absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
    </div>
  );
}
