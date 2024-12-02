import React from "react";
interface CardProps {
  title: string;
  //   content: string;
  children: React.ReactNode;
  footerText?: string;
}
const Card = ({ title, children, footerText }: CardProps) => {
  return (
    <>
      <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="card text-center border-secondary">
            <div className="card-header">
              <h3>{title}</h3>
            </div>
            <div className="card-body">
              <p className="card-text">{children}</p>
            </div>
            {footerText && (
              <div className="card-footer text-body-secondary">
                {footerText}
              </div>
            )}
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
};

export default Card;
