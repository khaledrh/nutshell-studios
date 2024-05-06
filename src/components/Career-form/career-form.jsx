import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-info1.json";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h1 className="fw-700 color-font ">Join Us.</h1>
              <Split>
                <p
                  className="wow txt mb-20 words chars splitting animated"
                  data-splitting
                >
                  if you want to be part of huge talented vfx team and you can deliver high end quality.
                </p>
                <p className="wow txt mb-20 words chars splitting animated" data-splitting>
                  we are always looking for great canditates
                </p>
              </Split>

              <Formik
                initialValues={{
                  department: "",
                  name: "",
                  email: "",
                  phone: "",
                  portofolio: "",
                  resume: "",
            
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  alert(JSON.stringify(values, null, 2));
                  // show message

                  messageRef.current.innerText =
                    "Your Message has been successfully sent. I will contact you soon.";
                  // Reset the values
                  values.department = "";
                  values.name = "";
                  values.email = "";
                  values.phone = "";
                  values.portofolio = "";
                  values.resume = "";
                  
                  // clear message
                  setTimeout(() => {
                    messageRef.current.innerText = ''
                  }, 2000)
                }}
              >
                {({ errors, touched }) => (
                  <Form id="contact-form">
                    <div className="messages" ref={messageRef}></div>
                    <div className="controls">
                      
                    <div className="form-group">
                        <Field
                          id="form_department"
                          type="text"
                          name="department"
                          placeholder="Department Selection"
                          required="required"
                          className = "sel"
                          as = "select"
                
                        >
                          <option value="">Department Selection</option>
                          <option value="3D">3D</option>
                          <option value="Matchmove">Matchmove</option>
                          <option value="Compositing">Compositing</option>
                          <option value="Art Direction">Art Direction</option>
                          <option value="Production">Production</option>
                          <option value="Matte-painting">Matte-painting</option>
                          <option value="Motion-Graphics">Motion-Graphics</option>
                        </Field>
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          validate={validateEmail}
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                        <Field
                          id="form_phone"
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required="required"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          id="form_portofolio_link"
                          type="text"
                          name="portofolio"
                          placeholder="Link to Your Portofolio"
                          required="required"
                        />
                      </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="form_resume"
                        name="resume"
                        placeholder="Resume"
                        rows="4"
                        required="required"
                      />
                    </div>

                    <button type="submit" className="butn bord">
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
