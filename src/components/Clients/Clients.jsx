import clientDatabiz from "../../images/client-databiz.svg";
import clientAudiophile from "../../images/client-audiophile.svg";
import clientMeet from "../../images/client-meet.svg";
import clientMaker from "../../images/client-maker.svg";

import "./Clients.scss";

const clients = [clientDatabiz, clientAudiophile, clientMeet, clientMaker];

const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <div className="clients-row">
          {clients.map((client, index) => (
            <img key={index} src={client} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
