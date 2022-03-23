import { Row, Col } from 'react-bootstrap';
import AppFilters from './app-filters/AppFilters'
import UsersList from './usersList/UsersList';
import './pageList.scss'


const PageList = () => {
    return (
        <Row>
            <Col className='col-filters' sm={4} md={2} lg={2}>
                <AppFilters />
            </Col>
            <Col>
                <UsersList sm={8} lg={10}/>
            </Col>
        </Row>    
    )
}

export default PageList;