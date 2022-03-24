import Page from './components/pages/PageList/Page';
import UsersList from './components/usersList/UsersList';
import PageProfile from './components/pages/PageProfile/PageProfile';
import useUsersService from './components/services/useUsersService';
import { useEffect, useState} from 'react';

function App() {

  const {getAllUsers} = useUsersService();
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        onRequest();
        },[])


    const onRequest = () => {
        getAllUsers()
            .then(onUsersListLoaded)
    }



    const onUsersListLoaded = async (usersList) => {
        console.log(usersList)
        const sortedList = usersList.sort((a, b) => {
            if(a.name > b.name) 
                return 1
            if(a.name < b.name)
                return -1
        })
        setUsersList(sortedList)
    }

  return (
    <div className="App">
      <Page content={
        <UsersList gotuserslist={usersList}/>
      } />
      <Page content={
        <PageProfile />
      }/>

    </div>
  );
}

export default App;
