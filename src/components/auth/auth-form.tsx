import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export function SignUp() {
  // Optional: Add form submission handler
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
    // Add your signup logic here (e.g., API call)
  };

  return (
    <MDBContainer fluid>
      <MDBCard
        className="text-black m-1.5 md:m-5"
        style={{ borderRadius: "25px" }}
      >
        {" "}
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign Up
              </p>

              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="user" size="lg" className="me-3" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope" size="lg" className="me-3" />
                  <MDBInput label="Your Email" id="form2" type="email" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock" size="lg" className="me-3" />
                  <MDBInput label="Password" id="form3" type="password" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key" size="lg" className="me-3" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                  />
                </div>

                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <MDBBtn type="submit" className="mb-4" size="lg">
                  Register
                </MDBBtn>
              </form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
                alt="Registration illustration"
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
