import Meraloginkafooter from "@/components/meraloginka footer/meraloginkafooter"
import Meraloginkaheader from "@/components/meraloginkaheader/meraloginkaheader"
import { Main } from "next/document"
export default({children})=>{

  return <div>
<Meraloginkaheader></Meraloginkaheader>
<main>
          {children}
          </main>
          <Meraloginkafooter></Meraloginkafooter>
      
  </div>

}