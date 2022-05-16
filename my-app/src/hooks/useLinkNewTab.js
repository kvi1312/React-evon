import React, { useEffect, useRef } from 'react';

const useLinkNewTab = () => {
   const ref = useRef();
   useEffect(()=>{
      const links = ref.current.querySelectorAll("a")
      console.log(links);
      links.forEach((item) =>{
         item.setAttribute("target", "_blank")
      })
   },[])
   return {
      ref
   }
};

export default useLinkNewTab;
