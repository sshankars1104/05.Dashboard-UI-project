

import Search from './components/Search';
import Sidebar from './components/sidebar';
import Table from './components/Table';
import TopHeader from './components/Top Header';

function App() {
  return (

    <div className="container">
      <div className="row">
        <Sidebar />
        <div class="col-10 p-5">
          <TopHeader />
          <Search />
          <Table />
        </div>
      </div>
    </div>
  );
}




export default App;
