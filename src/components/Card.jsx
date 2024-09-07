const Card = ({ nanny }) => {
  return (
    <div className="row bg-white rounded-4">
      <img
        src={nanny.avatar_url}
        alt="nanny-photo"
        className="img-thubnail col-2"
      />
      <div className="col-10">
        <h4>{nanny.name}</h4>
        <ul>
          <li className="bg-lightgray">
            Age: <span className="text-black"> </span>
          </li>
          <li className="bg-lightgray">
            Experience: <span className="text-black"> {nanny.experience} </span>
          </li>
          <li className="bg-lightgray">
            Kids Age: <span className="text-black"> {nanny.kids_age} </span>
          </li>
          <li className="bg-lightgray">
            Characters: <span className="text-black"> {nanny.characters} </span>
          </li>
          <li className="bg-lightgray">
            Education: <span className="text-black"> {nanny.education} </span>
          </li>
        </ul>
        <p className="text-midgray">{nanny.about}</p>
      </div>
    </div>
  );
};

export default Card;
