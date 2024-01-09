import { useState } from 'react'
import { Steps, Button } from 'antd'
import DataStep1 from './formNewSeller/DataStep1'
import DataStep2 from './formNewSeller/DataStep2'
import DataStep3 from './formNewSeller/DataStep3'
import DataStep4 from './formNewSeller/DataStep4'

const StepsInterface = () => {
    const [current, setCurrent] = useState(0)

    /** funcion para cambiar el steps desde  submit de cada formulario, se envia en props */
    const next = () => setCurrent((prev) => prev + 1)
    const previus = () => setCurrent((prev) => prev - 1)

    const items = [
        { title: 'Step 1', content: <DataStep1 next={next} /> },
        { title: 'Step 2', content: <DataStep2 next={next} previus={previus} /> },
        { title: 'Step 3', content: <DataStep3 next={next} previus={previus} /> },
        { title: 'Step 4', content: <DataStep4 previus={previus} /> },
    ]

    return (
        <div className="px-40">
            <Steps current={current} items={items} />
            <div> {items[current].content} </div>
        </div>
    )
}

export default StepsInterface
