function Button({ text, onClick, outlined }) {
  return (
    <div
      className={`py-2 px-4 rounded-lg text-sm font-medium cursor-pointer 
        ${outlined 
          ? "border-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white"
          : "bg-primary-color text-white hover:bg-opacity-90"
      }`}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default Button;
