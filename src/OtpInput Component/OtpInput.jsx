import { useRef, useState } from "react";
import "./OtpInput.css";

function OTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>

      <p className="otp-text">
        Enter the 4-digit OTP 
      </p>

      <div className="otp-box-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            className="otp-box"
            ref={(element) => {
              inputRefs.current[index] = element;
            }}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default OTP;