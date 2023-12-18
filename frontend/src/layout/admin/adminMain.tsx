import MenuAdmin from "../../component/account-menu/menuAdmin";
import NavbarAdmin from "../../component/navbar/navbarAdmin";
import Main from "../../page/main";


function AdminMain(){
    return (
        <>
            <div>
                <NavbarAdmin />
                <Main />
            </div>
        </>
    )
}
export default AdminMain