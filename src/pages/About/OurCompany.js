import React from 'react'

//import { useSpring, animated } from 'react-spring'

export const OurCompany = () => {
    //const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
        <section className="ourCompany">
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-12">
                        <animated.div style={props}>Our Company</animated.div>
                    </div> */}
                    <div className="col-md-12">
                        <h2 className="h2">Our Company</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
