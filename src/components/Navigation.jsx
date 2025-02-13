import { NavLink } from 'react-router-dom'



function Navigation() {
    return (
        <>
            <header>
                <nav>
                    <NavLink className='linkNav' to='/'>Home</NavLink>               
                    <NavLink className='linkNav' to='/movie'>Movie</NavLink>
                </nav>
            </header>

        </>
    )
}
export default Navigation