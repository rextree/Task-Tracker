const Button = ({ text, onClick}) => {
  return (
    <div>
      <button className="px-4 py-1 text-white bg-green-700 hover:bg-green-600 duration-200 rounded" onClick={onClick}>
        {text}
      </button>
    </div>
    
  );
};

export default Button;
