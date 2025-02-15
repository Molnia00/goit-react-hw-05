import { NavLink } from 'react-router-dom'
import s from './lazy.module.css'



function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <ul className={s.navContain}>
                        <li>
                            <NavLink className={s.linkNav} to='/'>Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className={s.linkNav} to='/movie'>Movie</NavLink>
                        </li>

                    
                    </ul>
                </nav>
            </header>

        </>
    )
}
export default Navigation