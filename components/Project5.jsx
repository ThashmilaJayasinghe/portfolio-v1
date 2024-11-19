export default function Project5() {
  return(
    <div>
      <div className="flex items-center justify-center w-full group-hover:opacity-75 transition duration-300 ease-in-out">                
        <img
          className="opacity-80 rounded-md bg-brown-150 shadow-inner dark:shadow-inner shadow-stone-400 ring-1 ring-gray-400/10"
          src="./pacman.png"
          alt="Mobile App"
          width={800}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-fc-50 dark:text-fc-100">
      This classic arcade game, Pac-Man, is recreated using HTML, CSS, and JavaScript. 
      Players control Pac-Man as he navigates a maze, consuming dots and power pellets while 
      evading the colorful ghosts.
      </p>  
      <h4 className="mt-6 text-base text-fc-50 dark:text-fc-100 font-semibold">
        Key functionalities:
      </h4>
      <ul className="mt-2 list-inside list-disc text-sm leading-6 text-fc-50 dark:text-fc-100">
        <li><b>Game Board:</b> A visually appealing maze environment.</li>
        <li><b>Pac-Man Movement:</b> Player controls Pac-Man's movement using arrow keys.</li>
        <li><b>Ghost Movement:</b> Ghosts pursue Pac-Man with varying patterns.</li>
        <li><b>Power Pellet:</b> When consumed, Pac-Man can eat ghosts for a limited time.</li>
        <li><b>Dot Consumption:</b> Pac-Man earns points by consuming dots.</li>
        <li><b>Game Won:</b> The user wins by consuming all the dots and power pellets.</li>
        <li><b>Game Over:</b> The game ends when Pac-Man is caught by a ghost.</li>
        <li><b>Scorekeeping:</b> Tracks and displays the player's score.</li>
        <li><b>Sound Effects:</b> Provides immersive audio feedback for game actions.</li>
      </ul>  
    </div>
  );
}