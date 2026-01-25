import React, { useEffect, useState } from 'react';
import { getServices } from '../services/api';

const HomePage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch from ServiceController.java
        getServices()
            .then(res => setServices(res.data))
            .catch(err => console.error("Is Spring Boot running on 8080?", err));
    }, []);

    // Helper to pick the right icon based on your backend string
    const getIconClass = (name) => {
        const lower = name.toLowerCase();
        if (lower.includes('electrician')) return 'fa-bolt';
        if (lower.includes('plumber')) return 'fa-faucet';
        if (lower.includes('carpenter')) return 'fa-hammer';
        if (lower.includes('ac') || lower.includes('appliance')) return 'fa-snowflake';
        if (lower.includes('cleaning')) return 'fa-broom';
        if (lower.includes('painting')) return 'fa-paint-roller';
        return 'fa-tools';
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT SIDE: DYNAMIC SERVICES */}
            <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                    Home services at your <br /> doorstep
                </h2>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <p className="text-lg font-semibold mb-6 text-gray-800">What are you looking for?</p>
                    
                    <div className="grid grid-cols-3 gap-6 text-center">
                        {services.map((service, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="bg-blue-50 rounded-xl p-4 mb-2 group-hover:bg-blue-100 transition duration-300">
                                    <i className={`fas ${getIconClass(service)} text-3xl text-blue-600`}></i>
                                </div>
                                <p className="text-[11px] font-bold text-gray-700 uppercase tracking-tight leading-tight">
                                    {service}
                                </p>
                            </div>
                        ))}

                        {/* STATIC NEW ITEM */}
                        <div className="group cursor-pointer relative">
                            <span className="absolute -top-2 right-0 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">NEW</span>
                            <div className="bg-blue-50 rounded-xl p-4 mb-2 group-hover:bg-blue-100 transition duration-300">
                                <i className="fas fa-clock text-3xl text-blue-600"></i>
                            </div>
                            <p className="text-[11px] font-bold text-gray-700 uppercase">InstaHelp</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: IMAGE GALLERY (Matching your layout) */}
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695ce6952?auto=format&fit=crop&w=600" alt="Cleaning" className="rounded-2xl h-80 w-full object-cover shadow-md" />
                </div>
                <div className="col-span-1 space-y-4">
                    <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600" alt="Repair" className="rounded-2xl h-36 w-full object-cover shadow-md" />
                    <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=600" alt="AC Service" className="rounded-2xl h-[160px] w-full object-cover shadow-md" />
                </div>
                <div className="col-span-2">
                     <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200" alt="Kitchen" className="rounded-2xl h-48 w-full object-cover shadow-md" />
                </div>
            </div>
        </main>
    );
};

export default HomePage;