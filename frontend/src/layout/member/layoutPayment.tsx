import NavbarMember from "../../component/navbar/navbarMember";
import Payment from "../../page/member/Payment/Payment";
import Footer from "../../component/footer/footer";

export default function LayoutPayment() {
    return (
        <>
            <NavbarMember/>
            <Payment/>
            <Footer/>
        </>
    );
}