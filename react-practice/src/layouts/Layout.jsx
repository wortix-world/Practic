import Header from "../components/Header/Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
