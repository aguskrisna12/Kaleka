import ImgLogo from '../assets/logo_kaleka.png';
import ImgHeader from '../assets/img_header.png';


function Header() {
  return (
    <>
        <div className="w-full pt-5 md:py-[18px] bg-black shadow px-[23px] flex items-center flex-col md:flex-row md:justify-between">
            <img className="w-48 h-[67px]" src={ImgLogo} alt='img-logo' />
            <div className="flex text-[#F8BE1A] md:text-xl md:font-bold pt-3 md:pt-0 fontInter gap-x-5 md:gap-x-5 md:items-center">
                <a href="#">BERANDA</a>
                <a href="#">TENTANG KAMI</a>
            </div>
            <div className='w-[192px]'>loremss</div>
        </div>
        <img className='h-[211px] w-full' src={ImgHeader} alt="img-header" />
    </>
  )
}

export default Header