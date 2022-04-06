import React from "react";

export const VTView = (props) => {
  const { id, name, bedInfo, nights, stayStart } = props.hotel;

  return (
    // hotel contains one hotel.
    // hotel.id
    // hotel.name
    // hotel.bedInfo
    // hotel.nights
    // hotel.stayStart

    // need still
    // hotel.price!
    // hotel.shortName
    // hotel.address
    // hotel.topAmenities
    <div className="vt-view">
      <div className="ui grid two wide">
        <div className="ui column">
          <div className="a">
            <div>Name</div>
            <div>Address</div>
            <div>Link</div>
          </div>
        </div>
        <div className="ui column">
          <div className="b">
            <div>Chain</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VTView;
