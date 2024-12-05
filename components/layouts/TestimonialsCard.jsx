const TestimonialsCard = ({ icon, name, userName, description }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-4 shadow-lg shadow-dark/10 transition duration-200 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div>img</div>
          <div className="flex flex-col gap-0">
            <p className="font-nohemi text-md font-medium tracking-wide">
              {name}
            </p>
            <p className="font-montreal text-sm text-gray-500">{userName}</p>
          </div>
        </div>
        <div>icon</div>
      </div>
      <div>
        <p className="font-montreal text-lg leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
