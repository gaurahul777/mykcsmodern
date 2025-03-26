import React, { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoIosMail, IoMdArrowRoundBack } from "react-icons/io";
// import { Snackbar } from '@mui/material';
// import CustomAlert from '../components/CustomAlert';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
// import data from '../../public/costants?.json'

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [userCode, setUserCode] = useState("");
  const [verificationCode, setVerificationCode] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationHelp, setVerificationHelp] = useState(false);
  const [status, setStatus] = useState("Verification Code succesfully to your email");
  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (status) {
  //     const timer = setTimeout(() => setStatus('Sending Verification Code to your email'), 3000); // Reset status after 4 seconds
  //     return () => clearTimeout(timer); // Cleanup timer on component unmount or when `status` changes
  //   }
  // }, [status]);

  //open snackbar
  // const [state, setState] = useState({
  //   open: false,
  //   vertical: 'top',
  //   horizontal: 'right',
  // });
  // const { vertical, horizontal } = state;

  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   setOpen(false);
  // };

  //close snackbar

  // const handleSubmit = (e) => {

  // }

  useEffect(() => {
    // console.log("Updated loadingSubmit:", loadingSubmit);
  }, [loadingSubmit]);

  const handleSendVerificationCode = async (e) => {
    // let generatedCode;
    e.preventDefault(); // Prevent default form submission behavior
    setLoadingSubmit(true); // Set loading to true
    setStatus(""); // Clear previous status if any
    // console.log("Loading set to true");

    try {
      const response = await fetch("/api/send-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus(data.message);
        setVerificationHelp(true);
        handleShowAlert();
        // setVerificationCode(true);
      } else if (response.status == 400) {
        setStatus(data.message);
        setVerificationHelp(false);
        handleShowAlert();
      } else {
        setStatus("Failed to send verification code to your email !");
        handleShowAlert();

        setVerificationCode(false);
      }
    } catch (error) {
      console.error("Error sending verification code:", error);
      setStatus("Error sending verification code");
      handleShowAlert();
      setVerificationHelp(false);
    } finally {
      // setTimeout(() => {

      setLoadingSubmit(false);
      handleShowAlert();
      // setVerificationHelp(true);

      console.log("hellokiiiie");
      // }, 2000);
    }
  };

  // Handle verification code submission
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${data.baseUrl}/api/send-formdata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: message,
          subject: subject,
          userCode: userCode,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        handleShowAlert();

        // setOpen(true);
        setIsVerified(true);
        setMessage("");
        setUserCode("");
        //       setEmail('');
        setSubject("");
        //       setName('');
        setVerificationCode(null);
        setVerificationHelp(false);
      } else {
        setStatus("Please enter the correct code.");
        setIsVerified(false);
        handleShowAlert();
      }
    } catch (error) {
      //    console.error('Error for sending message:', error);
      setStatus("Error for sending message");
      handleShowAlert();
    } finally {
      setLoading(false);
    }

    //  if (userCode === verificationCode) {
    //    setStatus('Message sent successfully!')
    //   // setIsVerified(true);
    //   // // alert("Message sent successfully!");
    //  setOpen(true);

    // Clear input fields
    // Proceed to send the message here
    // setMessage("");
    // setUserCode("");
    // setEmail('');
    // setSubject('');
    // setName('');
    // setVerificationCode(null);
    // setIsVerified(false);

    //  }

    // else {
    //   setStatus('Please enter the correct code.');
    //   setOpen(true);
    //   // alert("Please enter the correct code.");

    // }

    // const response = await fetch('/api/send-formdata', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     message: message,
    //     subject: subject,
    //   }),
    // });

    // const data = await response.json();
    
  };
  
  const homepage = ()=>{
    navigate('/');
  }

  return (
    <section>
      <Helmet>
        <title>KSS - Contact Us</title>
        <meta name="description" content="Get in touch with Kataria Consultancy Services for all your internet solution needs. Our team is here to assist you with your project requirements." />
        <meta property="og:title" content="Contact Us - Kataria Consultancy Services" />
        <meta property="og:description" content="Have any questions or project inquiries? Contact us today, and our team will be happy to assist you with personalized internet solutions." />
        {/* <meta property="og:image" content={about4} /> */}
        <meta property="og:type" content="website" />
      </Helmet>

      <div className=" md:py-20 md:px-20 shadow-5xl">
        <div className="bg-zinc-900  ">
          <div className="bg-zinc-900 md:py-16 px-2 py-10 flex items-center justify-center gap-10 ">
            <div className="rounded-full p-2 border-white border-2 group hover:bg-white" onClick={()=>homepage()}>
              <IoMdArrowRoundBack className="text-4xl text-white group-hover:text-black" />
            </div>

            <h1 className="md:text-5xl text-4xl font-bold text-center text-white tracking-widest ">Feel Free to Contact Us</h1>
          </div>

          <div className="map md:px-36 md:py-14 px-4 py-10">
            <iframe
              // src={data.googleMapLink}
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3512.075601822068!2d77.07252407524942!3d28.326313697921016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738412003764!5m2!1sen!2sin`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              className="shadow-xl"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Bestech City Center, Dharuhera Rewari - 123106 (Haryana)
        </Popup>
      </Marker>
    </MapContainer> */}
          </div>

          <div className="allformhere flex flex-col md:flex-row md:px-36 md:py-10 md:space-x-5 px-4 py-5">
            <div className="p-2 md:w-[60%] w-full flexflex-col">
              <h1 className="md:text-4xl text-zinc-100 text-3xl font-semibold tracking-wider mb-5 md:ml-2  md:text-start text-center">Get in Touch</h1>
              <div className="">
                {/* <CustomAlert
        message={status}
        show={showAlert}
        onClose={() => setShowAlert(false)}
      /> */}
                <form onSubmit={handleSendVerificationCode}>
                  {/* <form > */}

                  <div className="grid grid-cols-2 md:gap-5 gap-2">
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="placeholder-slate-300 form-control md:py-3 md:px-6 px-2 py-2 rounded-md  text-md inline-block outline outline-1 outline-slate-300 placeholder:text-base text-zinc-100" placeholder="Enter your name" required />

                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="placeholder-slate-300 form-control md:py-3 py-2 px-2 md:px-6 rounded-md text-zinc-100 text-md inline-block outline outline-1 outline-slate-300 placeholder:text-base" placeholder="Enter your email" required />

                    <input type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="placeholder-slate-300 form-control py-3 px-6 rounded-md text-zinc-100 text-md col-span-2 inline-block outline outline-1 placeholder:text-base outline-slate-300" placeholder="Enter your Subject" required />

                    <textarea
                      required
                      name=""
                      id=""
                      className="text-zinc-100
    rounded-md placeholder-slate-300 py-3 px-5 outline-1 outline outline-slate-300 h-56 col-span-2 pt-8 resize-none"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a message here..."
                    ></textarea>
                  </div>
                  {/* {isVerified?(<button type="submit" className='mt-8 rounded-md py-3 px-10 text-white bg-blue-500 hover:bg-blue-700'>Submit</button>):(
  <button type="button" className='mt-8 rounded-md py-3 px-10 text-white bg-blue-500 hover:bg-blue-700' onClick={handleSendVerificationCode}>Send Verification Code
</button>
)} */}

                  {/* <button type="submit" className='mt-8 rounded-md py-3 px-10 text-white bg-blue-500 hover:bg-blue-700'>Submit</button> */}

                  {!verificationHelp ? (
                    <button
                      type="submit"
                      value="Submit"
                      disabled={loadingSubmit}
                      // onClick={handleSendVerificationCode}
                      className={`px-14 py-4 mt-5 text-white rounded-lg flex justify-center items-center ${loadingSubmit ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                    >
                      {loadingSubmit ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z"></path>
                        </svg>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  ) : (
                    <div className="mt-4">
                      {/* <label className="block text-gray-700 mb-2">
            Enter Verification Code here
          </label> */}
                      <input type="number" value={userCode} onChange={(e) => setUserCode(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" placeholder="Enter verification code here" />
                      <button
                        type="button"
                        onClick={handleVerifyCode}
                        disabled={loading} // Disable button when loading
                        className={`w-full mt-2 py-2 text-white rounded-lg flex justify-center items-center ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 active:bg-green-600 focus:bg-green-600"}`}
                      >
                        {loading ? (
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 000 8v4a8 8 0 01-8-8z"></path>
                          </svg>
                        ) : (
                          "Verify & Send Message"
                        )}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="p-2 md:w-[40%] mt-5 md:mt-0 flex flex-col items-start justify-center gap-3">
              <div className="flex justify-center items-center gap-5 p-2">
                <div>
                  <HiBuildingOffice2 className="text-3xl text-zinc-100" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-semibold text-zinc-100">Kataria Software Solutions,</h1>
                  <p className="text-zinc-100">Gurugram 68, near Bakshi Farms, Sohna, Haryana 122102</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5 p-2">
                <div>
                  <BiSolidPhoneCall className="text-3xl text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl text-zinc-100 font-semibold">+91 9694395555 </h1>
                  <p className="text-zinc-100">Mon to Sat 9am to 6pm</p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-5 p-2">
                <div>
                  <IoIosMail className="text-3xl text-orange-500" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl text-zinc-100 font-semibold">support@mykcs.in</h1>
                  <p className="text-zinc-100">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
