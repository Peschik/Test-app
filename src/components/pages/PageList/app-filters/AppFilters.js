import './AppFilters.scss'
import { Button } from 'react-bootstrap'
const AppFilters = () => {
    return (
       
        <div className="rectangle">
            <span className='mt-4'>Сортировка</span>
            <Button className='mt-4' variant="primary">по городу</Button>
            <Button  className='mt-4'variant="primary">по компании</Button>
        </div>
        
    )
}
export default AppFilters