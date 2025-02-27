import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div>
        <h3>Logo</h3>
      </div>
      <div className={styles.navlinks}>
        <p>Home</p>
        <p>Destinations</p>
        <p>Leisure Packages</p>
        <p>Wildlife Packages</p>
        <p>Blogs</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div>
        <button className={styles.booknow}>Book Now</button>
      </div>
    </div>
  );
}
export default NavBar;
