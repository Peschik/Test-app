import Page from './components/pages/PageList/Page';
import UsersList from './components/usersList/UsersList';
import PageProfile from './components/pages/PageProfile/PageProfile';
import useUsersService from './components/services/useUsersService';
import { useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AppFilters from './components/app-filters/AppFilters';
import { Row, Col} from 'react-bootstrap'


function App() {

    const {getAllUsers} = useUsersService();
    const [usersList, setUsersList] = useState([]);
    const [sortBy, setSortBy] = useState('name');
    const [currentUser, setCurrentUser] = useState({})


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

  const onSortSelect = (sortByButton) => {

      sortByButton !== sortBy ? setSortBy(sortByButton) : setSortBy('name');
      
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

  const onMoreSelect = (gotId) => {
    usersList.forEach(item => {
      if(item.id === gotId) {
        setCurrentUser(item)
      }
    })
  }

  const sortedUsers = sortArray(usersList, sortBy)


  return (
    <Router>
      <div className="App">
        <Row>
          <Col className='col-filters' sm={4} md={2} lg={2}>
              <AppFilters sortBy={sortBy} onSortSelect={onSortSelect}/>
          </Col>
          <Switch>
            <Route exact path='/'>
              <Page content={
                <UsersList onMoreSelect={onMoreSelect} gotUsersList={sortedUsers}/>
              }/>
            </Route>
            <Route exact path='/user'>
              <Page content={
                <PageProfile  {...currentUser}/>
              }/>
            </Route>
          </Switch>
        </Row> 
      </div>
    </Router>
    
  );
}

export default App;
