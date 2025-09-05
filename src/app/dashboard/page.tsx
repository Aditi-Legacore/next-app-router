export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Page</h1>
        {children}
      </div>
    </div>
  );
}