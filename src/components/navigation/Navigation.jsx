import { NavLink } from 'react-router-dom'
import css from './lazy.module.css'



function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <div className='navContain'>
                        <NavLink className='linkNav' to='/'>Home</NavLink>               
                    
                        <NavLink className='linkNav' to='/movie'>Movie</NavLink>
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Navigation