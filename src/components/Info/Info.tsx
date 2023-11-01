import { XMark } from "../../assets/";
import "./info.css";
import { usePointContext } from "../../contexts/pointContext";
import { keys } from "../../constants";
import { femaleProfile, maleProfile } from "../../assets/";

const Info = () => {
  const { activePoint, toggleInfo, setToggleInfo } = usePointContext();

  const handleClick = (status: boolean) => {
    setToggleInfo(status);
  };

  return (
    <article className={`info ${toggleInfo ? "info-visible" : ""}`}>
      <XMark classValue="info-search-icon" handleClick={handleClick} />

      <div className="content">
        <h1
          style={{
            color: keys?.filter((key) => key?.title === activePoint?.key)[0]
              ?.color,
          }}
        >
          {activePoint.title}
        </h1>

        {activePoint.subtitle && <h4>{activePoint.subtitle}</h4>}

        {activePoint.openingHours && (
          <p>
            Office:<span> {activePoint?.office}</span>
            Hours:
            {activePoint?.openingHours && (
              <span>
                {activePoint.openingHours[0]} - {activePoint.openingHours[1]}
              </span>
            )}
            Phone:
            {activePoint?.phoneNumber && (
              <span>
                ({activePoint.countryCode}) {activePoint.phoneNumber}
              </span>
            )}
          </p>
        )}

        <div className="person-info">
          {activePoint.gender && (
            <img
              width={150}
              height={150}
              src={activePoint.gender === "male" ? maleProfile : femaleProfile}
              alt={
                activePoint.gender === "male"
                  ? "male-image-profile"
                  : "female-image-profile"
              }
            />
          )}
          {activePoint.description && (
            <p className="description">{activePoint.description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export default Info;
