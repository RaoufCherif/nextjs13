import React from 'react'

import type { PropsWithChildren } from "react";

export const LayoutBoar = ({ 
    params,
    children
  }:  PropsWithChildren<{ 
    params: { boardId: string};

}>)  => {
    
  return (
   <div>
    {params.boardId}
    {children}
    <h2>je suis le lauout</h2>
   </div>
  )
}


export default LayoutBoar