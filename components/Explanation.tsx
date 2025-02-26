import React from "react";
import { LockKeyhole } from "lucide-react";

const Explanation = () => {
  return (
    <div className="w-full h-full bg-gray-950">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center text-center pb-24">
          <div className="space-y-6 px-6 pt-24 lg:space-y-10">
            <h1 className="text-white text-4xl font-bold lg:text-6xl">
              How does VerifyID validate ID numbers?
            </h1>
            <p className="text-slate-300 text-lg lg:text-3xl">
              VerifyID validates South African ID numbers directly in your
              browser by applying Luhn&apos;s Algorithm to check if the format
              is correct. However, this process only verifies whether the ID
              follows the correct structure — it does not confirm if the ID is
              officially registered. To verify an ID&apos;s validity with
              government records, you&apos;ll need to use official government
              services.
            </p>
          </div>
          <div className="space-y-6 px-6 pt-24 lg:space-y-10">
            <h1 className="text-white text-4xl font-bold lg:text-6xl">
              Is it secure?
              <LockKeyhole
                className="mx-auto mt-4 text-accent h-8 w-8 lg:h-14 lg:w-14"
                size="100%"
              />
            </h1>
            <p className="text-slate-300 text-lg lg:text-3xl">
              All verification happens locally on your device, with no data sent
              or stored on a server, ensuring your personal information remains
              private and secure.
            </p>
          </div>
          <div className="space-y-6 px-6 pt-24 lg:space-y-10">
            <h1 className="text-white text-4xl font-bold lg:text-6xl">
              What is Luhn&apos;s Algorithm?
            </h1>
            <p className="text-slate-300 text-lg lg:text-3xl">
              Luhn’s Algorithm (also called the Modulus 10 Algorithm) is a
              simple way to check if a number, like a credit card number or
              South African ID number, is valid. It helps catch mistakes, like
              typing errors, by using a special math trick.
            </p>
          </div>
          <div className="space-y-6 px-6 pt-16 lg:space-y-10">
            <h1 className="text-white text-4xl font-bold lg:text-6xl">
              How it works:
            </h1>
            <h2 className="text-lg font-bold text-white mb-3 lg:text-3xl">
              Step-by-Step Process:
            </h2>
            <div className="mb-4 text-white lg:text-2xl">
              <strong>1. Start from the Right:</strong>
              <ul className="ml-5 text-slate-300">
                <li>
                  Beginning with the second-to-last digit, double every second
                  digit moving left.
                </li>
              </ul>
            </div>
            <div className="mb-4 text-white lg:text-2xl">
              <strong>2. Double and Reduce:</strong>
              <ul className="ml-5 text-slate-300">
                <li>
                  If doubling a digit results in a two-digit number, subtract 9
                  from it (or sum the digits).
                </li>
              </ul>
            </div>
            <div className="mb-4 text-white lg:text-2xl">
              <strong>3. Sum All Digits:</strong>
              <ul className="ml-5 text-slate-300">
                <li>
                  Add up all the digits from the original and transformed
                  numbers.
                </li>
              </ul>
            </div>
            <div className="mb-4 text-white lg:text-2xl">
              <strong>4. Check Modulus 10:</strong>
              <ul className="ml-5 text-slate-300">
                <li>
                  If the total sum is a multiple of 10, the number is valid.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6 px-6 pt-16 lg:space-y-10">
            <table className="w-full border-collapse border text-white border-slate-300 text-center">
              <thead>
                <tr className="bg-accent">
                  <th className="border border-gray-500 py-3 text-lg lg:text-3xl">
                    Step
                  </th>
                  <th className="border border-gray-500 py-3 text-lg lg:text-3xl">
                    Digits
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-500 font-bold px-2 py-3 text-lg lg:text-3xl lg:px-8">
                    Original
                  </td>
                  <td className="border border-gray-500 px-1 py-3 text-base lg:tracking-widest lg:text-3xl lg:px-8">
                    5 &nbsp; 5 &nbsp; 0 &nbsp; 4 &nbsp; 2 &nbsp; 0 &nbsp; 7
                    &nbsp; 2 &nbsp; 6 &nbsp; 0 &nbsp; 1 &nbsp; 8 &nbsp; 9
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 font-bold px-2 py-3 text-lg lg:text-3xl lg:px-8">
                    Double
                  </td>
                  <td className="border border-gray-500 px-1 py-3 text-base lg:tracking-widest lg:text-3xl lg:px-8">
                    - &nbsp; 10 &nbsp; - &nbsp; 8 &nbsp; - &nbsp; 0 &nbsp; -
                    &nbsp; 4 &nbsp; - &nbsp; 0 &nbsp; - &nbsp; 16 &nbsp; -
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 font-bold px-2 py-3 text-lg lg:text-3xl lg:px-8">
                    Subtract 9
                  </td>
                  <td className="border border-gray-500 px-1 py-3 text-base lg:tracking-widest lg:text-3xl lg:px-8">
                    - &nbsp; 1 &nbsp; - &nbsp; - &nbsp; - &nbsp; - &nbsp; -
                    &nbsp; - &nbsp; - &nbsp; - &nbsp; - &nbsp; 7 &nbsp; -
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 font-bold px-2 py-3 text-lg lg:text-3xl lg:px-8">
                    Final
                  </td>
                  <td className="border border-gray-500 px-1 py-3 text-base lg:tracking-widest lg:text-3xl lg:px-8">
                    5 &nbsp; 1 &nbsp; 0 &nbsp; 8 &nbsp; 2 &nbsp; 0 &nbsp; 7
                    &nbsp; 4 &nbsp; 6 &nbsp; 0 &nbsp; 1 &nbsp; 7 &nbsp; 9
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 font-bold px-2 py-3 text-lg lg:text-3xl lg:px-8">
                    Modulus
                  </td>
                  <td className="border border-gray-500 px-1 py-3 text-base lg:tracking-widest lg:text-3xl lg:px-8">
                    50 % 10 = 0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 px-6 pt-24 lg:space-y-10">
            <h1 className="text-white text-4xl font-bold lg:text-6xl">
              SA ID Breakdown
            </h1>
            <p className="text-white text-lg lg:text-2xl">
              A South African ID Number consists of 13 digits, formatted as:
            </p>
            <p className="text-white text-lg font-bold lg:text-2xl">
              YYMMDDSSSSCAZ
            </p>
            <div>
              <ul className="text-slate-300 text-lg space-y-2 mt-4 lg:text-2xl lg:space-y-8">
                <li>
                  <strong className="text-white">Example ID:</strong>{" "}
                  5504207260189
                </li>
                <li>
                  <strong className="text-white">YYMMDD ( 550420 )</strong> :
                  Date of birth: 20 April 1955
                </li>
                <li>
                  <strong className="text-white">SSSS ( 7260 )</strong> :
                  Citizen's gender (0000-4999 for female, 5000-9999 for male) →
                  Male
                </li>
                <li>
                  <strong className="text-white">C ( 1 )</strong> : Citizenship
                  (0 = SA citizen, 1 = Permanent resident)
                </li>
                <li>
                  <strong className="text-white">A ( 8 )</strong> : Usually 8
                  for modern ID's
                </li>
                <li>
                  <strong className="text-white">Z ( 9 )</strong> : Luhn check
                  digit for validity verification
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 px-6 pt-24 lg:space-y-10">
            <h1 className="text-white text-4xl font-bold lg:text-6xl">
              Disclaimer
            </h1>
            <div>
              <p className="text-slate-300 text-lg lg:text-3xl">
                This website is an independent tool and is not associated with
                the South African Department of Home Affairs or any government
                entity. It is designed purely for educational and testing
                purposes. The Validator verifies the format of ID numbers but
                does not confirm their authenticity. For official ID
                verification, always consult the appropriate government sources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
