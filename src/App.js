import Page from './components/pages/PageList/Page';
import UsersList from './components/usersList/UsersList';
import PageProfile from './components/pages/PageProfile/PageProfile';
import useUsersService from './components/services/useUsersService';
import { useEffect, useState} from 'react';

function App() {

    const {getAllUsers} = useUsersService();
    const [usersList, setUsersList] = useState([]);
    const [sortBy, setSortBy] = useState(null);


    useEffect(() => {
        onRequest();
        },[])
    

    useEffect(() => {
      sortPost(usersList, sortBy)
    }, [sortBy])

    const onRequest = () => {
        getAllUsers()
            .then(onUsersListLoaded)
    }

    const sortPost = (items, sortBy) => {
      setUsersList(sortArray(items, sortBy))
  }

  const onSortSelect = (sortBy) => {
      setSortBy(sortBy);
      
  }

  const sortArray = (arr, sortBy) => {
    const sortedList = arr.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return 1 
    }
      return -1
  })
    return sortedList
  }
  
  const onUsersListLoaded = (usersList) =>  setUsersList(usersList);

  const sortedUsers = sortArray(usersList, sortBy)


  return (
    <div className="App">
      <Page onSortSelect={onSortSelect} sortBy={sortBy} content={
        <UsersList gotUsersList={sortedUsers}/>
      } />
      <Page content={
        <PageProfile />
      }/>

    </div>
  );
}

export default App;
