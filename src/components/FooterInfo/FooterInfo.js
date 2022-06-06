import { FooterShortLinks } from 'components/FooterInfo/FooterShortLinks'
import React from 'react'
import { FooterAboutUs } from './FooterAboutUs'

import './FooterInfo.scss'
import { FooterOurMission } from './FooterOurMission'

export const FooterInfo = () => {
    return (
        <>
            <FooterShortLinks></FooterShortLinks>
            <FooterOurMission></FooterOurMission>
            <FooterAboutUs></FooterAboutUs>
        </>
    )
}
