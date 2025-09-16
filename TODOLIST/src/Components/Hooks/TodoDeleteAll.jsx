export const TodoDeleteAll = ({onhandleAllDelete}) => {
  return (
    <button
      className="bg-orange-600 p-2 text-2xl rounded-l-2xl rounded-r-2xl mt-5"
      onClick={onhandleAllDelete}
    >
      Clear All
    </button>
  );
};
