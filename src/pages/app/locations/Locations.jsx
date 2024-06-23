import LocationsList from "../../../components/Cards/location-card/LocationsList"
import styles from './Locations.module.css'
import { Component } from "react"

export const Locations = () => {
    return (
        <div className={styles.locationspage}>
            <section id='locationslist-section'>
                <LocationsList />
            </section>
        </div>
    )
}

Component.displayName = "Locations"