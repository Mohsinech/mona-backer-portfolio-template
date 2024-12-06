import Image from "next/image";

const TestimonialsCard = ({
  icon,
  image,
  fallback,
  name,
  userName,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 rounded-xl p-4 shadow-lg shadow-dark/10 transition duration-200 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gray-300 font-montreal text-lg">
            {fallback}
            <Image
              src={image}
              layout="fill"
              alt={userName}
              className="absolute rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-0">
            <p className="font-nohemi text-md font-medium tracking-wide">
              {name}
            </p>
            <p className="font-montreal text-sm text-gray-500">{userName}</p>
          </div>
        </div>
        <div className="flex h-fit w-fit items-center justify-center">
          <Image src={icon} width={25} height={25} alt="Twitter" className="" />
        </div>
      </div>
      <div>
        <p className="font-montreal text-md leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
