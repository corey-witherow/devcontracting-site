import CSS from "csstype";
import Image from "next/image";
import FeatImage01 from "@/public/images/dotnet.png";

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
              <div className="grid gap-20">
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        Who We Are
                      </div>
                      <p className="text-xl text-gray-400 mb-4">
                        At DevContracting, we’re passionate about helping
                        businesses grow through custom software development.
                        Founded with a clear mission, our goal is to deliver
                        high-quality, scalable applications and websites that
                        empower companies to achieve their goals. With years of
                        experience in the software industry, we understand that
                        technology is more than just code—it’s a tool to drive
                        your business forward. Our team is dedicated to
                        understanding your unique challenges and crafting
                        tailored solutions that fit your needs. Whether you’re
                        looking to build a new application, improve an existing
                        system, or develop a robust website, we have the
                        expertise to make it happen. We take pride in our
                        ability to turn ideas into reality, ensuring each
                        project is designed to not only meet your immediate
                        objectives but to set you up for long-term success. From
                        the initial concept to final delivery and beyond, we’re
                        with you every step of the way. Let’s work together to
                        bring your vision to life and take your business to the
                        next level.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Content */}
                  <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12"
                    data-aos="fade-right"
                  >
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        Our Mission
                      </div>
                      <p className="text-xl text-gray-400 mb-4">
                        At DevContracting, our mission is to empower businesses,
                        big or small, through innovative and customized software
                        solutions. We strive to deliver high-quality
                        applications and websites that not only meet the needs
                        of today but also lay the foundation for future growth.
                        By focusing on collaboration, technical excellence, and
                        long-term value, we aim to help our clients succeed in
                        an ever-evolving digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
