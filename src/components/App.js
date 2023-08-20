import baseStyle from './styles/Base.module.css'
import Contacts from "./modules/Contacts";

function App() {
  return (
      <div className={baseStyle.mainContainer}>
            <Contacts></Contacts>
      </div>
    );
}

export default App;
