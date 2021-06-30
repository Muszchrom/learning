export default function Hamburger () {
  const handleClick = () => {
    document.querySelector('.hamburger').classList.toggle('hamburger-active');
    // nav.classList.toggle('navigation-active');
    document.querySelector('.main-header').classList.toggle('header-navigation-active');
    document.querySelector('.navigation').classList.toggle('navigation-active');
    document.getElementsByTagName('body')[0].classList.toggle('body-navigation-active');
  }
  return (
    <button
      className="hamburger"
      onClick={handleClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}
