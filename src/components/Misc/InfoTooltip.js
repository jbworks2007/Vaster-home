import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AiFillInfoCircle } from 'react-icons/ai';

const InfoTooltip = ({ tooltipText }) => {
  return (
    <OverlayTrigger
      key="top"
      placement="top"
      overlay={<Tooltip id="tooltip-top">{tooltipText}</Tooltip>}
    >
      <div>
        <AiFillInfoCircle
          size={20}
          style={{ color: "#979A98" }}
          role="button"
        />
      </div>
    </OverlayTrigger>
  );
};

export default InfoTooltip;