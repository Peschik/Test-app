import Page from './components/pages/PageList/Page';
import UsersList from './components/usersList/UsersList';
import PageProfile from './components/pages/PageProfile/PageProfile';

function App() {
  return (
    <div className="App">
      <Page content={
        <UsersList/>
      } />
      <Page content={
        <PageProfile />
      }/>

    </div>
  );
}

export default App;
