import React from 'react'

export const MapPage = () => {
    return (
        <div className="col-md-6 map">
            <iframe title="Our contacts"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164153.23443639991!2d36.2858247!3d49.99459135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0LrRltCyLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LA!5e0!3m2!1suk!2spl!4v1655897363022!5m2!1suk!2spl" 
                width={600}
                height={450}
                style={{border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}
