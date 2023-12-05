import img1 from "../../../assets/dog/siberian-husky-.jpg";
import img2 from "../../../assets/dog/si-jump-green1.jpg";
import img3 from "../../../assets/dog/si-jump-green2.jpg";
import img4 from "../../../assets/dog/siberian-husky_4217.jpg"
import img5 from "../../../assets/dog/GettyImages-1198704735-69e2d11cba434cb28a3c9e6caae9d128.jpg"
import { SlideCalc } from "./slideCalc";
import './slideMainCSS.css';
const IMG = [img1,img2,img3,img4,img5];

export default function SlideMain() {

    function checkVisibility() {
        const element = document.querySelector('.hidden-slide-main') as HTMLElement;
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        // console.log(position);
        // console.log(screenHeight);
        if (position < screenHeight) {
            element.classList.add('visible-slide-main');
            // console.log('visible-slide-main');
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
            <div className="container-slide-main">
                <div className="hidden-slide-main" style={{maxWidth: "800px", width: "100%", height: "400px", margin: "0 auto", aspectRatio: "10 / 2"}}>
                    <SlideCalc imageUrls={IMG} />
                </div> 
            </div>
        </>
    );
}

// export default SlideMain;