import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main content */}
      <main>
        <h1>Welcome to the Homepage</h1>
        <p>This is the main content of your homepage. Feel free to add more components and content here.</p>
      </main>

      {/* Footer (optional) */}
      <footer>
        <p>© 2024 Your Website</p>
      </footer>
    </div>
  );
}
