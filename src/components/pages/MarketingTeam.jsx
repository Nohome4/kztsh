import { useState, useEffect } from "react";
import LeftMenu from "../../UI/LeftMenu";
import { CONTACTS_ROUTES } from "../../utils/consts";
import MainReturnButton from "../../UI/MainReturnButton";
import { fetchMarketingContacts } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";
import { titleName } from "../../store/routes";
import MarketingTable from "../../UI/MarketingTable";
import "../../styles/Management.css";
const MarketingTeam = () => {
  const [marketingContacts, setMarketingContacts] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Отдел маркетинга" + titleName;
    setLoad(true);
    fetchMarketingContacts().then((data) => {
      setLoad(false);
      if (data.error) {
        setError(data.error);
      } else {
        setMarketingContacts(data.sort((a, b) => a.id - b.id));
      }
    });
  }, []);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      <h2 className="header-h2">Отдел маркетинга</h2>
      <MainReturnButton />
      <div className="management">
        <LeftMenu arr={CONTACTS_ROUTES} />
        {load ? (
          <Loader />
        ) : (
          <div className="management-content">
            <MarketingTable contactsList={marketingContacts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketingTeam;
