export default function Project6() {
  return(
    <div>
      <div className="flex items-center justify-center w-full group-hover:opacity-75 transition duration-300 ease-in-out">                
        <img
          className="opacity-80 rounded-md bg-brown-150 shadow-inner dark:shadow-inner shadow-stone-400 ring-1 ring-gray-400/10"
          src="./research.png"
          alt="Mobile App"
          width={600}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-fc-50 dark:text-fc-100">
        This project was a collaborative effort undertaken by myself 
        and my team members (Ramath Manjitha, Kenuri Vidsala, Suboda Dabarera) 
        as part of our final year undergraduate research. 
        Our research culminated in a paper titled "An Expert System for 
        the Early Identification and Development of Musical Talent in Children", 
        which was presented at the <a href="https://icac.lk/2023-2/" target="_blank" className="underline text-brown-150 hover:text-orange-600 visited:text-red-600">
        5th International Conference on Advancements in 
        Computing (ICAC) 2023</a>
        &nbsp;and subsequently published in the <a href="https://ieeexplore.ieee.org/document/10417692" target="_blank" className="underline text-brown-150 hover:text-orange-600 visited:text-red-600">
        IEEE Xplore digital library</a>.
      </p>
      <p className="text-sm leading-6 text-fc-50 dark:text-fc-100">
        Leading the research team, I presented our paper at ICAC 2023. My specific focus was on assessing the emotional impact of music on children's development through a CNN model I developed for facial expression analysis.
      </p>
      <h4 className="mt-6 text-base text-fc-50 dark:text-fc-100 font-semibold">
        The abstract from the paper:
      </h4>
      <p className="text-sm leading-6 text-fc-50 dark:text-fc-100">
        This paper presents “Tune Tots,” an expert system aimed to identify and develop children's musical talents in the age range of one to eight years. Acknowledging the significant impact of music on the development of young children, the system is designed as a mobile application that provides personalized recommendations for musical activities and monitors the child's progress as time passes. In order to evaluate audio data, collect emotional response data, recommend musical activities, monitor progress, and alter User Interface (UI) elements, the system makes use of machine and deep learning techniques. Through the application, the parents can view the progress of their child. The xylophone is used for the activities because of its easy learning curve. React Native was used in the development of the application, and Google Cloud Platform was used to load and deploy the machine learning models for predictions. Firebase was used to meet the database needs. Parental feedback indicates positive responses, and greater focus in children, affirming the system's potential in early childhood development through music. The system is composed of three key components: the evaluation of the child's baseline musical talent, the recommendation of personalized musical activities, and the customization of UI.
      </p>
      
    </div>
  );
}