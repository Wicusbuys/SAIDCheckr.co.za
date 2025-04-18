"use client";

import React, { useState, useRef } from "react";
import { CheckCircle, XCircle, ArrowDownCircle } from "lucide-react";

const Validator = () => {
  const [idNumber, setIdNumber] = useState("");
  const [validationResult, setValidationResult] = useState<{
    status: "valid" | "invalid" | "";
    message: string;
  }>({ status: "", message: "" });
  const [hasValidated, setHasValidated] = useState(false);
  const [details, setDetails] = useState<{
    dateOfBirth: string;
    gender: string;
    citizenship: string;
  } | null>(null);

  const explanationRef = useRef<HTMLDivElement | null>(null);

  const scrollToExplanation = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const isValidID = (id: string) => {
    let sum = 0;
    let alternate = false;

    for (let i = id.length - 1; i >= 0; i--) {
      let digit = parseInt(id[i], 10);

      if (alternate) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      alternate = !alternate;
    }

    return sum % 10 === 0;
  };

  const isValidDate = (year: number, month: number, day: number) => {
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  };
  
  const extractDetails = (id: string) => {
    const year = parseInt(id.substring(0, 2), 10);
    const month = parseInt(id.substring(2, 4), 10);
    const day = parseInt(id.substring(4, 6), 10);
    const genderCode = parseInt(id.substring(6, 10), 10);
    const citizenshipCode = parseInt(id.substring(10, 11), 10);
  
    const currentYear = new Date().getFullYear();
    const currentYearLastTwo = currentYear % 100;
    const fullYear = year > currentYearLastTwo ? 1900 + year : 2000 + year;
  
    if (!isValidDate(fullYear, month, day)) {
      return null;
    }
  
    const gender = genderCode >= 5000 ? "Male" : "Female";
    const citizenship = citizenshipCode === 0 ? "SA Citizen" : "Permanent Resident";
  
    return {
      dateOfBirth: `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${fullYear}`,
      gender,
      citizenship,
    };
  };

  const validateID = () => {
    setHasValidated(true);

    if (idNumber.length !== 13) {
      setValidationResult({ status: "invalid", message: "INVALID" });
      setDetails(null);
      return;
    }

    if (isValidID(idNumber)) {
      setValidationResult({ status: "valid", message: "VALID" });
      setDetails(extractDetails(idNumber));
    } else {
      setValidationResult({ status: "invalid", message: "INVALID" });
      setDetails(null);
    }
  };

  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col justify-center items-center mt-32 mx-8 lg:mt-64">
        <div className="flex flex-col gap-6 justify-center items-center tracking-widest">
          <h1 className="text-4xl text-white font-medium md:text-5xl lg:text-7xl text-center leading-tight">
            Validate South African ID Numbers
          </h1>
          <h3 className="text-2xl text-accent font-semibold md:text-4xl lg:text-5xl text-center">
            Quick, Easy, Secure
          </h3>
        </div>
        <div className="w-full flex flex-col bg-primary rounded-md mx-8 mt-20 md:mt-32 max-w-[700px]">
          <form className="flex flex-col space-y-8 justify-center items-center p-8 md:p-12 lg:p-16" onSubmit={(e) => e.preventDefault()}>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="Enter ID Number"
              value={idNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setIdNumber(value);
                setHasValidated(false);
                setValidationResult({ status: "", message: "" });
                setDetails(null);
              }}
              className={`w-full max-w-[560px] h-[60px] text-center text-white font-bold text-base bg-secondary p-3 drop-shadow-xl shadow-black md:h-[80px] md:text-lg lg:text-xl focus:ring-2 focus:outline-none 
                ${
                  hasValidated
                    ? validationResult.status === "valid"
                      ? "border-2 border-accent focus:ring-accent"
                      : "border-2 border-red-600 focus:ring-red-600"
                    : "border-2 border-transparent focus:ring-primary-light"
                }`}
            />
            <button
              type="button"
              onClick={validateID}
              className="w-full max-w-[300px] h-[60px] rounded-full bg-accent text-white font-bold text-base p-3 md:h-[80px] md:text-lg lg:text-xl hover:bg-secondary-dark focus:ring-2 focus:ring-primary-light focus:outline-none"
            >
              VALIDATE
            </button>
          </form>
        </div>
        {hasValidated && (
          <div className="flex flex-col text-center w-full max-w-[700px] bg-secondary">
            {validationResult.status && (
              <div className={`w-full mx-auto text-center text-5xl font-extrabold p-3 ${validationResult.status === "valid" ? "text-accent" : "text-red-600"}`}>
                <div className="flex justify-center items-center gap-2">
                  {validationResult.status === "valid" ? <CheckCircle size={48} /> : <XCircle size={48} />}
                  <span>{validationResult.message}</span>
                </div>
              </div>
            )}
            {details && (
              <div className="w-full mx-auto text-center text-xl text-white font-bold p-3">
                <p>Date of Birth: {details.dateOfBirth}</p>
                <p>Gender: {details.gender}</p>
                <p>Citizenship: {details.citizenship}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%] lg:bottom-16 cursor-pointer">
        <div className="flex justify-center items-center flex-col" onClick={scrollToExplanation}>
          <p className="text-xl text-gray-500 lg:text-2xl">How it works</p>
          <ArrowDownCircle size='100%' className="text-gray-500 mt-4 w-8 h-8  lg:w-12 lg:h-12" />
        </div>
      </div>
      <div ref={explanationRef}></div>
    </div>
  );
};

export default Validator;
