const Menu = ({open,opensign}) => {
  return (
    <div>
 <div
      className="pl-2 text-start"
    >
      <div className="pt-4 text-2xl">
        <div>About</div>
      </div>
      <div className="border-[1px] text-neutral-200"></div>
      <div className="text-2xl ">
        <div>Steps to join</div>
      </div>
      <div className="border-[1px] text-neutral-200"></div>
      <div className="text-2xl ">
        <div>Contact Us</div>
      </div>
      <div className="border-[1px] text-neutral-200"></div>
      <div>
        <div className="pt-2 pb-2">
          <div className="flex items-center ">
            <div className="block md:hidden lg:hidden">
              <div className="flex border-4 rounded-3xl border-b-amber-700">
                <div onClick={open} className="px-3 py-1.5 border-r-2 hover:rounded-2xl hover:bg-gradient-to-b from-red-500 to-blue-500  hover:text-white border-amber-950">
                  SIGN IN
                </div>

                <div onClick={opensign} className="px-3 py-1.5 border-l-2 hover:rounded-2xl hover:bg-gradient-to-b from-red-500 to-blue-500 hover:text-white border-amber-950">
                  SIGN UP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};
export default Menu;
