import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MainReturnButton from "../../UI/MainReturnButton";
import LeftMenu from "../../UI/LeftMenu";
import "../../styles/ProductPage.css";
import { Link } from "react-router-dom";
import { fetchItems } from "../../http/allApi";
import ErrorMessage from "../../UI/Error";
import Loader from "../../UI/Loader";

const ProductPage = () => {
  const { productId } = useParams();
  const [localItems, setLocalItems] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedItemsData = localStorage.getItem("items");
    if (cachedItemsData) {
      setLocalItems(JSON.parse(cachedItemsData));
    } else {
      setLoad(true);
      fetchItems()
        .then((data) => {
          setLoad(false);
          if (data.error) {
            setError(data.error);
          } else {
            setLocalItems(data);
            localStorage.setItem("items", JSON.stringify(data));
          }
        })
        .catch((error) => {
          setLoad(false);
          setError(error.message);
        });
    }
  }, [productId]);

  if (!localItems.length) {
    return <ErrorMessage message="Нет доступных продуктов." />;
  }

  const itemsLeftMenu = localItems.map((el) => ({
    name: el.title,
    path: `/products/${el.id}`,
  }));

  const product = localItems.find(
    (product) => product.id === Number(productId)
  );
  if (!product) {
    return <ErrorMessage message="Продукт не найден." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <h2 className="header-h2">{product.title}</h2>
      <MainReturnButton />
      <div className="product-page">
        <LeftMenu arr={itemsLeftMenu} />
        {load ? (
          <Loader />
        ) : (
          <div className="product-page-content">
            {product.categories ? (
              product.categories.map((category) => (
                <div className="product-page-card" key={category.id}>
                  <img
                    className="product-page-card-img"
                    src={process.env.REACT_APP_API_URL + category.images[0]}
                    alt={category.name}
                  />
                  <div className="product-page-card-text">
                    <Link to={`/products/${product.id}/${category.id}`}>
                      <h3>{category.name}</h3>
                    </Link>
                    <hr />
                    <p>{category.description}</p>
                    {category.characteristics &&
                      category.characteristics.map((el) => (
                        <div
                          className="product-page-card-characteristics-wrapper"
                          key={el.id}
                        >
                          <p className="product-page-card-characteristics">
                            {el.name} - {el.value}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              <div>Такой категории не существует</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
