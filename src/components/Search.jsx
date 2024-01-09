import { useState } from 'react'
import { Input, AutoComplete } from 'antd'
import { useNavigate } from 'react-router-dom'

import { useQuery } from 'react-query'
import { autocompleteInterceptor } from './../interceptors/autocomplete'

const Search = () => {
    /** hooks */
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const { data } = useQuery(['tags', query], () => autocompleteInterceptor(query), {
        enabled: !!query,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })
    console.log(data)

    /** funciones  */
    const handleSearch = (value) => query && navigate(`/products?search=${value}`)
    const handleChange = (value) => setQuery(value)
    const onSelect = (value) => query && navigate(`/products?search=${value}`)

    return (
        <div className="search-container">
            <AutoComplete
                onChange={handleChange} // contenido que se coloca en el input
                options={data || []} // Usa la data de useQuery como opciones para el AutoComplete
                //notFoundContent="Recomendaciones de busqueda"
                onSelect={onSelect}
                style={{ padding: '40px' }}
            >
                <Input.Search
                    style={{
                        width: '500px',
                        borderRadius: '0px',
                    }}
                    onSearch={handleSearch} //boton de buscar, accion de enviar datos a buscar
                    placeholder="Busca un servicio... "
                    size="large"
                    enterButton
                    type="primary"
                />
            </AutoComplete>
        </div>
    )
}

export default Search
