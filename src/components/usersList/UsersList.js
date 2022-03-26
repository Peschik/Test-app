import './usersList.scss';
// import useUsersService from '../services/useUsersService';
import { useEffect, useState} from 'react';


const UsersList = (props) => {
    const { gotUsersList } = props;
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        setUsersList(gotUsersList)
    }, [gotUsersList])
    function renderItems(arr) {
        const items =  arr.map((item) => {
            return (
                <li 
                    tabIndex={0}
                    className= {'user-item'}
                    key={item.id}
                    // onClick={() => {props.onCharSelected(item.id)}}
                    // onKeyPress= {(e) => {
                    //     e.preventDefault()
                    //     if (e.key === ' ' || e.key === 'Enter') {
                    //         props.onCharSelected(item.id);
                    //     }
                    // }}
                    >
                    <p>
                        <span>ФИО:</span>
                        {item.name}
                    </p>
                    <p>
                        <span>город:</span>
                        {item.city}
                    </p>
                    <div className="card-bottom">
                        <p>
                            <span>компания:</span>
                            {item.company}
                        </p>
                        <a href='...'>Подробнее</a>
                    </div>   
                </li>
            )
        });
        return (
            <ul>
                {items}
            </ul>
        )
    }
    const items = renderItems(usersList);
   
    return (
        <div className='list-container'>
        <h1 className='mt-4 mb-4 header-list'>Список пользователей</h1>
           {items}
           <div className="total-count">
                <span className='total mb-4'>Найдено {usersList.length} пользователей</span>
            </div>
        </div>
      
    )
}

export default UsersList;