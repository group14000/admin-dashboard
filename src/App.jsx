import YourComponent from "./components/YourComponent";

function App() {
  return (
    <div className="font-sans antialiased h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <YourComponent />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        &copy; 2023 Your App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
