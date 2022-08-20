import React, { useContext } from "react";
import BorderImage from "./Images/border_image.jpg";
import { projectContext } from "./ContextManager";
function BuyTicketModalForm() {
    const usingContext = useContext(projectContext);
    return (<>
        <button className="buyTicketBtn" data-bs-toggle="modal" data-bs-target="#staticBackdropzBuyTicket" onClick={usingContext.TicketClick} style={{display:"inline-block"}}>Buy Ticket</button>
        <div className="modal fade" id="staticBackdropzBuyTicket" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title your-ticket" id="staticBackdropLabel">Your Ticket</h5>
                        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <center>
                            <img src={BorderImage} alt="Loading" className="borderimg" />
                        </center>
                        <div className="row  your-ticket-row">
                            {usingContext.ticketDetails.length === 0 ? "" : usingContext.ticketDetails.map((value, index) => {
                                return (<div className="col-4 your-ticket-col" key={index}>
                                    {value}
                                </div>);
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>)
}

function NumbersModalForm() {
    const usingContext = useContext(projectContext);
    return (<>
        <button className="buyTicketBtn" data-bs-toggle="modal" data-bs-target="#staticBackdropNumberCut" onClick={usingContext.numberCutFill}>Numbers</button>

        <div className="modal fade" id="staticBackdropNumberCut" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title your-ticket" id="staticBackdropLabel">Numbers</h5>
                        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <center>
                            <img src={BorderImage} alt="Loading" className="borderimg" />
                        </center>
                        <div className="row  row-numbers">
                            {usingContext.numberDetails.length === 0 ? "" : usingContext.numberDetails.map((val, index) => {
                                return (
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-5 col-numbers" key={index}>
                                        <button className="numberBtn" style={{ background: `${val.clicked ? "#c0bcbc" : "transparent"}`,
                                        color: `${val.clicked ? "black" : "white"}`
                                         }} key={index} onClick={() => { return usingContext.clickButton(val.id) }}>
                                            {val.clicked ? val.value : <span className="material-symbols-outlined">
                                                lock
                                            </span>}</button>
                                    </div>);
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div >
    </>)
}
export default BuyTicketModalForm;
export { NumbersModalForm };