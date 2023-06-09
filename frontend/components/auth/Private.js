import { useEffect} from 'react'
import Router from 'next/router'
import {isAuth} from '../../actions/auth'

const Private = ({children}) => {
    useEffect(() => {
        console.log(isAuth())
        if(!isAuth()) {
            Router.push('/signin')
        }
    }, [])

    return <div>{children}</div>
}

export default Private