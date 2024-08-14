import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

function Error() {
  return (
    <div className="h-[90rem] mx-auto grid place-items-center text-center px-8">
      <div>
        <FontAwesomeIcon
          className="h-40 w-40 m-auto text-coral-red"
          icon={faFlag}
        />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          Error 404 <br /> It looks like something went wrong.
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it.Please try refreshing the
          page or come back later.
        </Typography>
        <Button color="gray" className="w-full px-4 text-2xl md:w-[8rem]">
          back home
        </Button>
      </div>
    </div>
  );
}

export default Error;
