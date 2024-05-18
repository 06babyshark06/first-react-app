import { useState } from "react";
import ButtonBase from "../common/ButtonBase";
import "boxicons";
const fakeList = [
  {
    id: 1,
    name: {
      fullName: "Bugatti Chiron Super Sport",
      briefName: "Bugatti Chiron Super",
    },
    img: "https://www.topgear.com/sites/default/files/2021/12/1.%20Bugatti%20Chiron.jpeg?w=848&h=477",
    price: "2.4m",
    rating: 5,
    description: "the world's fastest production car",
  },
  {
    id: 2,
    name: {
      fullName: "Rimac Nevera",
      briefName: "Rimac",
    },
    img: "https://www.topgear.com/sites/default/files/2021/12/2.%20rimacnevera-26_0.jpeg?w=848&h=477",
    price: "2.4m",
    rating: 4,
    description:
      "The Nevera is astonishingly fast. Fast in a way that's tricky to put into words, either while you're sitting in it trying to process what the hell is happening to your mind, body and soul when you nail the throttle, or a few days later writing about it,” wrote Jason Barlow when he got the call to test drive the Rimac Nevera in Croatia last year.",
  },
  {
    id: 3,
    name: {
      fullName: "Pininfarina Battista",
      briefName: "Pininfarina",
    },
    img: "https://www.topgear.com/sites/default/files/2021/12/3.%20Pininfarina%20Battista.jpeg?w=848&h=477",
    price: "2.4m",
    rating: 3,
    description:
      "Meet the sister car to the Rimac Nevera. It's based around the same powertrain technology, electrical architecture and carbon core",
  },
  {
    id: 4,
    name: {
      fullName: "Lamborghini Sián",
      briefName: "Lamborghini",
    },
    img: "https://www.topgear.com/sites/default/files/2021/12/4.%20Lamborghini%20Sian.jpeg?w=848&h=477",
    price: "2.4m",
    rating: 2,
    description:
      "features a tuned version of the Aventador SVJ's 6.5-litre, naturally aspirated V12, with another 34bhp of electrical oomph",
  },
  {
    id: 5,
    name: {
      fullName: "Ferrari 812 Competizione",
      briefName: "Ferrari",
    },
    img: "https://www.topgear.com/sites/default/files/2021/12/5.%20Ferrari%20812.jpeg?w=848&h=477",
    price: "2.4m",
    rating: 1,
    description:
      "The 812 features a naturally aspirated V12 - no electric gubbins or turbos in sight - but it's also quite possibly the last we'll ever see. ",
  },
];
const ProductListView = () => {
  const [products, setProducts] = useState(fakeList);
  const addNewProduct = () => {
    const updatedProduct = [
      ...products,
      {
        id: products.length + 1,
        name: {
          fullName: `New car ${products.length + 1}`,
          briefName: `Car ${products.length + 1}`,
        },
        img: "https://cdn.gianhangvn.com/image/maybach-s680-bv-anh1-o056s3a.jpg",
        price: "2.4m",
        rating: 6,
        description: "Maybach s680",
      },
    ];
    setProducts(updatedProduct);
  };
  const removeAProduct = (id) => {
    const updatedProduct = products.filter(p => p.id !== id);
    setProducts(updatedProduct);
  };
  const updateName = (id) => {
    const updatedProduct = products.map((product) => {
      if (product.id === id) {
        return {...product, name: {...product.name, briefName: "Changed"}};
      }
      return product;
    })
    setProducts(updatedProduct);
  };
  const updateStars = (num) => {
    const rating = [];
    for (let i = 0; i < num; i++) {
      rating.push(<box-icon type="solid" name="star"></box-icon>);
    }
    return rating;
  };

  return (
    <>
      <ButtonBase text="Add new product" onClick={addNewProduct} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <h3>
                {product.name.fullName}
              </h3>
              <span>{product.name.briefName}</span>
              <p>{product.description}</p>
              <label>{updateStars(product.rating)}</label>
              <span>&#8364;{product.price}</span>
              <ButtonBase text="Remove" onClick={()=>removeAProduct(product.id)}/>
              <ButtonBase text="Change product's name" onClick={()=>updateName(product.id)}/>
            </div>
            <img src={product.img} alt="Nice car" />
          </li>
        ))}
      </ul>
    </>
  );
};
// & #8364
export default ProductListView;
