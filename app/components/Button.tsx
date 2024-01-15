type ButtonProps = {
  children: JSX.Element;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-sm bg-blue-500 dark:bg-blue-400 text-white dark:text-zinc-700 px-2 py-2 text-xs dark:hover:bg-blue-500 dark:hover:text-white">
      {children}
    </button>
  );
};

export default Button;
