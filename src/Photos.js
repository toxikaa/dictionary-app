import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photo.src.original}
                    target="_blank"
                    className="shadow-sm"
                  >
                    <img src={photo.src.tiny} className="img-fluid shadow-sm" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
