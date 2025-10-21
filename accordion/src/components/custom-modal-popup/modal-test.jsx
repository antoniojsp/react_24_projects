import { useState } from "react"
import Modal from "./modal";

export default function ModalTest(){

    const [showModal, setShowModal] = useState(false);

    function handleModal(){
        setShowModal(prev => !prev);
    }
    
    return (<div>
        <button onClick={handleModal}>Show Modal</button>
        {
            showModal ? <Modal/>:null
        }
    </div>)
}