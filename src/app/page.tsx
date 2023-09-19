import CardList from "../components/cardList/CardList";
import CategoryList from "../components/categoryList/CategoryList";
import Featured from "../components/featured/Featured";
import Menu from "../components/menu/Menu";
import styles from "./homepage.module.css";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const size = parseInt(searchParams.size) || 2;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} size={size} />
        <Menu />
      </div>
    </div>
  );
}
