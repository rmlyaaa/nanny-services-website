import moment from "moment";

const Card = ({ nanny }) => {
  const age = moment().diff(nanny.birthday, "years");

  return (
    <div className="mt-3 p-3 row bg-white rounded-4">
      <img
        src={nanny.avatar_url}
        alt="nanny-photo"
        className="img col-2 rounded"
      />
      <div className="col-10">
        <h4>{nanny.name}</h4>
        <ul className="list-group list-unstyled list-group-horizontal gap-2">
          <li className="p-2 bg-lightgray text-midgray rounded-4">
            Age: <span className="text-black"> {age} </span>
          </li>
          <li className="p-2 bg-lightgray text-midgray rounded-4">
            Experience:
            <span className="text-black "> {nanny.experience} </span>
          </li>
          <li className="p-2 bg-lightgray text-midgray rounded-4">
            Kids Age: <span className="text-black"> {nanny.kids_age} </span>
          </li>
          <li className="p-2 bg-lightgray text-midgray rounded-4">
            Characters:{" "}
            <span className="text-black"> {nanny.characters.join(", ")} </span>
          </li>
          <li className="p-2 bg-lightgray text-midgray rounded-4">
            Education: <span className="text-black"> {nanny.education} </span>
          </li>
        </ul>
        <p className="mt-3 text-midgray">{nanny.about}</p>
      </div>
    </div>
  );
};

export default Card;
