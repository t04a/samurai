import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png' alt='' />
    </header>
  );
}

export default Header;