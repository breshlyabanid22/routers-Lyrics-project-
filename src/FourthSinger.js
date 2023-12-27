import { useOutletContext } from "react-router-dom"

export default function FourthSinger(){
    const context = useOutletContext()

    return (
        <>
            <div className='input'>
                <input 
                    type="text" 
                    onChange={(e) => context.setSingerLyrics(e.target.value)}
                    ref={(input) => input && input.focus()}
                    />
            </div>              
        </>
    )
}