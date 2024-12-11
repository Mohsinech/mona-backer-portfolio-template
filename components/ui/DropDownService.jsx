import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const DropDownService = ({
  serviceName,
  labelOne,
  labelOneDesc,
  labelTwo,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  isOpen,
  handleOpen,
}) => {
  const content = useRef();

  useEffect(() => {
    const animationDuration = 1;

    if (isOpen) {
      gsap.to(content.current, {
        opacity: 1,
        maxHeight: 1000,
        duration: animationDuration,
        ease: "power2.in",
      });
    } else {
      gsap.to(content.current, {
        opacity: 0,
        maxHeight: 0,
        duration: animationDuration,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  return (
    <div className="relative flex h-fit w-full flex-col gap-4">
      <div
        className="w-full cursor-pointer border-b-1 border-gray-300 pb-3"
        onClick={handleOpen}
      >
        <p className="font-nohemi text-3xl font-regular text-white max-sm:text-2xl">
          {serviceName}
        </p>
      </div>
      <div
        ref={content}
        className="flex w-full justify-end overflow-hidden max-sm:justify-start"
        style={{
          opacity: 0,
          maxHeight: 0,
        }}
      >
        <div className="flex h-fit w-eighty flex-col gap-8 max-blg:py-4 max-sm:w-full max-sm:gap-10">
          <div className="flex gap-6 max-sm:gap-10">
            <h3 className="whitespace-nowrap font-montreal text-sm text-white max-blg:text-md">
              {labelOne}
            </h3>
            <p className="font-montreal text-sm tracking-wide text-gray-300 max-blg:text-md max-sm:text-sm">
              {labelOneDesc}
            </p>
          </div>
          <div className="flex gap-6 max-sm:gap-10">
            <h3 className="whitespace-nowrap font-montreal text-sm text-white max-blg:text-md">
              {labelTwo}
            </h3>
            <div className="flex flex-wrap gap-3 max-sm:gap-2">
              {[btn1, btn2, btn3, btn4, btn5].map(
                (btn, index) =>
                  btn && (
                    <button
                      key={index}
                      className="rounded-full border-1 border-gray-300 px-4 py-2 font-montreal text-xs tracking-wide text-gray-300 max-blg:text-md max-sm:text-xs"
                    >
                      {btn}
                    </button>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownService;
