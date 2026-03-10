"use client"

import { OFFICES, SHOWROOMS } from "@/config/contact.config";
import ContactForm from "./ContactForm";
import LocationsSection from "./LocationsSection";
import { useRef } from "react";
import MapSection from "@/shared/components/common/MapSection";



export default function ContactPage() {
  const mapRef = useRef<HTMLIFrameElement | null>(null);
  return (
    <>
      <MapSection ref={mapRef} />
      <LocationsSection type="office" items={OFFICES} mapRef={mapRef} />
      <LocationsSection type="showroom" items={SHOWROOMS} mapRef={mapRef} />
      <ContactForm />
    </>
  )
}
