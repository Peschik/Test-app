import './usersList.scss';

const UsersList = () => {
    return (
        <div className='list-container'>
        <h1 className='mt-4 mb-4 header-list'>Список пользователей</h1>
           <ul>
               <li className='user-item'>
                    <p><span>ФИО:</span>Иван Иванов</p>
                    <p><span>город:</span>ООО “Пример”</p>
                    <div className="card-bottom">
                        <p><span>компания:</span>ООО “Пример”</p>
                        <a href='...'>Подробнее</a>
                    </div>
               </li>
               
               
              
           </ul>
           <div className="total-count">
                <span className='total mb-4'>Найдено 10 пользователей</span>
            </div>
        </div>
      
    )
}

export default UsersList;