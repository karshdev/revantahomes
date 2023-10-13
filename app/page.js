"use client"
import { useSession } from "next-auth/react";
import AdminDashboard from "./admin/page";
import UserLanding from "./UserLanding";

export default function Home() {
const{ data :session }=useSession()
if(!session){
  return  <UserLanding />
}
  return (
    <>
   {session?.user?.role==="admin" ? <AdminDashboard /> : <UserLanding /> }
   </>
  )
}
