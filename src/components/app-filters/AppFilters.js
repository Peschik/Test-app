import './AppFilters.scss'
import { Button } from 'react-bootstrap'
const AppFilters = (props) => {

    
    return (
       
        <div className="rectangle">
            <span className='mt-4'>Сортировка</span>
            <Button 
                className='mt-4'
                onClick={() => props.onSortSelect('city')}
                variant="primary" 
                name='city'>
                по городу
            </Button>
            <Button  
                className='mt-4'
                variant="primary"
                onClick={() => props.onSortSelect('company')}
                name='company'>
                по компании
            </Button>
        </div>
        
    )
}
export default AppFilters