import { Component } from "react"
import { NavLink } from "react-router-dom"
export const Locations = () => {
    return (
        <div>
            This is the Locations Page
            <NavLink to="/contacts">Click</NavLink>
        </div>
    )
}

Component.displayName = "Locations"