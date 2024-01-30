import { FaHeart } from "react-icons/fa6";

const Home = () => {
  return (
    <main>
      <nav className="flex flex-col lg:justify-center h-[170px] lg:h-[80px] px-[29px] bg-[#33907C]">
        <section className="mt-[12px] lg:mt-0 flex justify-between items-center">
            <h1 className="text-white text-[24px] font-bold">Farm2Table</h1>
            <div className="relative hidden lg:block">
                <input type="text" className="search-input pl-10 w-[335px] py-2 rounded-full" />
                <img src="/assets/icons/Search.jpg" alt="" className="absolute top-1/2 transform -translate-y-1/2 left-2 h-5 w-5 text-white"/>
            </div>
            <div className="flex items-center gap-[18px]">
                <FaHeart className="text-white" />
                <img src="/assets/icons/Cart.png" alt="" />
            </div>
        </section>
        <section className="mt-[23px] flex justify-center lg:hidden">
            <div className="relative">
                <input type="text" className="search-input pl-10 w-full px-[20px]" />
                <img src="/assets/icons/Search.jpg" alt="" className="search-icon absolute top-0 left-0 h-full" />
            </div>
        </section>
      </nav>
    </main>
  )
}

export default Home
