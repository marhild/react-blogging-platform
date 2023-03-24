import Header from './Header'

const Layout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}

export default Layout;