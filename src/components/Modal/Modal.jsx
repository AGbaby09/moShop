import ContextVariales from '../../context/ContextVariables';
import './Modal.css'
import {useContext} from 'react'

const Modal = () => {
    const {setView} = useContext(ContextVariales)

    return(
        <section className="modal">
            <div className="">
                <button className="close center" onClick={()=>{setView(false)}}>
                    <i className="bx bx-left-arrow-alt"></i>
                </button>
                <div className="photos">
                    <div className="show">
                        <div className="buttons spBtn">
                            <button className="center"><i className="bx bx-chevron-left"></i></button>
                            <button className="center"><i className="bx bx-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="toggle spBtn">
                        <button><i className="bx bx-x"></i></button>
                        <button><i className="bx bx-x"></i></button>
                        <button><i className="bx bx-x"></i></button>
                        <button><i className="bx bx-x"></i></button>
                    </div>
                </div>
                <div className="details">
                    <h4 className="al-c">Nike Sneaker Huarache</h4>
                    <h3 className="al-c">$5,000</h3>
                    <div className="p">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugiat facere quos a magni assumenda nostrum quibusdam eum officiis reiciendis.</p>
                    </div>
                    {/* <div className="other"></div> */}
                    <div className="cart spEven">
                        <button className="center"><i className="bx bxs-store-alt"></i></button>
                        <button className="center"> <i className="bx bx-cart-add"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal;