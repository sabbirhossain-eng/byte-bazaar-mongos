const CategoryStat = ({ icon: Icon, name }) => {
  return (
    <div className="hover:text-secondary p-4 rounded-2xl bg-white shadow dark:bg-gray-800 text-center">
      <div className="flex justify-center text-6xl dark:text-gray-100 space-y-4 text-black">
        <Icon />
      </div>
      <div className="font-medium">{name}</div>
    </div>
  );
};

export default CategoryStat;
