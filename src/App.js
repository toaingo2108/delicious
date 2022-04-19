import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'
import Category from './components/Category'
import Search from './components/Search'
import Pages from './pages/Pages'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <Logo to={'/'}>
                        <GiKnifeFork /> deliciousss
                    </Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        margin-right: 0.5rem;
        font-size: 2rem;
    }
`

const Nav = styled.div`
    padding: 4rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export default App
