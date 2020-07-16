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
                <label for="exampleInputEmail1">Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-sm btn-secondary">Submit</button>
            </form>


            </div>
        </div>
    )
}

export default Formsmall;