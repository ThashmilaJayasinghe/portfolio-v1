export default function Project1() {
  return(
    <div>
      <div className="flex items-center justify-center w-full group-hover:opacity-75 transition duration-300 ease-in-out">                
        <img
          className="opacity-80 rounded-md bg-brown-150 shadow-inner dark:shadow-inner shadow-stone-400 ring-1 ring-gray-400/10"
          src="./agri.png"
          alt="Mobile App"
          width={800}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-fc-50 dark:text-fc-100">
        This project tackled the challenge of imbalanced supply and demand in Sri Lanka's agricultural sector. 
        As part of a collaborative effort in our undergraduate studies, we developed this MERN stack web application 
        to bridge the gap between farmers and buyers. Agile methodology was used for iterative development of the proposed web application.
      </p>  
      <h4 className="mt-6 text-base text-fc-50 dark:text-fc-100 font-semibold">
        Key functionalities:
      </h4>
      <ul className="mt-2 list-inside list-disc text-sm leading-6 text-fc-50 dark:text-fc-100">
        <li><b>Buyers:</b> Place orders for crops, setting the demand.</li>
        <li><b>Farmers:</b> Request seeds based on the announced demand.</li>
        <li>
          <b>Agricultural Department:</b>
          <ul className="mt-0.5 ml-12 list-inside list-disc text-sm leading-6 text-fc-50 dark:text-fc-100">
            <li>Manages announcements for both orders and seed requests.</li>
            <li>Analyzes supply and demand data.</li>
            <li>Approves/rejects seed requests based on projected yields and demand.</li>
            <li>Suggests alternative crops to farmers (if needed).</li>
          </ul>  
        </li>
      </ul>  
      <h4 className="mt-6 text-base text-fc-50 dark:text-fc-100 font-semibold">
        Benefits:
      </h4>
      <ul className="mt-2 list-inside list-disc text-sm leading-6 text-fc-50 dark:text-fc-100">
        <li>Reduces crop waste by aligning supply with demand.</li>
        <li>Ensures fairer treatment for both farmers and consumers.</li>
        <li>Provides real-time data for informed decision-making by the agricultural department.</li>        
      </ul>  
    </div>
  );
}