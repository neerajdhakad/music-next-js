export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
        <h1 className="w-full h-20 bg-indigo-200 text-center">Inner LayoutItem</h1>
        {children}
   </>
  );
}
