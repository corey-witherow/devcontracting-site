import CSS from "csstype";

export default function Features() {
  const purplebg: CSS.Properties = {
    backgroundColor: "rgb(93 93 255)",
    borderRadius: "50%",
    width: "64px",
    height: "64px",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: "25px",
  };
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Have a project that needs done, but don't need a full-time
              Developer?
            </h2>
            <p className="text-xl text-gray-400">
              Find out how our contracting can fit into your plan.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <i className="fa-solid fa-code" style={purplebg}></i>
              <h4 className="h4 mb-2">Development</h4>
              <p className="text-lg text-gray-400 text-center">
                Need a little more help, but don't want to hire a full-time
                employee. We can help designing, developing, and testing
                software to meet your companies goal.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <i className="fa-solid fa-chalkboard-user " style={purplebg}></i>
              <h4 className="h4 mb-2">Consulting</h4>
              <p className="text-lg text-gray-400 text-center">
                You have a great idea for an application, but need some help
                making it come to light? We can assist with planning and picking
                a route to follow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
