import React, { useState } from "react"

import ReactMarkdown from "react-markdown"

function Accordion() {
  const [isOpen, setIsOpen] = useState([true, false, false]) // Initialize state for each accordion section

  // Function to toggle the accordion section
  const toggleAccordion = (index) => {
    const newIsOpen = [...isOpen] // Create a copy of the state array
    newIsOpen[index] = !newIsOpen[index] // Toggle the state of the clicked section
    setIsOpen(newIsOpen) // Update the state
  }

  return (
    <div id="accordion-open" data-accordion="open">
      {[
        {
          question: "Is this product authentic?",
          answer:
            "All our products come with a guarantee of authenticity. nanoHome serves as the exclusive representative in Vietnam for renowned global brands such as USM, Fritz Hansen, HAY, and more. We are dedicated to meticulously verifying the authenticity of each product we provide.",
        },
        {
          question: `Terms & Conditions`,
          answer:
            "- The quotation is valid for 7 days only.\n- Order/ Importation Time is counted from the day nanoHome receives the customer's deposit / payment from Client.\n- We shall provide free delivery for the urban area of HCM City for orders with value above 5 million VND (excluding Binh Chanh, Cu Chi, Nha Be, Can Gio, Hoc Mon). Additional charges shall apply for other areas and orders with Panasonic/Nanoco products, subject to distance as well as the number of loads. Price is exclusive of the installation fee.\n- Please kindly inspect the goods at the time of your receipt of the delivery. No return/change of goods except due to technical flaws by the manufacturer.\n- The Customer is required to receive the goods within 30 (thirty) days from the date of Customer’s receipt of the Delivery Notice from nanoHome. If the Customer delays or prolongs the time to receive the goods for any reason without the acceptance in writing or email from nanoHome, causing additional costs incurred to nanoHome for storage and preservation, nanoHome is entitled to\n    - _(i) request the Customer to pay for the storage and preservation costs of the goods according to the tariff designated by nanoHome, or_\n    - _(ii) unilaterally cancel the order without having to refund the deposit and the amount already paid by the Customer, and_\n    - _(iii) claim Customer for a penalty of 08% (eight percent) of the total value of the order._\n- In the event the Customer unilaterally cancels the order for products that are currently available in stock, the Customer will lose the deposit equivalent to 50% of the order value and the amount already paid by the Customer. In case, Customer unilaterally cancels the order for products that are not available in stock and requires order placement, the Customer will pay 100% of the order value to nanoHome.\n\n",
        },
        {
          question: `Payment Information`,
          answer:
            "- Payment method: **Payment shall be made in VND via bank transfer**\n- Beneficiary: **NANOHOME ONE MEMBER LIMITED COMPANY**\n- Account number: **060196621760**\n- Bank information: **SACOMBANK – HANG XANH TRANSACTION OFFICE - BEN THANH BRANCH**\n- Transaction information: **ORDER NUMBER**\n",
        },
      ].map((item, index) => (
        <div key={index} className="mb-2 border border-gray-300 rounded">
          <h2 id={`accordion-open-heading-${index}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-0 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                index === 0 ? "rounded-t" : "" // Add rounded top border to the first item
              } ${
                index === 2 ? "rounded-b" : "" // Add rounded bottom border to the last item
              }`}
              data-accordion-target={`#accordion-open-body-${index}`}
              aria-expanded={isOpen[index]}
              aria-controls={`accordion-open-body-${index}`}
              onClick={() => toggleAccordion(index)} // Toggle the accordion section on button click
            >
              <span className="flex items-center justify-between w-full">
                <S.Question>{item.question}</S.Question>
                <svg
                  className={`w-5 h-5 mr-2 shrink-0 ${
                    isOpen[index] ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <title>caret-sm-up</title>
                  <g
                    strokeWidth="1"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3.5,9.5 8,5 12.5,9.5 "></polyline>
                  </g>
                </svg>
              </span>
            </button>
          </h2>
          <div
            id={`accordion-open-body-${index}`}
            className={`${
              isOpen[index] ? "" : "hidden"
            } p-5 border-t border-gray-300 dark:border-gray-700`}
            aria-labelledby={`accordion-open-heading-${index}`}
          >
            <S.Answer>{item.answer}</S.Answer>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion

const S = {}

S.Question = tw.div`font-bold text-green-600`
S.Answer = tw(ReactMarkdown)`mb-2 prose text-gray-500 dark:text-gray-400`
