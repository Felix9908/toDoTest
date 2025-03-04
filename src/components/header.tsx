interface HeaderProps {
    title: string;
  }
  
  const Header = ({ title }: HeaderProps) => {
    return (
      <header className="flex w-full m-4  border-black">
        <h1 className="text-2xl font-bold">{title}</h1>
      </header>
    );
  };
  
  export default Header;