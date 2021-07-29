import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase'

function Login({ setUser }) {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            localStorage.setItem('user', JSON.stringify(newUser))
            setUser(newUser);
        }).catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
                <h1>Sign into Amazon</h1>
                <GoogeleLogo src='data:image/jpeg;base64,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'/>
                <LoginButton
                    onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`
const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`
const GoogeleLogo= styled.img`
    height:35px;
    margin-right:35px;
    margin-top:45px;
    
    
`

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`