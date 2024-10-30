"use client";
import Card from "@/components/card/card";
import { ads } from "../data";
import { useSearchParams } from "next/navigation";

export default()=>{

    // URL
    // /search?name=ali&city=fsd&uni=gc

    // name,city aur uni waley query params ko pick krne 
    // keliye useSearchParams() use krna parega

    let params = useSearchParams();
    let searchText = params.get('q').toLowerCase();

    return <div className="card-container">    
    {
     ads.filter((ad)=>{
        if(ad.name.toLowerCase().includes(searchText)){
            return true;
        }
     }).map((a2)=>{
       return <Card meraAd={a2}></Card>
     })
    }

   </div>

}