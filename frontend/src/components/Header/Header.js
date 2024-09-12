import FF from "../../assets/images/FF.png";

const Header = (props) => {
  return (
    <header className="w-screen h-24 bg-white flex justify-between fixed pl-3 pr-7">
      <div className=" flex items-center">
        <img src={FF} alt="logo" className="h-20 w-20 mr-2"></img>
        <p className="text-grayText">
          Encuentra tu escape perfecto, al mejor precio
        </p>
      </div>
      <div className="flex items-center">
        <button className="  py-2 px-7  h-11 text-sm font-bold rounded-md   text-white   border border-solid border-white bg-darkblue  ring-blue5  hover:bg-opacity-90 active:border active:border-blue6 active:outline-none active:ring  transition  hover:duration-150">
          Inciar Sesion
        </button>
        <button className="py-2 px-7 h-11 text-sm font-bold rounded-md   text-white   border border-solid border-white bg-darkblue  ring-blue5  hover:bg-opacity-90 active:border active:border-blue6 active:outline-none active:ring  transition  hover:duration-150 ml-2 s:bg-red-500  m:bg-black l:bg-lime-600">
          Registrarse
        </button>
      </div>
    </header>
  );
};

export default Header;
