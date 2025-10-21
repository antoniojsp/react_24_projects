import { useState } from "react"
import Modal from "./modal";
import "./modal.css"

export default function ModalTest() {

    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        setShowModal(prev => !prev);
    }

    function closeModal(){
        setShowModal(false);     
    }

    return (<div>
        <button onClick={handleModal}>Show Modal</button>
        {
            showModal ? <Modal 
                            body={<div>Customized body</div>} 
                            closeModal={closeModal}
                            header={<h1>New Header</h1>}
                            footer={<h3>By Antonio</h3>}
                        /> : null
        }
    </div>)
}