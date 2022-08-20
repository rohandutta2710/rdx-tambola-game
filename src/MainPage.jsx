import React from "react";
import BorderImage from "./Images/border_image.jpg";
import BuyTicketModalForm, { NumbersModalForm } from "./ModalForms";
function MainPage() {
    return (<>
        <h1 className="game-name">TAMBOLA</h1>
        <center>
            <img src={BorderImage} alt="Loading" className="borderimg" />
        </center>

        <BuyTicketModalForm></BuyTicketModalForm>
        <NumbersModalForm></NumbersModalForm>
    </>)
}
export default MainPage;