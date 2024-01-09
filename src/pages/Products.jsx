import { useSearchParams } from 'react-router-dom';

export default function Products() {
    let [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');

    return <div>Products {search} </div>;
}
