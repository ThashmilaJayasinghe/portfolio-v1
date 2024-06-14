export default function Project2() {
  return(
    <div>
      <div className="flex items-center justify-center w-full group-hover:opacity-75 transition duration-300 ease-in-out">                 
        <img
          className="rounded-md bg-brown-150 shadow-inner dark:shadow-inner shadow-stone-400 ring-1 ring-gray-400/10"
          src="./ipv.png"
          alt="Mobile App"
          width={500}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-fc-50 dark:text-fc-100">
        This project is a mobile application designed to 
        empower victims of Intimate Partner Violence (IPV). There is a high 
        prevalence of IPV in Sri Lanka, with many cases unreported due to fear and shame.
        There is difficulty for victims to access information, support networks, and evidence collection tools. 
        The app was developed collaboratively as part of an undergraduate project. 
      </p>  
      <h4 className="mt-6 text-base text-fc-50 dark:text-fc-100 font-semibold">
        Key functionalities:
      </h4>
      <ul className="mt-2 list-inside list-disc text-sm leading-6 text-fc-50 dark:text-fc-100">
        <li><b>Information & Education:</b> Access to blogs written by professionals about IPV.</li>
        <li><b>Anonymous Support:</b> Chat with counselors and lawyers anonymously.</li>
        <li><b>Safe Evidence Collection:</b> Store photos, recordings, and documents securely.</li>
        <li><b>Emergency Assistance:</b> Pre-registered contact information for immediate help.</li>
        <li><b>Simplicity & Usability:</b> Easy-to-navigate interface for use during stressful situations.</li>
        <li><b>Safety & Privacy:</b> Disguised as a salon app to avoid unwanted attention.</li>
      </ul>        
    </div>
  );
}