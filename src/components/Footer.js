/* eslint-disable no-sequences */
import React from "react";
import "../styles/Header.css";

const styles = {
    inherit: {
        fontFamily: "inherit",
        height: "100",
        resize: "both"
    },
    form: {
        margin: "20px",
        paddingTop: ".5rem",
        resize: "both!important"
    },
    container: {
        backgroundColor: "white",
        opacity: ".9"
    },
    flex: {
        display: "flex"
    },
    textbox: {
        width: "100%",
        height: "200px"
    },
    submit: {
        backgroundColor: "rgb(159, 184, 159)",
        margin: "12px",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }
}

function Footer() {
    return (
        <div style={styles.container}>
            <section id="contact">
                <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/mrgoygyo"
                    method="post">
                    <fieldset id="fs-frm-inputs" style={styles.form}>
                        <label htmlFor="full-name" style={styles.flex}>Full Name</label>
                        <input type="text" name="name" id="full-name" style={styles.inherit} placeholder="First and Last"
                            required=""></input>
                        <label htmlFor="email-address"style={styles.flex}>Email Address</label>
                        <input type="email" name="_replyto" id="email-address" style={styles.inherit}
                            placeholder="email@domain.tld" required=""></input><br></br>
                        <label htmlFor="message" style={styles.flex}>Message</label>
                        <textarea rows="5" name="message" id="message" style={styles.inherit, styles.textbox}
                            placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                            required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                    </fieldset>
                    <input type="submit" style={styles.form, styles.submit} value="Send"></input>
                </form>
            </section>

            <footer>
                <section className="row justify-center">

                </section>
            </footer>
        </div>
    );
}

export default Footer;
