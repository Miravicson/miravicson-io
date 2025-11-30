import { ArrowPathIcon } from "@heroicons/react/24/solid";

const Loader: React.FC<{ text?: string }> = ({ text }) => {
  return (
    <div className="flex flex-col items-center w-full py-5">
      <ArrowPathIcon
        className={`animate-spin h-12 w-12 text-primary-text-color dark:text-d-primary-text-color`}
      />
      <p className="py-4 text-2xl font-medium">{text}</p>
    </div>
  );
};

export default Loader;
