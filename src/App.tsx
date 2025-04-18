import { CreatePersonForm } from "./components/Forms/CreatePersonForm";
import { Layout } from "./components/Layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <>
          <CreatePersonForm />
        </>
      </Layout>
    </div>
  );
}

export default App;
