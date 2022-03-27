import './usersList.scss';
import UserItem from '../userItem/UserItem';
// import useUsersService from '../services/useUsersService';


const UsersList = ({onMoreSelect, gotUsersList}) => {
    function renderItems(arr) {
        const items =  arr.map((item) => {
            const {id, ...itemProps} = item
            return (
                <UserItem
                    key={id}
                    onMoreSelect={() => onMoreSelect(id)}
                    {...itemProps}
                />
            )
        });
        return (
            <ul>
                {items}
            </ul>
        )
    }
    const items = renderItems(gotUsersList);
   
    return (
        <div className='list-container'>
        <h1 className='mt-4 mb-4 header-list'>Список пользователей</h1>
           {items}
           <div className="total-count">
                <span className='total mb-4'>Найдено {gotUsersList.length} пользователей</span>
            </div>
        </div>
      
    )
}

export default UsersList;