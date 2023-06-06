import { useCallback } from "react";
import "./task2.css";
const Task2 = () => {
  const onAbtnWeekendContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection2Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAbtnTravelContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection3Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAbtnResortContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection4Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAbtnRegistryContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection5Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAup2ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection1Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAdown2ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection3Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAup3ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection2Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAdown3ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection4Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAbtnTrailsContainerClick = useCallback(() => {
    window.open("https://imgur.com/a/mvCuH6t");
  }, []);

  const onAbtnPropertyContainerClick = useCallback(() => {
    window.open("https://imgur.com/a/2TSATsT");
  }, []);

  const onAup4ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection3Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAdown4ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection5Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAbtnHoneyfundContainerClick = useCallback(() => {
    window.open("https://www.honeyfund.com/give-a-gift");
  }, []);

  const onAup5ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection4Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAdown5ImageClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divsection1Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="task-2">
      <div className="main">
        <img className="divclouds-icon" alt="" src="/divclouds@2x.png" />
        <div className="divcontainer">
          <div className="divsection1" data-scroll-to="divsection1Container">
            <img className="div-icon" alt="" src="/div@2x.png" />
            <div className="divlunaplane">
              <div
                className="abtn-weekend"
                onClick={onAbtnWeekendContainerClick}
              >
                <div className="weekend">Weekend</div>
              </div>
              <div className="abtn-travel" onClick={onAbtnTravelContainerClick}>
                <div className="travel">Travel</div>
              </div>
              <div className="abtn-resort" onClick={onAbtnResortContainerClick}>
                <div className="resort">Resort</div>
              </div>
              <div
                className="abtn-registry"
                onClick={onAbtnRegistryContainerClick}
              >
                <div className="registry">Registry</div>
              </div>
            </div>
            <img
              className="datelocationpng-icon"
              alt=""
              src="/datelocationpng@2x.png"
            />
          </div>
          <div className="divsection2" data-scroll-to="divsection2Container">
            <img className="divjoinus-icon" alt="" src="/divjoinus@2x.png" />
            <img
              className="cupcakespng-icon"
              alt=""
              src="/cupcakespng@2x.png"
            />
            <div className="divnav2">
              <img
                className="aup2-icon"
                alt=""
                src="/aup2@2x.png"
                onClick={onAup2ImageClick}
              />
              <img
                className="adown2-icon"
                alt=""
                src="/adown2@2x.png"
                onClick={onAdown2ImageClick}
              />
            </div>
          </div>
          <div className="divsection3" data-scroll-to="divsection3Container">
            <img
              className="divtravelinfo-icon"
              alt=""
              src="/divtravelinfo@2x.png"
            />
            <img
              className="bunnyballoonpng-icon"
              alt=""
              src="/bunnyballoonpng@2x.png"
            />
            <div className="divnav3">
              <img
                className="aup2-icon"
                alt=""
                src="/aup2@2x.png"
                onClick={onAup3ImageClick}
              />
              <img
                className="adown2-icon"
                alt=""
                src="/adown2@2x.png"
                onClick={onAdown3ImageClick}
              />
            </div>
          </div>
          <div className="divsection4" data-scroll-to="divsection4Container">
            <div className="divhsresort">
              <div className="abtn-trails" onClick={onAbtnTrailsContainerClick}>
                <div className="view-hiking-trails">View Hiking Trails</div>
              </div>
              <div
                className="abtn-property"
                onClick={onAbtnPropertyContainerClick}
              >
                <div className="view-property-map">View Property Map</div>
              </div>
            </div>
            <img
              className="rocketpigpng-icon"
              alt=""
              src="/rocketpigpng@2x.png"
            />
            <div className="divnav4">
              <img
                className="aup2-icon"
                alt=""
                src="/aup2@2x.png"
                onClick={onAup4ImageClick}
              />
              <img
                className="adown2-icon"
                alt=""
                src="/adown2@2x.png"
                onClick={onAdown4ImageClick}
              />
            </div>
          </div>
          <div className="divsection5" data-scroll-to="divsection5Container">
            <div className="divregistry">
              <div
                className="abtn-honeyfund"
                onClick={onAbtnHoneyfundContainerClick}
              >
                <div className="honeyfund">Honeyfund</div>
              </div>
            </div>
            <div className="divnav5">
              <img
                className="aup2-icon"
                alt=""
                src="/aup2@2x.png"
                onClick={onAup5ImageClick}
              />
              <img
                className="adown2-icon"
                alt=""
                src="/adown5@2x.png"
                onClick={onAdown5ImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
