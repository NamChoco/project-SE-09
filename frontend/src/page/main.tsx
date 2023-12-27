
import Dog from "../assets/dog/Dog-Face-Transparent-Background.png"
import br from "../assets/brush/br.png";
import cat from "../assets/cat/Hero Pedigree Cats.jpg";
import './mainCSS.css';
import SlideMain from "../component/slide-img/slideMain/slideMain";
import Footer from "../component/footer/footer";


export default function Main() {
    
    function checkVisibility() {
        const element = document.querySelector('.hidden-text') as HTMLElement;
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        // console.log(position);
        // console.log(screenHeight);
        if (position < screenHeight) {
            element.classList.add('visible');
            // console.log('visible');
        }
    }
    
    function handleScroll() {
        requestAnimationFrame(checkVisibility);
    }
    
    // เพิ่ม event listener สำหรับ scroll
    window.addEventListener('scroll', handleScroll);
    
    // เรียกใช้ checkVisibility ทันทีหลังจากโหลดหน้าเว็บ
    document.addEventListener('DOMContentLoaded', checkVisibility);

    return (
        <>
            
            
            <div className="container-content1">
                <div className="header-content-main absolute-middle">
                    <div className="header-content-main-left">
                        <div className="box-header-content-main-left absolute-middle-top">
                            <h1 className="head-text">Paws In Luxury <br />    with our store.</h1>
                            <p className="para-text">Pets and pet products for sale 🐩🐈‍⬛🦜
                            </p > 
                            <p className="para-text2" >
                                All pets are well cared for and ready for new homes 🏠 
                                Find the perfect pet for you today! 🐶🐱🐦
                            </p>
                        </div>
                        
                    </div>
    
                    <div className="header-content-main-right">
                        <div className="border-photo absolute-middle-left-30 animation-brush-bg-photo" >
                            <img src={br} alt=""  style={{width: "650px"}} className="animation-header-br"/>
                        </div>
                        <div className="border-photo absolute-middle-left" >
                            <img src={Dog} alt=""  className="animation-header-img" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mask top"></div>

            <div className="container-content2">
                
                <div className="content-info">

                    <div className="content-info-left">
                        <div className="img-container-left absolute-middle-top">
                            <div className="image-content-left">
                                <img src={cat} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="content-info-right">
                        <div className="content-text hidden-text">
                            <h2>Our Passion Is Providing Superior Pet Care</h2>
                            <p>Receive the most premium care service from us.<br/> We are here to provide everything you may need.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <SlideMain />

            <Footer />
        </>
    );
}