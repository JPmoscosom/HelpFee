import { Bank, BankFeatures } from '../index.js';
import {NavBar} from '../../components/index';

const  BankHome = () =>{
    return(
      
  
      <div className='App'>
        <div className='gradient__bg'>
          <NavBar />
          <Bank />
          <BankFeatures />
        </div>
      </div>
      
  
    );
    
  };
  
  export default BankHome;