App.jsx
import { useState } from "react";
import { letterSort } from "./utils/lettersSort";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [isspaces, setIsSpaces] = useState(false);
    const [isLimit, setIsLimit] = useState(false);
    const [limitInput, setLimitInput] = useState("");
    const [isSeeMore, setIsSeeMore] = useState(false);

    const charCount = isspaces ? inputValue.replaceAll(" ", "").length : inputValue.length;
    const wordCount = inputValue.trim().split(" ").filter(curValue => curValue && alphabet.includes(curValue[0].toLowerCase())).length;
    const sentenceCount = inputValue.replaceAll("!", ".").replaceAll("?", ".").split(".").filter(curValue => curValue.trim()).length;

    const handleChange = ({ target }) => {
        if (limitInput) {
            setInputValue(target.value.slice(0, Number(limitInput)));
        } else {
            setInputValue(target.value);
        }
    }

    const handleLimit = () => {
        setIsLimit(prev => {
            if (prev) {
                setLimitInput("");
            }

            return !prev;
        })
    }


    return (
        <main>
            <form>
                <input type="text" placeholder="Start typing here… (or paste your text)"
                    style={{ width: 300, height: 100 }}
                    onChange={handleChange}
                    value={inputValue}
                />
                <div>
                    <input type="checkbox" id="c1" onClick={() => setIsSpaces(!isspaces)} />
                    <label htmlFor="c1">Exclude Spaces</label>
                    <input type="checkbox" id="c2" onClick={handleLimit} />
                    <label htmlFor="c2">Set Character Limit </label>
                    {
                        isLimit && <input type="number" style={{ width: 40 }} onChange={(e) => setLimitInput(Number(e.target.value))} />
                    }
                </div>
                <p style={{ height: 15, color: "red" }}>{inputValue.length === limitInput ? `Limit reached! Your text exceeds ${limitInput} characters.` : ""}</p>
            </form>
            <section>
                <div
                    style={{ width: 200, borderRadius: 5, padding: 10, marginBottom: 10, backgroundColor: "#D3A0FA" }}>
                    <h2>{charCount < 10 ? `0${charCount}` : charCount}</h2>
                    <p>Total Characters</p>
                </div>
                <div
                    style={{ width: 200, borderRadius: 5, padding: 10, marginBottom: 10, backgroundColor: "#FF9F00" }}>
                    <h2>{wordCount < 10 ? `0${wordCount}` : wordCount}</h2>
                    <p>Word Count</p>
                </div>
                <div
                    style={{ width: 200, borderRadius: 5, padding: 10, marginBottom: 10, backgroundColor: "#FE8159" }}>
                    <h2>{sentenceCount < 10 ? `0${sentenceCount}` : sentenceCount}</h2>
                    <p>Sentence Count</p>
                </div>
            </section>
            <section>
                <h3>Letter Density</h3>
                <div>
                    {
                        inputValue.length === 0 ? <p>No characters found. Start typing to see letter density.</p> :
                            (isSeeMore? letterSort(inputValue) : letterSort(inputValue).slice(0, 5)).map((curValue, index) => {
                                return (
                                    <div key={index} style={{display: "flex", alignItems: "center", gap: 20}}>
                                        <p>{curValue[0].toUpperCase()}</p>
                                        <div style={{ width: 500, height: 10, backgroundColor: "#E4E4EF" }}>
                                            <div style={{ width: `${(curValue[1] / inputValue.length) * 100}%`, height: "100%", backgroundColor: "#C27CF8", borderRadius: 20 }}></div>
                                        </div>
                                        <p>{`${curValue[1]} (${((curValue[1] / inputValue.length) * 100).toFixed(2)}%)`}</p>
                                    </div>
                                );
                            })
                    }
                </div>
                {
                    letterSort(inputValue).length > 5 && <p onClick={() => setIsSeeMore(!isSeeMore)}>{isSeeMore? "See less" : "See more"}</p>
                }
            </section>
        </main>
    );
}

export default App;