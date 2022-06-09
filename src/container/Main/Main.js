import React from 'react'
import { Articles } from 'components/Articles/Articles'
import { ClientsPartners } from 'components/ClientsPartners/ClientsPartners'
import { Features } from 'components/Features/Features'
import { Slider } from 'components/Slider/Slider'

export const Main = () => {
    return (
        <>
            <main>
                <Slider />
                <Articles />
                <Features />
                <ClientsPartners />
            </main>
        </>
    )
}
