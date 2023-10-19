import { redirect } from "next/navigation";
import AdminNavbar from "../../../components/AdminNavbar";


const AdminDashboard = () => {
  redirect("/admin/leads");

  return (
    <>
    <AdminNavbar />
    AdminDashboard
    </>
   
   
  );
};

export default AdminDashboard;

