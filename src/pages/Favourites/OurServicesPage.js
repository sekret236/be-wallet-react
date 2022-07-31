import React from 'react'
import imageService1 from '../../assets/images/services1.jpg'
import imageService2 from '../../assets/images/services2.jpg'
import imageService3 from '../../assets/images/services3.jpg'
import './Services.scss'

export const OurServicesPage = () => {
    return (
        <section className="OurServicesPage">
            <div className="container">
                <div className="row OurServicesPage-block">
                    <div className="col-md-6 services">
                        <img src={imageService1} alt="" />
                    </div>
                    <div className="col-md-6 services-text">
                        <h4>
                            Vivamus in diam turpis. In condimentum maximus
                            tristique
                        </h4>
                        <p>
                            Maecenas non laoreet odio. Fusce lobortis porttitor
                            purus, vel vestibulum libero pharetra vel.
                            Pellentesque lorem augue, fermentum nec nibh et,
                            fringilla sollicitudin orci.
                        </p>

                        <p>
                            Integer pharetra magna non ante blandit lobortis.
                            Sed mollis consequat eleifend. Aliquam consectetur
                            orci eget dictum tristique. Aenean et sodales est,
                            ut vestibulum lorem.
                        </p>
                    </div>
                    <div className="col-md-6 services-text">
                        <h4>Mauris rhoncus orci in imperdiet placerat</h4>
                        <p>
                            Vestibulum euismod nisl suscipit ligula volutpat, a
                            feugiat urna maximus. Cras massa nibh, tincidunt ut
                            eros a, vulputate consequat odio. Vestibulum
                            vehicula tempor nulla.
                        </p>
                        <p>
                            Sed hendrerit urna interdum in. Donec et nibh
                            maximus, congue est eu, mattis nunc. Praesent ut
                            quam quis quam venenatis fringilla. Morbi vestibulum
                            id tellus commodo mattis. Aliquam erat volutpat.
                            Aenean accumsan id mi nec semper.
                        </p>
                    </div>
                    <div className="col-md-6 services">
                        <img src={imageService2} alt="" />
                    </div>
                    <div className="col-md-6 services">
                        <img src={imageService3} alt="" />
                    </div>
                    <div className="col-md-6 services-text">
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                        </h4>
                        <p>
                            Nulla mauris dolor, gravida a varius blandit, auctor
                            eget purus. Phasellus scelerisque sapien sit amet
                            mauris laoreet, eget scelerisque nunc cursus. Duis
                            ultricies malesuada leo vel aliquet. Curabitur
                            rutrum porta dui eget mollis.
                        </p>
                        <p>
                            Nullam lacinia dictum auctor. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per
                            inceptos himenaeos. Orci varius natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus
                            mus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
