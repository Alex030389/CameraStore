import Products from "../Products";
import Sidebar from "../Sidebar";

const App = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="main__row">
          <div className="main__sidebar">
            <Sidebar />
          </div>
          <div className="main__content">
            <Products />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
