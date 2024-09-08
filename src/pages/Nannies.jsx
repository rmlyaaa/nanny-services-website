import CardList from "../components/CardList";
import Filter from "../components/Filter";

const Nannies = () => {
  return (
    <div className="container-fluid bg-lightgray">
      <div className="container-lg p-5 align-items-center ">
        <Filter />
        <CardList />
      </div>
    </div>
  );
};

export default Nannies;
