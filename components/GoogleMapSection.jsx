import Head from "next/head";

export default function GoogleMapSection() {
  return (
    <>
      {/* LocalBusiness schema markup for map */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lumitec Global",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Othman center, Ibn Khaldoun Street, mezzanine floor, office No M15",
                addressLocality: "Hawalli",
                addressRegion: "Al ‘Āşimah",
                postalCode: "4261",
                addressCountry: "KW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "29.3332", // update if you have precise data
                longitude: "48.0275", // update if you have precise data
              },
              telephone: "+96566612349",
              url: "https://www.lumi-tec.com",
            }),
          }}
        />
      </Head>

      <section
        className="w-full h-[400px] mt-10 m-0 p-0 bg-white overflow-hidden"
        aria-label="Lumitec Global Office Location Map"
      >
        <h2 className="sr-only">Our Location on Google Maps</h2>
        <iframe
          title="Lumitec Global Company LTG Kuwait Location"
          src="https://www.google.com/maps/embed?pb=!1m2!2m1!1sLumitec%20Global%20Company%20LTG%20Kuwait!3m1!1s0x3fcf9b9e9617fa1f:0xd317fe57798e6e80!5m2!1sen!2sin"
          className="w-full h-full border-0 block"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabIndex={0}
        />
      </section>
    </>
  );
}
