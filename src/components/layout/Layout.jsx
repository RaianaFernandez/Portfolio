import Footer from "./footer";
function Layout({ children }) {
  return (
    // Aplica o fundo escuro (dark-bg) e garante que ocupe a tela inteira (min-h-screen)
    <div className="bg-dark-bg text-white min-h-screen">
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
