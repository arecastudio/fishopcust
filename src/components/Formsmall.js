import React from 'react';
import logo from './images/register-icon.jpg';

const Formsmall=()=>{
    return(
        <div className="form-customer centered">
            <div className="customer-part customer-desc">
                <div className="desc-box">
                    <div style={{flex:1,}}>
                        By enter your name and address you will save time in checkout process. Lets register first, it's easy !
                    </div>
                    <div style={{flex:1,}}>
                        <img src={logo} alt="..." className="image-reg" />
                    </div>
                </div>
            </div>
            <div className="customer-part">
                

            <form className="cust-box">
            <div class="form-group">
                <label for="fname">Name</label>
                <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">Enter your name here.</small>
            </div>
            <div class="form-group">
                <label for="faddr">Address</label>
                <input type="text" class="form-control" id="faddr" aria-describedby="addressHelp" />
                <small id="addressHelp" class="form-text text-muted">Enter address here.</small>
            </div>
            <button type="submit" class="btn btn-sm btn-secondary">Register</button>
            </form>


            </div>
        </div>
    )
}

export default Formsmall;