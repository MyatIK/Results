import './App.css';
import data from './data.json';
import ResultCard from './components/ResultCard';


function App() {
  const score=[data[0].score,data[1].score,data[2].score,data[3].score];

  const average=(scores)=>{
    let total=0;
      for(let i=0; i<scores.length; i++){
        total=total+scores[i];
      }
    
    let avg=total/scores.length;
    return  Math.round(avg);
    
  }


  return (
    <div className='h-screen flex justify-center items-center drop-shadow-md'>
      <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className='bg-gradient-to-b from-violet-500 to-blue-700  h-100 w-60 rounded-2xl p-5  -mb-5 xl:mb-0 z-10'>
          <p className='text-center text-gray-400 mb-5'>Your Result</p>
          <div className='flex justify-center'>
            <div className='w-40 h-40 rounded-full bg-gradient-to-b from-purpleheart-800 to-darkblue-700 mb-5'>
             
              <p className='text-center mt-10 text-5xl text-white'>{average(score)}</p>
              <p className='text-center text-gray-400'>of 100</p>
            </div>

          </div>
          
          <p className='text-white text-center'>Great</p>
          <p className='text-center text-gray-400 text-sm'>You scored higher than 65% of the people who have taken these tests.</p>


        </div>
        <div className='bg-white  h-100 w-65 rounded-2xl pt-10 xl:pt-5 xl:rounded-r-2xl p-5 xl:pl-10  xl:-ml-5 z-0'>
          <p className='mb-3'>Summary</p>   
          <ResultCard result={data[0]} className="bg-red-50"/>
          <ResultCard result={data[1]} className="bg-amber-50"/>
          <ResultCard result={data[2]} className="bg-teal-50"/>
          <ResultCard result={data[3]} className="bg-violet-50"/>

          <button className='rounded-full bg-black hover:bg-gradient-to-b from-violet-500 to-blue-700 text-white p-2 w-full text-center mt-3'>Continue</button>


        </div>



      </div>

    </div>
    
  );
}

export default App;
