export default function Project4() {
  return(
    <div>
      <div className="flex items-center justify-center w-full group-hover:opacity-75 transition duration-300 ease-in-out">                
        <img
          className="opacity-80 rounded-md bg-brown-150 shadow-inner dark:shadow-inner shadow-stone-400 ring-1 ring-gray-400/10"
          src="./pomodoro.png"
          alt="Mobile App"
          width={800}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-fc-50 dark:text-fc-100">
      This web application is a digital Pomodoro Timer designed to enhance productivity and focus. 
      Built using the MERN stack, this tool implements the classic Pomodoro Technique, allowing users to break down 
      work into focused intervals.
      </p>  
      <h4 className="mt-6 text-base text-fc-50 dark:text-fc-100 font-semibold">
        Key functionalities:
      </h4>
      <ul className="mt-2 list-inside list-disc text-sm leading-6 text-fc-50 dark:text-fc-100">
        <li><b>Timer:</b> Tracks time for both focus and break sessions.</li>
        <li><b>Session Management:</b> Automatically switches between focus and break sessions.</li>
        <li><b>Pause/Resume:</b> Allows users to pause and resume the timer at any point.</li>
        <li><b>Reset:</b> Resets the current session or break.</li>
        <li><b>Skip:</b> Skips the current session or break.</li>
        <li><b>Audio Notifications:</b> Plays a bell sound at the end of each focus and break session.</li>
        <li><b>User-Friendly Interface:</b> Provides a clean and intuitive user interface.</li>
      </ul>  
    </div>
  );
}