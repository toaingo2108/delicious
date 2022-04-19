import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [input, setInput] = useState('')
    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('hellor')
        navigate('/searched/' + input)
    }

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0 20rem;

    div {
        position: relative;
        width: 100%;
    }

    input {
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`

export default Search
