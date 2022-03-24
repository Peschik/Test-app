import { Row, Col } from 'react-bootstrap';
import AppFilters from '../../app-filters/AppFilters'
import './page.scss';

const Page = (props) => {

    
    return (
        <Row>
            <Col className='col-filters' sm={4} md={2} lg={2}>
                <AppFilters />
            </Col>
            <Col  sm={8} lg={10}>
                {props.content}
            </Col>
        </Row>    
    )
}


export default Page;