import Search from '../components/Search'
import portada from '../assets/portada.jpg'
import refreshToken from '../interceptors/refreshToken'
import useAuthContext from './../hooks/useAuthContext'
import { authLoginAdapterResponse } from '../adapters/authAdapter'

export default function Home() {
    const { setAuth } = useAuthContext()

    const onSuccess = (data) => {
        const dataAdapter = authLoginAdapterResponse(data)
        setAuth(dataAdapter)
    }

    const onError = () => {
        setAuth({})
    }

    refreshToken(onSuccess, onError)

    return (
        <div className="home-container">
            <div className="home-img">
                <img src={portada} />
            </div>
            <Search />
        </div>
    )
}
