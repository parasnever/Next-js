

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <h2>inner layout item</h2>
   {children}
   
   </>
  );
}
