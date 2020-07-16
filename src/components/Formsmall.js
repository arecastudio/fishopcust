import React from 'react';

const Formsmall=()=>{
    return(
        <div className="form-customer centered">
            <div className="customer-part">
                <p>
                No, you can't use the local storage of one domain to other domain. Local Storage is domain based. You can’t read or write from localstorage that’s on different domain even on it's subdomain. you can use it via Iframe on your subdomain. Please go through this link for detailed explanation.
                </p>
            </div>
            <div className="customer-part">
                <form>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div>
                        <label for="address">Address</label>
                        <input type="text" id="address" name="address"/>
                    </div>
                    <div>
                        <button>Sign up</button> or <a href="#">Log in</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formsmall;