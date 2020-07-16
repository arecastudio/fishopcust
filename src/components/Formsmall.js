import React from 'react';

const Formsmall=()=>{
    return(
        <div className="form-customer centered">
            <div className="customer-part customer-desc">
                <p className="desc-box">
                No, you can't use the local storage of one domain to other domain. Local Storage is domain based. You can’t read or write from localstorage that’s on different domain even on it's subdomain. you can use it via Iframe on your subdomain. Please go through this link for detailed explanation.
                </p>
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
                <input type="text" class="form-control" id="faddr" />
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-sm btn-secondary">Save</button>
            </form>


            </div>
        </div>
    )
}

export default Formsmall;