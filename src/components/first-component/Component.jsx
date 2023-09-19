import './Component.css'
import UpperSection from './UpperSection';
import LowerSection from  './LowerSection';
import Ellipce from './Ellipce';

function Component(){
    return(
        <div className='rectangle-1440'>
            <div className='programs-home'>
             <Ellipce></Ellipce>
             <UpperSection></UpperSection>
              <LowerSection></LowerSection>
            </div>
        </div>
    )
}

export default Component;