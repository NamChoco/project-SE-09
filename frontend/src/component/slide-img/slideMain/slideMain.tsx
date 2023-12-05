import img1 from "../../../assets/dog/siberian-husky-.jpg";
import img2 from "../../../assets/dog/si-jump-green1.jpg";
import img3 from "../../../assets/dog/si-jump-green2.jpg";
import img4 from "../../../assets/dog/siberian-husky_4217.jpg"
import img5 from "../../../assets/dog/GettyImages-1198704735-69e2d11cba434cb28a3c9e6caae9d128.jpg"
import { SlideCalc } from "./slideCalc";
const IMG = [img1,img2,img3,img4,img5];

export default function SlideMain() {
    return (
        <>
            <div className="hidden-tex" style={{maxWidth: "800px", width: "100%", height: "400px", margin: "0 auto", aspectRatio: "10 / 2"}}>
                <SlideCalc imageUrls={IMG} />
            </div> 
        </>
    );
}

// export default SlideMain;