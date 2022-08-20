import { createContext, useState } from "react";
const projectContext = createContext();
const buttonClickSound = new Audio("./Images/new_pop_up1.mp3");
function ContextManager(props) {
    const [ticketDetails, setTicketDetails] = useState([]);
    const [numberDetails, setNumberDetails] = useState([]);
    const TicketClick = () => {
        setTicketDetails([]);
        let ticketArray = [];
        while (ticketArray.length < 9) {
            let random = Math.floor(Math.random() * 39) + 1; //1 to 40
            if (!ticketArray.includes(random)) {
                ticketArray.push(random);
            }
        }
        // ticketArray.sort( ()=>Math.random()-0.5 )
        setTicketDetails(ticketArray);
    }
    const numberCutFill = () => {
        if (numberDetails.length !== 40) {
            let numberCut = [];
            for (let i = 0; i < 40; i++) {
                numberCut.push({ id: "".concat(Date.now(), "_", Math.floor(Math.random() * 7415931783)), clicked: false, value: i + 1 });
                numberCut = numberCut.sort(() => Math.random() - 0.5);
            }
            setNumberDetails(numberCut);
        }
    }
    const clickButton = (uniqueID) => {
        let virtualarray = numberDetails, clickedIndex = -1;
        for (let i = 0; i < virtualarray.length; i++) {
            if (virtualarray[i]["id"] === uniqueID) {
                clickedIndex = i;
                buttonClickSound.play();
            }
        }
        virtualarray[clickedIndex]["clicked"] = true;
        setNumberDetails([...virtualarray]);
    }
    return (
        <>
            <projectContext.Provider value={{ TicketClick, ticketDetails, numberDetails, numberCutFill, clickButton }}>
                {props.children}
            </projectContext.Provider>
        </>
    )
}
export default ContextManager;
export { projectContext };