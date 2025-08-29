'use client';

import React from 'react';
import Image from 'next/image';


const ProfileCard: React.FC = () => {

    const socialLinks = [
        {
            name: 'Email',
            href: 'mailto:alex.johnson@example.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            ),
            color: 'text-red-400 hover:text-red-300'
        },
        //TODO: Add more social links here
        {
            name: 'Instagram',
            href: 'https://instagram.com/baenktrbl',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.057-.06-4.123C19.833 2.245 17.818.227 14.183.06 13.057.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
                </svg>
            ),
            color: 'text-pink-400 hover:text-pink-300'
        },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-30">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Main Profile Card */}
            <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-center">

                    {/* Profile Section */}
                    <div className="mb-4">
                        {/* Avatar */}
                        <div className="w-36 h-36 mx-auto mb-2 relative">
                            {/* //TODO: Replace with actual profile picture */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl">
                                <Image
                                    src="/nicty.png"
                                    alt="Profile"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-ping opacity-20"></div>
                        </div>

                        {/* Name and Title */}
                        {/* //TODO: Replace with actual name and title */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                            GIVE US A SIGN
                        </h1>
                        <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm sm:text-base border border-blue-400/30  mb-1">
                            GHOSTBUSTER
                        </div>

                        {/* Contact Information */}
                        {/* //TODO: Replace with actual contact information */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm sm:text-base">Phasmophobiathailand@poltergiest.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm sm:text-base">+66 (098) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    {/* //TODO: Replace with actual bio */}
                    <div className="max-w-xl mb-2">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Phom Chob La Phee but Phom Chob Khun Mak kwa uwu ♥
                        </p>
                    </div>

                    {/* Social Links */}
                    {/* //TODO: Add more social links here */}
                    <div className="space-y-2 mb-4">
                        <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
                        <div className="flex justify-center space-x-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 bg-white/10 rounded-lg border border-white/20 hover:border-white/40 ${link.color} transition-all duration-300 transform hover:scale-110`}
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>

                            ))}
                        </div>
                    </div>

                    {/* Start Chatting Button */}
                    <div className="pt-4 border-t border-white/20 max-w-xl w-full">
                        <a
                            href="/chat"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 backdrop-blur-sm rounded-full text-white font-semibold text-sm sm:text-base border border-blue-400/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                        >
                            Start Chatting
                        </a>
                    </div>
                </div>
            </div>

            {/* Mark component directly embedded */}
            <div className="absolute bottom-0 left-0 right-0 py-4 z-[60]">
                <p className="text-center text-sm text-white opacity-90 bg-black/20 rounded-lg mx-4 py-2">
                    <a href="https://peamz4.in.th" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">peamz4</a> X BU OPENHOUSE 2025
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
