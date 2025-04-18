import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-8 md:w-4/12">
      <p className="mb-2 text-electricBlue text-xl">
      
        ------ {subHeading} ------
      </p>
      <h3 className="text-3xl border-y-4 py-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
