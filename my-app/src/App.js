import css from './App.module.css'
import Sidebar from './components/Sidebar'
import NavBarForm from './components/NavBarForm';
import ContentHooks from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;