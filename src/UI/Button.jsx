function Button({ children }) {
  return (
    <div className="active:scale-95 hover:scale-105 ease-linear cursor-pointer relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-secondary rounded hover:bg-white group">
      <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-base-100 transition-colors duration-300 ease-in-out group-hover:text-white">
        {children}
      </span>
    </div>
  );
}

export default Button;
