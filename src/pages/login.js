// Login.js
import React from "react";
import '../style/login.scss';

import TeluLogo from '../assets/telulogo.png';
import OwlLogo from '../assets/owl.png';

export function Login() {
    return (
        <div className="login_component">
            <div className="wrapper_landing_login">
                <div className="row_login">
                    <div className="column_login">
                        <div class="item_one">
                        <img className="telu_logo" src={TeluLogo} alt="telkom"/>
                        <img className="owl_logo" src={OwlLogo} alt="owl"/>
                        <div className="text_wrapper_login_proctoring">
                            <p className="text_header_one">Telkom University<br />Ai Practoring</p>
                            <p className="text_header_two">Aplikasi ujian online dengan kecerdasan buatan <br/> menuju ujian online berintegritas</p>
                        </div>
                        </div>
                    </div>
                    <div className="column_login">

                        <div className="login_form_wrapper">
                            <div className="login_form">
                                <p className="login_form_header">SSO Login</p>
                                <p className="login_form_text">Single Account, Single Sign On - Login</p>
                                <div className="login_form_input">
                                    <input type="text" placeholder="SSO Username" />
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="login_form_button">
                                    <button className="login_form_button_login">Login SSO</button>
                                    <button className="login_form_button_register">Login Microsoft</button>
                                </div>
                                <div className="login_form_footer">
                                    <p className="login_form_footer_text">Lupa Kata Sandi?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
        </div>
    );
}
