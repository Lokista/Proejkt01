import { MenuIcon } from "@heroicons/react/outline"
import { useState } from "react"
import MenuObject from "./MenuObject"
import { ContextMenu } from "../Context"
import { useContext } from "react"

function Menu() {
    const { isClicked , setIsClicked } = useContext(ContextMenu)
    
    return(
        <div>
        <div className="flex lg:hidden p-2">
            <MenuIcon onClick={ e => setIsClicked(!isClicked)} className="h-6 w-6 cursor-pointer ">
            </MenuIcon>
        </div>

        </div>

    )
}
export default Menu