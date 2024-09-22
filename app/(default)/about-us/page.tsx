import CSS from "csstype";

export default function AboutUs() {
  const headerStyle: CSS.Properties = {
    color: "rgb(93 93 255 / var(--tw-text-opacity))",
    WebkitTextStroke: "1px #fff",
    fontFamily: "Roboto Slab,sans-serif",
  };

  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="relative pb-10">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h1 className="h1 mb-4" style={headerStyle} data-aos="fade-up">
                  About Us
                </h1>
              </div>
              <div>
                <p>
                  At DevContracting, we are different than your regular
                  contractors. We are dedicated to developing code that is up to
                  date, maintainable, and easy to read. We pride ourselves on
                  the code we produce and will make sure you do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
