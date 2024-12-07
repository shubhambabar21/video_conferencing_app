import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"


export default function Home(){
  return (
    <div>
<Link className={buttonVariants({ variant: "outline" })} href={""}>Click here</Link>

    </div>
  )
}