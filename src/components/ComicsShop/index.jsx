import { ComicsShopTitle, ComicsShopContainer, ComicsShopping } from "./styles";
import P from "prop-types";
import { Card } from "../Card";

export const ComicsShop = ({ comics }) => {
  return (
    <ComicsShopContainer>
      <ComicsShopTitle>Nossas comics</ComicsShopTitle>
      <ComicsShopping>
        {comics.map((comic) => {
          const { id, title, prices, thumbnail } = comic;
          return (
            <Card
              key={id}
              id={id}
              extension={thumbnail.extension}
              title={title}
              image={thumbnail.path}
              price={prices[0].price}
              comic={comic}
            />
          );
        })}
      </ComicsShopping>

      <span id="sentinela" className="sentinela">Carregando mais...</span>
      
    </ComicsShopContainer>
  );
};

ComicsShop.propTypes = {
  comics: P.array.isRequired,
};
