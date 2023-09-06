import './App.css';
import './Font/HankenGrotesk-Medium.ttf';
import './Font/HankenGrotesk-Bold.ttf';
import './Font/HankenGrotesk-ExtraBold.ttf';


function App() {
  return (
    <div className='mx-auto grid grid-cols-1 xl:grid-cols-2'>
      <div className='bg-gradient-to-b from-violet-500 to-blue-700  h-64 rounded-md p-5'>
        <p className='text-center'>Your Result</p>
        <div className='w-40 h-40 rounded-full bg-gradient-to-b from-purpleheart-800 to-darkblue-700'>
          <p className='text-center'>76</p>
          <p className='text-center'>of 100</p>
        </div>
        <p className='text-white'>Great</p>
        <p>You scored higher than 65% of the people who have taken these tests.</p>


      </div>
      <div>
        <p>Summary</p>


      </div>



    </div>
  );
}

export default App;
