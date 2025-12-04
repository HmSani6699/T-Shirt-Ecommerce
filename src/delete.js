const Navber = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="bg-bg-white shadow-md relative">
      {/* Mobile navber */}
      <div className="flex items-center justify-between lg:hidden px-5 py-2.5">
        <div onClick={() => setIsOpenMenu(!isOpenMenu)}>
          <RxHamburgerMenu className="text-text-black text-[20px] " />
        </div>

        {/* logo */}
        <div>
          <img src={logo} alt="" />
        </div>

        {/* cart and search */}
        <div className="flex items-center gap-5">
          <FiSearch className="text-[20px] text-text-black" />
          <HiOutlineShoppingBag className="text-[21px] text-text-black" />
        </div>
      </div>

      {/* Mobile nav list */}
      <div
        className={`
    fixed inset-0 bg-red-500 z-40 transition-transform duration-300
    ${isOpenMenu ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <button onClick={() => setIsOpenMenu(false)} className="p-4 text-white">
          Close
        </button>
      </div>
    </div>
  );
};

export default Navber;
