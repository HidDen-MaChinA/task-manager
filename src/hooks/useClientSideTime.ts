"use client"

export default function(){
    const now = new Date();
    return `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
}
