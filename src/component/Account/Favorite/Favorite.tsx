import Sidebar from "../Sidebar";
import { FavoritesProps } from "../interfaces";

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <div>
      <Sidebar />
      <h2>Список бажань</h2>
    </div>
  );
};
export default Favorites;