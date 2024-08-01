import React, { useState } from "react";
import { printer } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  const history = useNavigate();
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Model: "",
  });

  const data = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getForm = async (e) => {
    e.preventDefault();

    const { Name, Email, Phone, Model } = form;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Phone,
        Model,
      }),
    };

    const res = await fetch(
      "https://tech-digi-bb339-default-rtdb.firebaseio.com/LandingPageData.json",
      options
    );

    if (res.ok) {
      history("/setup/loading");
    } else {
      alert("Form Not Submitted");
    }
  };

  return (
    <div className="relative bg-cover" style={{ backgroundColor: "#F0F8FF" }}>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-lightBlue p-4">
          <div class="text-center mb-5">
            <p class="text-3xl md:text-5xl font-bold mb-2">
              ALL IN ONE PRINTER
            </p>
            <p class="text-lg font-bold">
              SET UP YOUR PRINTER BY INSTALLING THE DRIVERS
            </p>
            <p class="text-lg font-bold mb">
              DOWNLOAD AND INSTALL YOUR PRINTER SOFTWARE
            </p>
            <p class="text-lg font-bold mb-2">123 Setup And Printer Setup</p>
          </div>

          <form
            method="POST"
            onSubmit={getForm}
            className="bg-white border border-black shadow-lg rounded-lg px-8 py-5 mb-6 max-w-lg mx-auto flex flex-wrap mt-5"
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4">
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm md:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                required
                value={form.Name}
                autoComplete="off"
                onChange={data}
              />
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4">
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm md:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                required
                value={form.Email}
                autoComplete="off"
                onChange={data}
              />
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4">
              <input
                type="tel"
                id="phone"
                name="Phone"
                placeholder="Phone"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm md:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={form.Phone}
                autoComplete="off"
                onChange={data}
              />
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4">
              <input
                type="text"
                id="printer-model"
                name="Model"
                placeholder="Printer model number"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-sm md:text-base text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={form.Model}
                autoComplete="off"
                onChange={data}
              />
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline self-center md:mt-4 w-full md:w-auto"
            >
              CLICK TO DOWNLOAD DRIVERS
            </button>
          </form>

          <p className="pt-2 mb-4">
            <span className="text-2xl lg:text-3xl font-bold">
              Having Inconvenience With Printer?
            </span>
            <br />
            <span className="text-lg lg:text-xl font-bold">
              24X7 Master Specialized support
            </span>
            <br />
            <span className="text-lg lg:text-xl font-bold">
              Chat us to talk with a live bolster expert {"  "}
              <a
                href="https://tawk.to/chat/66a8eee332dca6db2cb7758a/1i41uaahk"
                className="text-white bg-black py-1 px-2 rounded-full inline-block"
              >
                Chat Now
              </a>
            </span>
          </p>
        </div>

        {/* Right Div */}
        <div className="flex-1 bg-lightGreen relative">
          <div className="flex items-center justify-center">
            <img
              src={printer}
              alt="Right Image"
              className="lg:w-3/4 xl:w-4/5"
              style={{ width: "400px" }}
            />
          </div>
          <br />
          <div className="hidden md:flex items-center justify-center">
            <img
              src="https://goprinterincart.com/wp-content/uploads/2024/03/printer.png"
              alt="Right Image"
              className="lg:w-4/4 xl:w-4/5"
              style={{ width: "300px" }} // Adjust the width as needed
            />
          </div>

          <p className="text-xl lg:text-4xl font-bold text-center lg:text-left">
            {/* Contact Number */}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
