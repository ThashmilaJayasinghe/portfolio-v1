export default function Project3() {
  return(
    <div>
      <div className="flex items-center justify-center w-full group-hover:opacity-75 transition duration-300 ease-in-out">                
        <img
          className="opacity-80 rounded-md bg-brown-150 shadow-inner dark:shadow-inner shadow-stone-400 ring-1 ring-gray-400/10"
          src="./recipe.png"
          alt="Mobile App"
          width={800}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-fc-50 dark:text-fc-100">
        This web application is a personal recipe book, allowing users to easily 
        manage their culinary creations. Built using the MERN stack, this app provides 
        a user-friendly platform to store, organize, and access recipes.
      </p>  
      <h4 className="mt-6 text-base text-fc-50 dark:text-fc-100 font-semibold">
        Key functionalities:
      </h4>
      <ul className="mt-2 list-inside list-disc text-sm leading-6 text-fc-50 dark:text-fc-100">
        <li><b>Recipe Creation:</b> Users can add new recipes, including titles, ingredients, instructions, and images.</li>
        <li><b>Recipe Editing:</b> Users can modify existing recipes.</li>
        <li><b>Recipe Deletion:</b> Users can remove unwanted recipes.</li>
        <li><b>Tagging System:</b> Users can assign tags to recipes (e.g., breakfast, lunch, dinner, favorite).</li>
        <li><b>Recipe Search:</b> Users can search for recipes based on the tags.</li>
        <li><b>User Authentication and Authorization:</b> Secure user accounts with JWT.</li>
      </ul>  
      <p className="mt-4 text-sm leading-6 text-fc-50 dark:text-fc-100">
        **Please note that this application is hosted on the free tier of Render, and as a result 
        there may be occasional delays in loading times.
      </p>  
    </div>
  );
}

