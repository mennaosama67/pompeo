import React ,{createContext,useState,useEffect}from 'react'
export const DataContext=createContext();

export const DataProvider=(props)=> {
  const [products,setProducts]=useState([
    {
      id: 1,
      name: "Blue Plate",
      price: 65.00,
      image: "../../images/plates/img_1.png",
      category: "plates",
      amount:1
    },
    {
      id: 2,
      name: "White Potterys",
      price: 115.00,
      image: "../../images/vases/img_8.png",
      category: "vases",
      amount:1
    },
    {
      id: 3,
      name: "Wine Pottery",
      price:95.00,
      image: "../../images/vases/img_9.png",
      category: "vases",
      amount:1
    },
    {
      id: 4,
      name: "Gray Cup",
      price:55.00,
      image: "../../images/mugs/img_4.png",
      category: "mugs",
      amount:1
    },
    {
      id: 5,
      name: "Red Platte",
      price:117.00,
      image: "../../images/plates/img_2.png",
      category: "plates",
      amount:1
    },
    {
      id: 6,
      name: "Marpile Pottery",
      price: 90.00,
      image: "../../images/vases/img_1.png",
      category: "vases",
      amount:1
    },
    {
      id: 7,
      name: "White Cup",
      price: 45.00,
      image: "../../images/mugs/img_1.png",
      category: "mugs",
      amount:1
    },
    {
      id: 8,
      name: "Decor Plate",
      price:80.00,
      image: "../../images/plates/img_3.png",
      category: "plates",
      amount:1
    },
    {
      id: 9,
      name: "Mint Pottery",
      price: 93.00,
      image: "../../images/vases/img_2.png",
      category: "vases",
      amount:1
    },
    {
      id: 10,
      name: "Set Of Potterys",
      price: 125.00,
      image: "../../images/vases/img_10.png",
      category: "vases",
      amount:1
    },
    {
      id: 11,
      name: "Orange Ceramic",
      price:50.00,
      image: "../../images/vases/img_5.png",
      category: "vases",
      amount:1
    },
    {
      id: 12,
      name: "Dark Bowl",
      price:82.00,
      image: "../../images/mugs/img_2.png",
      category: "mugs",
      amount:1
    },
    {
      id: 13,
      name: "Square Pottery",
      price: 75.00,
      image: "../../images/vases/img_3.png",
      category: "vases",
      amount:1
    },
    {
      id: 14,
      name: "Torquers Vaze",
      price: 112.00,
      image: "../../images/vases/img_11.png",
      category: "vases",
      amount:1
    },
    {
      id: 15,
      name: "Black Pottery",
      price: 54.00,
      image: "../../images/vases/img_12.png",
      category: "vases",
      amount:1
    },
    {
      id: 16,
      name: "Silver pottery",
      price:100.00,
      image: "../../images/vases/img_13.png",
      category: "vases",
      amount:1
    },
    {
      id: 17,
      name: "Mint Bowl",
      price: 90.00,
      image: "../../images/vases/img_14.png",
      category: "vases",
      amount:1
    },
    {
      id: 18,
      name: "Gold & Black Pottery",
      price: 114.00,
      image: "../../images/vases/img_15.png",
      category: "vases",
      amount:1
    },
    {
      id: 19,
      name: "Red Ceramic",
      price: 45.00,
      image: "../../images/vases/img_16.png",
      category: "vases",
      amount:1
    },
    {
      id: 20,
      name: "Orange Plate",
      price: 43.00,
      image: "../../images/plates/img_4.png",
      category: "plates",
      amount:1
    },
  ])
  const [cart,setCart]=useState([]);
  const addCart=(id)=>{
    const check=cart.every(item=>{
      return item.id!==id;
    });
    if(check){
      const data=products.filter(product=>{
        return product.id===id
      })
      setCart([...cart,...data])
    }else{
      alert("product already added to cart")
    }
  }
  useEffect(() => {
    const cartData= JSON.parse (localStorage.getItem('cartData'))
     if(cartData){
       setCart(cartData);
     }
    }, [])
  useEffect(() => {
   localStorage.setItem('cartData',JSON.stringify (cart))
   
  }, [cart])



  const value={
    products: [products,setProducts],
    cart: [cart,setCart],
    addCart:addCart
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}





