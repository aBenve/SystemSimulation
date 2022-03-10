import './App.css';
import DarkModeButton from './components/DarkModeButton';
import MySketch from './components/MySketch';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className='background flex flex-col justify-center items-center overflow-y-auto'>
        <section className='w-1/2'>

          <NavBar/>

          <section className="bg-red-500 text-lg flex flex-col justify-center items-center min-h-screen h-full p-5 space-y-5 ">
            <MySketch width={300} height={300}/>

          </section>
          <DarkModeButton/>
        </section>
      </div>
    </>
  );
}

export default App;
