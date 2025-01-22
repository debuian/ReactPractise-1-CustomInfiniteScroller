const Card = ({ title }: { title: string }) => {
  return (
    <div className="p-4 rounded-lg bg-gray-800 text-cyan-50 ">{title}</div>
  );
};

export default Card;
