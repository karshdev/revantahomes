"use client"
import { useSession } from "next-auth/react";
import AdminDashboard from "./admin/page";
import UserLanding from "./UserLanding";

export default function Home() {
const{ data :session }=useSession()

  return (
    <>
   {session?.user?.role==="admin" && <AdminDashboard /> }
   {session?.user?.role==="user" && <UserLanding /> }
   </>
  )
}
