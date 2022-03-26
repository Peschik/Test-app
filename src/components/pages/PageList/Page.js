import { Row, Col } from 'react-bootstrap';
import AppFilters from '../../app-filters/AppFilters'
import './page.scss';

const Page = ({content, onSortSelect, sortBy}) => {

    
    return (
        <Row>
            <Col className='col-filters' sm={4} md={2} lg={2}>
                <AppFilters sortBy={sortBy} onSortSelect={onSortSelect}/>
            </Col>
            <Col  sm={8} lg={10}>
                {content}
            </Col>
        </Row>    
    )
}


export default Page;