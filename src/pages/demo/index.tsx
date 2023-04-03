import { Button } from '@arco-design/web-react';
import { get } from '../../api/demo';

const Demo = () => {
    const quit = async () => {
        const a = await get(28782);
        console.log("a", a)
    }

    return (
        <Button onClick={()=>{quit()}}>退群</Button>
    )
}


export default Demo