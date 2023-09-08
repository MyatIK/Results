
function ResultCard(props){
   
    return(
        <div className={`flex mb-3 rounded-md p-3 justify-between ${props.className}`}>
            <div className='flex'>
                <img src={props.result.icon} alt={props.result.category} className='mr-1'/>
                <p>{props.result.category}</p>
            </div>
            <div className='flex'>
                 <p>{props.result.score}</p>
                <p className='text-gray-400'>/100</p>

            </div>

        </div>
    )
}

export default ResultCard;