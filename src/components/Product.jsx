export default function Product({icon, price, title, button}) {
  return (
    <>
        <img src={icon} alt="" />
        <b>{price}</b>
        <p>{title}</p>
        <button>{button}</button>
    </>
  )
}
