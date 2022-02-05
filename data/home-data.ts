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
  },
  latestNews: {
    heading: "All the latest from AEG",
    items: [
      {
        heading: "Summer Lunch Menu By Mark Best",
        copy:
          "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
        link: "/",
        image: {
          src: Seafood.src,
          alt: ""
        }
      },
      {
        heading: "A Traditional Christmas Eve, Mark Best Style",
        copy:
          "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
        link: "/",
        image: {
          src: Cocktail.src,
          alt: ""
        }
      },
      {
        heading: "Taking taste further",
        copy:
          "This exclusive cookbook gives you all the know‑how you need. We’ve designed it to make sure you get the most out of our products – and the best out of your food.",
        link: "/",
        image: {
          src: Breakfast.src,
          alt: ""
        }
      }
    ]
  }
};

export default homeData;
