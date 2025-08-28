import { useState } from "react"
import "./poll.css"


export default function Poll() {
    const [options, setOptions] = useState<string[]>(["React", "Vue", "Svelte"])
    const [count, setcount] = useState([0, 0, 0])
    const [showResults, setShowResults] = useState(true)
    const toggle = () => setShowResults(s => !s);
    const [addOption, setAddOption] = useState("")

    function hendleOption(){
        if(addOption.trim() ==="") return alert("plese enter name");
        setOptions([...options,addOption])
        setcount([...count,0])
        setAddOption("")
    }

    return (
        <div>
            <div className="main">
            {options.map((element, idx) => (
                <div className="options" key={idx}>{element}
                    {showResults && <div> {count[idx]}</div>}
                    <button className="vote" onClick={() => setcount(prev => prev.map((c, i) => i === idx ? c + 1 : c))}                    >
                        vote
                    </button>
                    
                </div>
            ))}
            </div>
            <button onClick={() => { setcount(prev => prev.map((c) => c = 0)) }}>reaset</button>
            <div>
                <button onClick={toggle}>hide resulte</button>
            </div>
            <input type="text" onChange={(e) => setAddOption(e.target.value) } />
            <button className="add" onClick={hendleOption}>Add Option</button>
        </div>
    )
}

