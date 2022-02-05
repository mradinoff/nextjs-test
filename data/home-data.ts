import Asparagus from "../docs/assets/asparagus.jpg";
import Breakfast from "../docs/assets/breakfast.jpg";
import Cocktail from "../docs/assets/cocktail.jpg";
import Fruit from "../docs/assets/fruit.jpg";
import Soil from "../docs/assets/soil.jpg";
import Seafood from "../docs/assets/seafood.jpg";

const homeData = {
  mosaicContent: {
    heading: "Answer your body's needs",
    copy:
      "The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.",
    subheading: "Be mindful",
    boldCopy:
      "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.",
    largeMedia: {
      alt: "",
      src: Soil.src
    },
    smallMedia: [
      {
        alt: "",
        src: Fruit.src
      },
      { alt: "", src: Asparagus.src }
    ]
  }
};

export default homeData;
