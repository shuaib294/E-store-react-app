import React from 'react'
import {services} from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section>
    <div className="mb-10">
    <h2 className="text-4xl text-center font-palanquin font-bold">Our <span className="text-coral-red">Services</span></h2>
    </div>
    <div className="max-container flex justify-center flex-wrap gap-9">
    {
      services.map((services) => (
        <ServiceCard key={services.label} {...services} />
      ))
    }
    </div>
    </section>
  )
}

export default Services
