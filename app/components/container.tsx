const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col gap-5 p-5 lg:px-20">
      {children}
    </main>
  );
};

export default Container;
