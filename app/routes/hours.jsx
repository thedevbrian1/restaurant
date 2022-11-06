export default function Hours() {
    // Orange gradient : bg-gradient-to-r from-[#f46b45] to-[#eea849]
    return (
        <main className=" text-a11y-2 bg-a11y-1">
            <section className="w-full h-[25vh] grid place-items-center">
                <h1 className="font-bold font-heading text-3xl lg:text-4xl">
                    Hours &amp; Location
                </h1>
            </section>
            <section className="w-4/5 lg:max-w-4xl mx-auto space-y-5 py-4 lg:py-10">
                <h2 className="text-lg lg:text-2xl font-semibold font-heading text-center">Working hours</h2>
                <p className="text-center">We are open during the following hours:</p>
                <div>
                    <h3 className="font-semibold text-center">Monday - Friday</h3>
                    <p className="text-center">
                        <time dateTime="7:00">7:00 A.M</time>
                        &nbsp;-&nbsp;
                        <time dateTime="22:00">10:00 P.M</time>
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-center">Saturdays &amp; Sundays</h3>
                    <p className="text-center">
                        <time dateTime="9:00">9:00 A.M</time>
                        &nbsp;-&nbsp;
                        <time dateTime="22:00">10:00 P.M</time>
                    </p>
                </div>
            </section>
            <section className="w-4/5 lg:max-w-4xl mx-auto space-y-5 py-4 lg:py-12">
                <h2 className="text-lg lg:text-2xl font-semibold font-heading text-center">Location</h2>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <div className="aspect-w-1 aspect-h-1 lg:w-[500px]">
                                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=KICC%20Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} className="w-full h-full"
                                />
                            </div>
                            <br />
                            <style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;}" }} />
                            <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;}" }} />
                        </div>
                    </div>
                    <div className="lg:mt-10 flex justify-center lg:justify-start">
                        {/* <p >Restaurant KE</p> */}
                        <p className="font-semibold">Nairobi CBD <br /> KICC 7th floor </p>
                        {/* <p>KICC 7th floor</p> */}
                    </div>
                </div>
            </section>
        </main>
    );
}