import NavBar from "../Components/NavBar";
export default function Layout({ children }) {
  return (
    <div className="px-8 py-8">
      <NavBar />
      {children}
    </div>
  );
}
