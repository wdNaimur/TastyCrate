import React from "react";
import SectionHeading from "../UI/SectionHeading";

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time from your account settings. No fees, no hassle.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we only ship within the country, but we’re working hard to expand our reach soon.",
  },
  {
    question: "Are items allergy-safe?",
    answer:
      "We clearly label all allergens, but as items are packed in shared facilities, cross-contamination may occur.",
  },
];

const FaqSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <SectionHeading
        subHeading=" Frequently Asked Questions"
        heading=" We’re here to help!"
      />
      <div className="text-left container px-4 mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow join-item border border-primary/10 bg-white"
          >
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
